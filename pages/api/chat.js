// Real Salesforce-backed Order Chat API
// This endpoint is used by the embedded chat widget on the landing page.
//
// Requirements (Railway env vars):
// - SF_LOGIN_URL (default https://login.salesforce.com)
// - SF_USERNAME
// - SF_PASSWORD
// - SF_SECURITY_TOKEN
//
// Notes:
// - We intentionally avoid made-up demo orders. If Salesforce creds are missing,
//   we return a clear error.

import jsforce from 'jsforce'

let cachedConn = null
let cachedConnAt = 0

function requiredEnv(name) {
  const v = process.env[name]
  return v && String(v).trim().length ? v : null
}

function getSfConfig() {
  const loginUrl = requiredEnv('SF_LOGIN_URL') || 'https://login.salesforce.com'
  const username = requiredEnv('SF_USERNAME')
  const password = requiredEnv('SF_PASSWORD')
  const securityToken = requiredEnv('SF_SECURITY_TOKEN')

  if (!username || !password || !securityToken) {
    return { ok: false, loginUrl }
  }

  return {
    ok: true,
    loginUrl,
    username,
    // Salesforce expects password concatenated with security token for API login
    password: `${password}${securityToken}`,
  }
}

async function getConnection() {
  // Cache connection for 10 minutes to reduce login churn
  const now = Date.now()
  if (cachedConn && now - cachedConnAt < 10 * 60 * 1000) return cachedConn

  const cfg = getSfConfig()
  if (!cfg.ok) {
    const missing = ['SF_USERNAME', 'SF_PASSWORD', 'SF_SECURITY_TOKEN']
      .filter((k) => !requiredEnv(k))
      .join(', ')
    throw new Error(`Salesforce credentials missing (${missing}). Set env vars in Railway for real-real mode.`)
  }

  const conn = new jsforce.Connection({ loginUrl: cfg.loginUrl })
  await conn.login(cfg.username, cfg.password)

  cachedConn = conn
  cachedConnAt = now
  return conn
}

function extractOrderNumber(text) {
  const patterns = [/ORD-?(\d+)/i, /#(\d+)/, /order\s*#?\s*(\d+)/i, /\b(\d{4,})\b/]
  for (const pattern of patterns) {
    const match = text.match(pattern)
    if (match) {
      const num = String(match[1]).padStart(5, '0')
      return `ORD-${num}`
    }
  }
  return null
}

function formatOrder(order) {
  const lines = []
  lines.push(`📦 Order **${order.Name}**`)
  if (order.Status__c) lines.push(`• Status: **${order.Status__c}**`)
  if (order.Order_Total__c != null) lines.push(`• Total: $${Number(order.Order_Total__c).toFixed(2)}`)
  if (order.Order_Date__c) lines.push(`• Ordered: ${new Date(order.Order_Date__c).toLocaleDateString()}`)

  if (order.Shipping_Carrier__c) lines.push(`• Carrier: ${order.Shipping_Carrier__c}`)
  if (order.Tracking_Number__c) lines.push(`• Tracking: ${order.Tracking_Number__c}`)
  if (order.Estimated_Delivery__c) lines.push(`• ETA: ${new Date(order.Estimated_Delivery__c).toLocaleDateString()}`)

  if (order.Items__c) lines.push(`• Items: ${order.Items__c}`)
  if (order.Shipping_Address__c) lines.push(`• Ship To: ${order.Shipping_Address__c}`)

  return lines.join('\n')
}

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' })

  try {
    const { message } = req.body || {}
    if (!message || !String(message).trim()) {
      return res.status(400).json({ error: 'Message is required' })
    }

    const orderNumber = extractOrderNumber(String(message))
    if (!orderNumber) {
      return res.status(200).json({
        reply: `I can help track a real order from Salesforce. Please provide an order number like ORD-00012 (or just 12).`,
        orderContext: null,
        mode: 'salesforce',
      })
    }

    const conn = await getConnection()

    const soql = `
      SELECT Name, Status__c, Customer_Email__c, Customer_Phone__c,
             Shipping_Carrier__c, Tracking_Number__c, Estimated_Delivery__c,
             Shipping_Address__c, Order_Total__c, Order_Date__c, Items__c
      FROM Order__c
      WHERE Name = '${orderNumber.replace(/'/g, "\\'")}'
      LIMIT 1
    `

    const result = await conn.query(soql)
    const order = result.records && result.records.length ? result.records[0] : null

    if (!order) {
      return res.status(200).json({
        reply: `I couldn’t find **${orderNumber}** in Salesforce. Double-check the number and try again.`,
        orderContext: null,
        mode: 'salesforce',
      })
    }

    return res.status(200).json({
      reply: formatOrder(order),
      orderContext: order,
      mode: 'salesforce',
    })
  } catch (err) {
    console.error('Order chat error:', err)
    return res.status(500).json({
      reply:
        `❌ Order Chat is not connected yet.\n\n` +
        `To enable real-real mode, set Railway env vars: SF_USERNAME, SF_PASSWORD, SF_SECURITY_TOKEN (and optionally SF_LOGIN_URL).\n\n` +
        `Error: ${err.message}`,
      orderContext: null,
      mode: 'error',
    })
  }
}
