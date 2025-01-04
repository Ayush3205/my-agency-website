'use client'

import Link from 'next/link';
import Image from 'next/image';
import ClientForm from './client-form';
import Services from './Services';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function Footer() {
  const services = [
    "Web Development",
    "Mobile apps development",
    "UI/UX Design",
    "Graphics Design",
    "Digital Marketing",
    "SEO and SMM"
  ];

  const teamMembers = [
    { src: "/images.jpg.jpg", alt: "Team Member 1" },
    { src: "/images.jpg.jpg", alt: "Team Member 2" },
    { src: "/images.jpg.jpg", alt: "Team Member 3" },
    { src: "/images.jpg.jpg", alt: "Team Member 4" }
  ];

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,
        when: "beforeChildren",
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <motion.footer 
      className="bg-gradient-to-b from-blue-900 to-black pt-16 pb-8" 
      id="123"
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={containerVariants}
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <motion.div className="space-y-6" variants={itemVariants}>
            <Link href="/" className="inline-block">
              <span className="text-2xl font-bold text-white">KSL Fido Global</span>
            </Link>
            <div className="space-y-4 text-gray-300">
              <p>171/5, Borhanpur Lane, 6 Hazaribagh Road, Dhaka 1211</p>
              <p>info@codestation21.com</p>
              <p>+880 1552-938771</p>
            </div>
            <div className="flex space-x-4">
              <motion.a 
                href="#" 
                className="p-2 bg-gray-800 rounded-md hover:bg-gray-700 transform transition duration-200 ease-in-out hover:scale-105"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <span className="sr-only">GitHub</span>
              </motion.a>
              <motion.a 
                href="#" 
                className="p-2 bg-gray-800 rounded-md hover:bg-gray-700 transform transition duration-200 ease-in-out hover:scale-105"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <span className="sr-only">Facebook</span>
              </motion.a>
              <motion.a 
                href="#" 
                className="p-2 bg-gray-800 rounded-md hover:bg-gray-700 transform transition duration-200 ease-in-out hover:scale-105"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <span className="sr-only">Twitter</span>
              </motion.a>
            </div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Services services={services} />
          </motion.div>

          <motion.div className="space-y-8" variants={itemVariants}>
            <div>
              <h3 className="text-xl font-bold mb-4 text-white">Newsletters</h3>
              <p className="text-gray-300 mb-4">Let&apos;s be friends and get interesting news about us</p>
              <ClientForm />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4 text-white">Our Members</h3>
              <div className="grid grid-cols-2 gap-4">
                {teamMembers.map((member, index) => (
                  <motion.div 
                    key={index} 
                    className="relative h-20 w-20 overflow-hidden rounded-lg transform transition duration-200 ease-in-out hover:scale-110 hover:rotate-3"
                    whileHover={{ scale: 1.1, rotate: 3 }}
                  >
                    <Image
                      src={member.src}
                      alt={member.alt}
                      fill
                      className="object-cover"
                    />
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div 
          className="pt-8 border-t border-gray-800"
          variants={itemVariants}
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400">© 2024 KSL Fido Global. All Rights Reserved.</p>
            <div className="flex space-x-6">
              <Link href="#" className="text-gray-400 hover:text-blue-400">Purchase</Link>
              <Link href="#" className="text-gray-400 hover:text-blue-400">Privacy Policy</Link>
              <Link href="#" className="text-gray-400 hover:text-blue-400">Terms of Service</Link>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.footer>
  );
}
