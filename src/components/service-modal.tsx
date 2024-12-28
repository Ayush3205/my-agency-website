'use client'

import { useState, useEffect } from 'react'
import { X } from 'lucide-react'

interface ServiceModalProps {
  isOpen: boolean
  onClose: () => void
  title: string
  services: string[]
}

export default function ServiceModal({ isOpen, onClose, title, services }: ServiceModalProps) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true)
    } else {
      const timer = setTimeout(() => setIsVisible(false), 300)
      return () => clearTimeout(timer)
    }
  }, [isOpen])

  if (!isVisible) return null

  return (
    <div className={`fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0'}`}>
      <div className={`bg-white rounded-lg p-8 max-w-md w-full max-h-[80vh] overflow-y-auto transition-all duration-300 ${isOpen ? 'scale-100' : 'scale-95'}`}>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold text-gray-900">{title}</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <X className="h-6 w-6" />
          </button>
        </div>
        <ul className="list-disc pl-5 space-y-2">
          {services.map((service, index) => (
            <li key={index} className="text-gray-700">{service}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}