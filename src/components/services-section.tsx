'use client'

import { Code, Smartphone, Palette, Layout } from 'lucide-react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export default function ServicesSection() {
  const services = [
    {
      icon: <Layout className="h-12 w-12 text-blue-800" />,
      title: "Executive Assistance",
      description: (
        <ul className="list-disc pl-5">
          <li>Administrative Support</li>
          <li>Calendar Management</li>
          <li>Chat Support</li>
          <li>Email Management</li>
          <li>Expense Management</li>
          <li>Project Management</li>
          <li>Report Preparation</li>
          <li>Travel Coordination</li>
        </ul>
      )
    },
    {
      icon: <Palette className="h-12 w-12 text-blue-800" />,
      title: "E-commerce Solutions",
      description: (
        <ul className="list-disc pl-5">
          <li>Cart Abandonment Solutions</li>
          <li>Customer Relationship Management (CRM)</li>
          <li>Digital Marketing for E-commerce</li>
          <li>E-commerce Platform Integration</li>
          <li>Inventory Management</li>
          <li>Order Fulfillment and Shipping</li>
          <li>Product Listing and Management</li>
          <li>SEO for E-commerce</li>
        </ul>
      )
    },
    
    {
      icon: <Palette className="h-12 w-12 text-blue-800" />,
      title: "Graphic Design",
      description: (
        <ul className="list-disc pl-5">
          <li>Logos</li>
          <li>Flyers</li>
          <li>Visiting cards</li>
          <li>Social media designs</li>
        </ul>
      )
    },
    
    {
      icon: <Palette className="h-12 w-12 text-blue-800" />,
      title: "Digital Marketing",
      description: (
        <ul className="list-disc pl-5">
          <li>Affiliate Marketing</li>
          <li>Content Marketing</li>
          <li>Conversion Rate Optimization (CRO)</li>
          <li>Email Marketing</li>
          <li>Influencer Marketing</li>
          <li>Pay-Per-Click Advertising (PPC)</li>
          <li>SEO</li>
          <li>Social Media Marketing</li>
          <li>Web Analytics</li>
        </ul>
      )
    },
    
    {
      icon: <Code className="h-12 w-12 text-blue-800" />,
      title: "Design Services",
      description: (
        <ul className="list-disc pl-5">
          <li>Graphic Design</li>
          <li>Product Design</li>
          <li>UI/UX Design</li>
          <li>Video Editing</li>
        </ul>
      )
    },
    {
      icon: <Smartphone className="h-12 w-12 text-blue-800" />,
      title: "Web & App Development",
      description: (
        <ul className="list-disc pl-5">
          <li>API Development</li>
          <li>Mobile App Development</li>
          <li>Responsive Web Design</li>
          <li>Software Development</li>
          <li>UI/UX Design</li>
          <li>Web Application Development</li>
          <li>Website Maintenance</li>
          <li>WordPress Development</li>
        </ul>
      )
    },
    {
      icon: <Layout className="h-12 w-12 text-blue-800" />,
      title: "UI/UX",
      description: (
        <ul className="list-disc pl-5">
          <li>Start with listening to your idea</li>
          <li>Research</li>
          <li>Make a wireframe</li>
          <li>Build a prototype</li>
          <li>Finalizing the UI/UX</li>
        </ul>
      )
    },
    {
      icon: <Smartphone className="h-12 w-12 text-blue-400" />,
      title: "Data Entry & Processing",
      description: (
        <ul className="list-disc pl-5">
          <li>Data Cleansing</li>
          <li>Data Conversion</li>
          <li>Data Mining</li>
          <li>Data Processing</li>
          <li>Data Retrieval</li>
          <li>Database Management</li>
          <li>Document Scanning and Indexing</li>
          <li>Form Processing</li>
          <li>Image Data Entry</li>
          <li>Online Data Entry</li>
        </ul>
      )
    }
    
  ]

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
      },
    },
  }

  return (
    <motion.section
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={containerVariants}
      className="py-16 bg-gradient-to-r from-blue-100 to-blue-200"
      id="Services"
    >
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          variants={itemVariants}
        >
          <h2 className="text-3xl font-bold mb-4 text-Blue">
            We Provide Best Solutions<br />
            For Your Business
          </h2>
        </motion.div>
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              className="bg-gradient-to-b from-blue-300 via-blue-1000 to-blue-800 p-6 rounded-lg shadow-lg"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                className="mb-4"
                initial={{ rotate: 0 }}
                whileHover={{ rotate: 360, transition: { duration: 0.5 } }}
              >
                {service.icon}
              </motion.div>
              <h3 className="text-xl font-bold mb-2 text-Blue">{service.title}</h3>
              <div className="font-bold text-blue-100">{service.description}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  )
}

