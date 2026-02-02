// Mock Order Chat API for demo purposes
// In production, this would connect to the real Salesforce/OpenAI backend

const DEMO_ORDERS = {
  'ORD-00001': {
    Name: 'ORD-00001',
    Status__c: 'Delivered',
    Customer_Email__c: 'john@example.com',
    Customer_Phone__c: '(555) 123-4567',
    Items__c: 'MacBook Pro 16", USB-C Cable, Apple Care',
    Order_Total__c: 2499.99,
    Order_Date__c: '2025-01-15',
    Shipping_Address__c: '123 Main St, San Francisco, CA 94105',
    Shipping_Carrier__c: 'FedEx',
    Tracking_Number__c: 'FDX123456789',
    Estimated_Delivery__c: '2025-01-25'
  },
  'ORD-00002': {
    Name: 'ORD-00002',
    Status__c: 'Shipped',
    Customer_Email__c: 'jane@example.com',
    Customer_Phone__c: '(555) 987-6543',
    Items__c: 'iPad Air 64GB, Pencil, Smart Keyboard',
    Order_Total__c: 1899.99,
    Order_Date__c: '2025-01-20',
    Shipping_Address__c: '456 Oak Ave, New York, NY 10001',
    Shipping_Carrier__c: 'UPS',
    Tracking_Number__c: 'UPS987654321',
    Estimated_Delivery__c: '2025-02-05'
  },
  'ORD-00003': {
    Name: 'ORD-00003',
    Status__c: 'Processing',
    Customer_Email__c: 'bob@example.com',
    Customer_Phone__c: '(555) 456-7890',
    Items__c: 'AirPods Pro, Lightning Cable, Charging Case',
    Order_Total__c: 249.99,
    Order_Date__c: '2025-02-01',
    Shipping_Address__c: '789 Elm St, Austin, TX 78701',
    Shipping_Carrier__c: null,
    Tracking_Number__c: null,
    Estimated_Delivery__c: null
  },
  'ORD-00004': {
    Name: 'ORD-00004',
    Status__c: 'Draft',
    Customer_Email__c: 'alice@example.com',
    Customer_Phone__c: '(555) 321-0987',
    Items__c: 'iPhone 15 Pro Max, Pro Max Case',
    Order_Total__c: 1299.99,
    Order_Date__c: '2025-02-02',
    Shipping_Address__c: '321 Pine St, Seattle, WA 98101',
    Shipping_Carrier__c: null,
    Tracking_Number__c: null,
    Estimated_Delivery__c: null
  }
}

const ORDER_STATUS_INFO = {
  'Draft': 'Your order has been received and is awaiting payment confirmation. Please complete payment to proceed.',
  'Processing': 'Your payment has been confirmed! We\'re preparing your order for shipment. You should see tracking info within 24 hours.',
  'Shipped': 'Your order is on the way! Track your package with the carrier using the tracking number provided.',
  'Delivered': 'Your order has been delivered! If you have any issues, please contact our support team.',
  'Cancelled': 'This order was cancelled. If this was not intentional, please contact support. Refunds are processed within 5-7 business days.'
}

function extractOrderNumber(text) {
  // Match patterns like ORD-00001, ORD00001, #12345, 12345, order 12345
  const patterns = [
    /ORD-?(\d+)/i,
    /#(\d+)/,
    /order\s*#?\s*(\d+)/i,
    /\b(\d{4,})\b/
  ]

  for (const pattern of patterns) {
    const match = text.match(pattern)
    if (match) {
      const num = match[1].padStart(5, '0')
      return `ORD-${num}`
    }
  }
  return null
}

function formatOrderDetails(order) {
  let details = `📦 **Order ${order.Name}**\n`
  details += `• Status: ${order.Status__c}\n`
  details += `• Items: ${order.Items__c}\n`
  details += `• Total: $${order.Order_Total__c.toFixed(2)}\n`
  details += `• Ordered: ${new Date(order.Order_Date__c).toLocaleDateString()}\n`
  
  if (order.Status__c === 'Shipped' || order.Status__c === 'Delivered') {
    details += `• Carrier: ${order.Shipping_Carrier__c}\n`
    details += `• Tracking: ${order.Tracking_Number__c}\n`
    if (order.Estimated_Delivery__c) {
      details += `• ETA: ${new Date(order.Estimated_Delivery__c).toLocaleDateString()}\n`
    }
  }
  
  return details
}

function generateResponse(message, order) {
  const lowerMsg = message.toLowerCase()
  
  // Greeting responses
  if (lowerMsg.match(/hi|hello|hey/)) {
    return order 
      ? `Hi there! I found your ${order.Name}. It's currently **${order.Status__c}**. What would you like to know about it?`
      : `Hi! 👋 I'd love to help you track your order. Could you share your order number?`
  }

  // Status questions
  if (lowerMsg.match(/status|where|progress|update/)) {
    if (!order) return `I'd need your order number to check the status. Could you provide it?`
    return `${formatOrderDetails(order)}\n\n${ORDER_STATUS_INFO[order.Status__c] || 'Status update coming soon!'}`
  }

  // Tracking questions
  if (lowerMsg.match(/track|tracking|carrier|ship|where.*order/)) {
    if (!order) return `Please provide your order number and I'll get you the tracking info!`
    if (order.Status__c === 'Draft' || order.Status__c === 'Processing') {
      return `Your order hasn't shipped yet, so tracking isn't available. Tracking info will be available once your order ships within the next 24 hours.`
    }
    if (order.Tracking_Number__c) {
      return `📍 Tracking Details:\n• Carrier: ${order.Shipping_Carrier__c}\n• Tracking #: ${order.Tracking_Number__c}\n\nYou can also track directly on the ${order.Shipping_Carrier__c} website.`
    }
    return `Tracking info isn't available yet. Please check back soon!`
  }

  // Delivery date questions
  if (lowerMsg.match(/when|arrive|delivery|eta|deliver/)) {
    if (!order) return `What's your order number? I'll check the delivery date for you.`
    if (!order.Estimated_Delivery__c) {
      return `The estimated delivery date will be available once your order ships. Check back tomorrow for an update!`
    }
    const deliveryDate = new Date(order.Estimated_Delivery__c).toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
    return `Your order is estimated to arrive on **${deliveryDate}**. 🚚`
  }

  // Items/contents questions
  if (lowerMsg.match(/what|item|product|contain|include/)) {
    if (!order) return `Please share your order number to see what's in your order.`
    return `Your order contains:\n${order.Items__c}\n\nTotal: $${order.Order_Total__c.toFixed(2)}`
  }

  // Default response
  if (!order) {
    return `I can help you track your order! Please share your order number (like ORD-00001 or just 12345).`
  }

  return `${formatOrderDetails(order)}\n\nIs there anything specific you'd like to know about your order?`
}

export default function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  try {
    const { message, conversationHistory, orderContext } = req.body

    if (!message || !message.trim()) {
      return res.status(400).json({ error: 'Message is required' })
    }

    // Extract order number from message
    let order = orderContext
    const orderNumber = extractOrderNumber(message)
    
    if (orderNumber && (!order || order.Name !== orderNumber)) {
      order = DEMO_ORDERS[orderNumber] || null
    }

    // Generate response
    const reply = generateResponse(message, order)

    // Return response
    res.status(200).json({
      reply,
      orderContext: order || null
    })
  } catch (error) {
    console.error('Chat error:', error)
    res.status(500).json({
      reply: '❌ Sorry, I encountered an error. Please try again or contact support@saleslobster.com.',
      orderContext: null
    })
  }
}
