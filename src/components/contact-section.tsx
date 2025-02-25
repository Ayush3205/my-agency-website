'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import toast from 'react-hot-toast'
import Image from 'next/image'
import cardImage from   '/public/industry-expertise.jpg'
import businessMeetingImage from   '/public/business-meeting.jpg'

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [, setIsSubmitting] = useState(false)

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        throw new Error('Failed to send message')
      }

      toast.success('Message sent successfully!')
      setFormData({ name: '', email: '', message: '' })
    } catch (error) {
      console.error('Error:', error)
      toast.error('Failed to send message. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <motion.section 
      className="py-16 bg-white flex flex-col md:flex-row-reverse items-center container mx-auto px-6"
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
    >
      <div className="w-full md:w-1/2 flex flex-col space-y-4 mt-10 md:mt-0">
        <div className="rounded-xl overflow-hidden shadow-lg">
          <Image src={cardImage} alt="Industry-Specific Expertise" width={500} height={300} className="w-full" />
          <p className="p-4 font-semibold">Industry-Specific Expertise</p>
        </div>
        <div className="rounded-xl overflow-hidden shadow-lg">
          <Image src={businessMeetingImage} alt="Business Consultation" width={500} height={300} className="w-full" />
          <p className="p-4 font-semibold">Business Consultation</p>
        </div>
      </div>
      <div className="w-full md:w-1/2.5 text-left">
        <h2 className="text-4xl font-bold text-black mb-4">
          DynaPro Global: Your Strategic Partner in Virtual Assistance
        </h2>
        <p className="text-gray-600 mb-6">
          With us, you get the expertise you need and the flexibility to scale your business without limits.
        </p>
        <ul className="space-y-2 text-gray-700">
          <li className="flex items-center"><span className="mr-2">🔍</span> Manage Daily Mundane Tasks With Ease</li>
          <li className="flex items-center"><span className="mr-2">📶</span> Operational Cost Savings by up to 40%</li>
          <li className="flex items-center"><span className="mr-2">⚡</span> Increased Productivity by up to 30%</li>
          <li className="flex items-center"><span className="mr-2">👥</span> More Focus on Business Growth</li>
          <li className="flex items-center"><span className="mr-2">📊</span> Flexibility to Scale</li>
        </ul>
        <form onSubmit={handleSubmit} className="space-y-4 mt-6 w-3/4">
          <input type="text" placeholder="Your Full Name" className="w-full px-4 py-3 rounded-md bg-gray-200 text-black border" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} required />
          <input type="email" placeholder="Email Address" className="w-full px-4 py-3 rounded-md bg-gray-200 text-black border" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} required />
          <textarea placeholder="Write Message" rows={4} className="w-full px-4 py-3 rounded-md bg-gray-200 text-black border" value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} required />
          <button type="submit" className="mt-4 bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-all">Book Your Free Trial</button>
        </form>
      </div>
    </motion.section>
  )
}
