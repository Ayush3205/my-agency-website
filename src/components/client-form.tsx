'use client'

import { useState, FormEvent } from 'react'

export default function ClientForm() {
  const [email, setEmail] = useState('')

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Handle form submission logic here
    console.log('Submitted email:', email)
  }

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <input
        type="email"
        placeholder="Write Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full px-4 py-3 rounded-md bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button
        type="submit"
        className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors"
      >
        Subscribe →
      </button>
    </form>
  )
}