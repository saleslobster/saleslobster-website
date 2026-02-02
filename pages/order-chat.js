import Head from 'next/head'
import OrderChat from '../components/OrderChat'

export default function OrderChatPage() {
  return (
    <>
      <Head>
        <title>Order Chat | SalesLobster</title>
        <meta name="description" content="Order Chat" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main className="max-w-5xl mx-auto px-4 py-16">
        <div className="mb-8">
          <h1 className="text-4xl font-extrabold">Order Chat</h1>
          <p className="text-gray-400 mt-2">Ask about your order.</p>
        </div>

        <div className="h-[620px]">
          <OrderChat />
        </div>
      </main>
    </>
  )
}
