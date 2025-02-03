'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

interface Project {
  id: string
  title: string
  category: string
  imageUrl: string
  link: string
}

export default function PortfolioSection() {
  const projects: Project[] = [
    {
      id: '1',
      title: 'Logistic Solution Website',
      category: 'Web Development',
      imageUrl: '/first.png', 
      link: 'https://lowpricetowing.com/'
    },
    {
      id: '2',
      title: 'Official University Website',
      category: 'Web Development',
      imageUrl: '/second.png',
      link: 'https://www.juit.ac.in/ICSMC2021/'
    },
    {
      id: '3',
      title: 'Healthcare Website',
      category: 'Web Development', 
      imageUrl: '/third.png',
      link: 'https://www.bigohealth.com/'
    },
    {
      id: '4',
      title: 'E-learning Platform',
      category: 'Web Development',
      imageUrl: '/fourth.png',
      link: 'https://tastewp.com/'
    },
    {
      id: '5',
      title: '',
      category: 'UI/UX',
      imageUrl: '/5.png',
      link: 'https://www.figma.com/proto/YkvmkgAUKBRZop6gxekh6G/Untitled?page-id=0%3A1&node-id=61-1576&viewport=-1964%2C-24%2C1&t=Vho2n2q7jZ62H0vS-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=121%3A369'
    },
    {
      id: '6',
      title: '',
      category: 'UI/UX',
      imageUrl: '/6.png',
      link: 'https://www.figma.com/proto/3vFqKyuBcqGqXqsDQMNT7Q/lost-stories?page-id=942%3A27801&node-id=1052-48551&viewport=-2304%2C-968%2C0.06&t=IWCZh7deGVvKxVbu-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=986%3A37120'
    },
  ]

  const [selectedCategory, setSelectedCategory] = useState<string>('Web Development')

  const categories = ['Web Development', 'UI/UX']

  const filteredProjects = projects.filter(project => project.category === selectedCategory)

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

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
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }

  return (
    <motion.section 
      className="py-16 bg-gradient-to-r from-blue-100 to-blue-200" 
      id="Portfolio"
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={containerVariants}
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <motion.h2 
            className="text-4xl font-bold text-black mb-8"
            variants={itemVariants}
          >
            Check Out Our Latest Projects<br />
          </motion.h2>
          <motion.div 
            className="flex justify-center gap-4 mb-12"
            variants={itemVariants}
          >
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-md transition-colors ${
                  selectedCategory === category
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category}
              </motion.button>
            ))}
          </motion.div>
        </div>

        <motion.div 
          className={`grid gap-6 ${
            selectedCategory === 'Web Development' 
              ? 'md:grid-cols-4'  // 4 columns for Web Development
              : 'md:grid-cols-3 gap-64 ml-96'  // 2 columns with larger gap for UI/UX
          }`}
          variants={itemVariants}
        >
          {filteredProjects.map((project) => (
            <motion.div 
              key={project.id} 
              className="flex"
              variants={itemVariants}
            >
              <Link href={project.link} target="_blank" className="block w-full">
                <motion.div 
                  className={`group relative overflow-hidden rounded-lg bg-gray-800 transition-transform ${
                    project.category === 'UI/UX' 
                      ? 'aspect-[4/9] min-h-[150px]'   // Increase height for UI/UX
                      : 'aspect-video'
                  } hover:scale-[1.02]`}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="relative w-full h-full">
                    <Image
                      src={project.imageUrl}
                      alt={project.title}
                      layout="fill"
                      objectFit="cover"
                      className="object-cover"
                    />
                  </div>
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                  >
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                      <p className="text-blue-300">{project.category}</p>
                    </div>
                  </motion.div>
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  )
}
