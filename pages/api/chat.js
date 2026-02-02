// Order Chat API for SalesLobster Website
//
// Mode 1 (preferred for "no Salesforce creds on Railway"):
//   Proxy to an external backend that has SFDX auth.
//   Env vars:
//     ORDERCHAT_BACKEND_URL=https://...trycloudflare.com
//     ORDERCHAT_BACKEND_TOKEN=...
//
// Mode 2 (fallback):
//   Return a clear error.

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' })

  try {
    const message = req.body?.message
    if (!message || !String(message).trim()) {
      return res.status(400).json({ error: 'Message is required' })
    }

    const backendUrl = process.env.ORDERCHAT_BACKEND_URL
    const token = process.env.ORDERCHAT_BACKEND_TOKEN

    if (!backendUrl || !token) {
      return res.status(500).json({
        reply:
          '❌ Order Chat is not fully configured.\n\n' +
          'To enable real-real mode without storing Salesforce creds on Railway, set:\n' +
          '- ORDERCHAT_BACKEND_URL\n' +
          '- ORDERCHAT_BACKEND_TOKEN\n',
        orderContext: null,
        mode: 'unconfigured',
      })
    }

    const r = await fetch(`${backendUrl.replace(/\/$/, '')}/order`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-orderchat-token': token,
      },
      body: JSON.stringify({ message }),
    })

    if (!r.ok) {
      const t = await r.text().catch(() => '')
      throw new Error(`Backend error (${r.status}): ${t}`)
    }

    const data = await r.json()
    return res.status(200).json({
      reply: data.reply,
      orderContext: data.orderContext || null,
      mode: data.mode || 'sfdx',
    })
  } catch (err) {
    console.error(err)
    return res.status(500).json({
      reply: `❌ Order Chat backend error: ${err.message}`,
      orderContext: null,
      mode: 'error',
    })
  }
}
