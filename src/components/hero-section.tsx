'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'

export default function HeroSection() {
  return (
    <section className="flex flex-col justify-center pb-6 h-screen bg-gradient-to-r from-blue-100 to-blue-200" id="Home">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <motion.h1 
              className="text-5xl lg:text-6xl font-bold text-blue-1000"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              We are<br />
              KSL Fido Global
            </motion.h1>
            <motion.p 
              className="text-xl font-bold text-blue-600"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Cut Costs <br />
              Achive More <br />
              Hire Virual Assistance  <br />
            </motion.p>
            <motion.p 
              className="text-l font-bold text-blue-900"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              With change in market dynamics & evolving business needs. Transform your business with our expert virtual assistance solutions. With highly experienced professionals, we can reduce the operational costs, save time and allow you to focus on growth. Experience significant savings with our focused team, sheer will and commitment!
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <Link
                href="#Portfolio"  // Use #Portfolio to target the section on the same page
                className="inline-block bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors duration-300"
              >
                See Projects → 
              </Link>
            </motion.div>
          </div>
          <motion.div 
            className="relative h-[400px] lg:h-[500px]"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <Image
              src="/img1.png"
              alt="Hero illustration"
              fill
              className="object-contain"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
