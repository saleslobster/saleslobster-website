import React, { useState, useRef, useEffect } from 'react'
import { Send, Loader, Package, AlertCircle } from 'lucide-react'

export default function OrderChat() {
  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      content: 'Hi! 🦞 I\'m the SalesLobster Order Assistant. Enter your order number (like ORD-00001) to track your order, or ask me anything about your shipment!'
    }
  ])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const [orderContext, setOrderContext] = useState(null)
  const [error, setError] = useState(null)
  const messagesEndRef = useRef(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const sendMessage = async (e) => {
    e.preventDefault()
    if (!input.trim()) return

    // Add user message
    const userMessage = { role: 'user', content: input }
    setMessages(prev => [...prev, userMessage])
    setInput('')
    setLoading(true)
    setError(null)

    try {
      // Call the chat API
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: input,
          conversationHistory: [...messages, userMessage],
          orderContext: orderContext
        })
      })

      if (!response.ok) {
        throw new Error('Failed to get response from chat service')
      }

      const data = await response.json()
      const assistantMessage = { role: 'assistant', content: data.reply }
      setMessages(prev => [...prev, assistantMessage])
      
      if (data.orderContext) {
        setOrderContext(data.orderContext)
      }
    } catch (err) {
      console.error('Chat error:', err)
      setError(err.message)
      setMessages(prev => [...prev, {
        role: 'assistant',
        content: '❌ Sorry, I encountered an error. Please try again or contact support.'
      }])
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="flex flex-col h-full bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-lg border border-gray-700 overflow-hidden">
      {/* Header */}
      <div className="bg-lobster/20 border-b border-gray-700 p-4">
        <div className="flex items-center gap-3">
          <Package className="text-lobster" size={24} />
          <div>
            <h3 className="font-bold">Order Tracking Assistant</h3>
            <p className="text-xs text-gray-400">Powered by SalesLobster 🦞</p>
          </div>
        </div>
        {orderContext && (
          <div className="mt-3 text-sm bg-green-900/20 border border-green-700 rounded p-2">
            <p className="text-green-400">
              ✓ Order <span className="font-bold">{orderContext.Name}</span> loaded ({orderContext.Status__c})
            </p>
          </div>
        )}
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((msg, idx) => (
          <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div
              className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                msg.role === 'user'
                  ? 'bg-lobster text-white rounded-br-none'
                  : 'bg-gray-700 text-gray-100 rounded-bl-none'
              }`}
            >
              <p className="text-sm whitespace-pre-wrap break-words">{msg.content}</p>
            </div>
          </div>
        ))}
        {loading && (
          <div className="flex justify-start">
            <div className="bg-gray-700 text-gray-100 px-4 py-2 rounded-lg rounded-bl-none">
              <Loader className="animate-spin" size={20} />
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Error Alert */}
      {error && (
        <div className="bg-red-900/20 border-t border-red-700 p-3 text-sm text-red-400 flex items-center gap-2">
          <AlertCircle size={16} />
          {error}
        </div>
      )}

      {/* Input */}
      <form onSubmit={sendMessage} className="border-t border-gray-700 p-4 bg-gray-800/50">
        <div className="flex gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Enter order number (e.g., ORD-00001) or ask a question..."
            disabled={loading}
            className="flex-1 bg-gray-700 border border-gray-600 rounded px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-lobster transition disabled:opacity-50"
          />
          <button
            type="submit"
            disabled={loading || !input.trim()}
            className="bg-lobster hover:bg-lobster-dark disabled:opacity-50 text-white rounded px-4 py-2 transition flex items-center gap-2"
          >
            {loading ? <Loader className="animate-spin" size={18} /> : <Send size={18} />}
          </button>
        </div>
        <p className="text-xs text-gray-400 mt-2">
          💡 Tip: Try entering an order number like "ORD-00001" or "12345"
        </p>
      </form>
    </div>
  )
}
