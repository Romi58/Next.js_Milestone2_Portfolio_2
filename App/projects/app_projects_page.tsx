'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

const projects = [
  {
    id: 'hackathon-ui-ux',
    title: 'Hackathon UI/UX',
    description: 'A user interface and experience design project for a hackathon event.',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/p_4.jpg-5FVXGY0UpzpONNpBDwkID2RxwJf63m.jpeg',
    link: 'https://github.com/Romi58/hakathon_UI_UX'
  },
  {
    id: 'html-css-project',
    title: 'HTML/CSS Project',
    description: 'A showcase of HTML and CSS skills with responsive design.',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/p_5.jpg-CXJuO4N5Har3i2AXxZIUkWJUZMN7Md.jpeg',
    link: 'https://github.com/Romi58/HTML_CSS_'
  },
  {
    id: 'dynamic-resume-builder',
    title: 'Dynamic Resume Builder',
    description: 'An application to create dynamic and personalized resumes.',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/p_6-5kce8YPgsxsaRvlUM0r1XqvPtxBYtT.png',
    link: 'https://github.com/Romi58/Dynamic_Resume_Builder_'
  },
  {
    id: 'student-management-system',
    title: 'Student Management System',
    description: 'A comprehensive system for managing student information and records.',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/p_3.jpg-bjfQOiyq4Is2mMBXo1gnzXMomjgi5G.jpeg',
    link: 'https://github.com/Romi58/-project-06-_Student-Management-System'
  },
  {
    id: 'currency-converter',
    title: 'Currency Converter',
    description: 'A tool for converting between different currencies with real-time rates.',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/p_4.jpg-5FVXGY0UpzpONNpBDwkID2RxwJf63m.jpeg',
    link: 'https://github.com/Romi58/project04_currency_converter'
  },
  {
    id: 'oop-project',
    title: 'OOP Project',
    description: 'An object-oriented programming project showcasing advanced concepts.',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/p_5.jpg-CXJuO4N5Har3i2AXxZIUkWJUZMN7Md.jpeg',
    link: 'https://github.com/Romi58/project10_oop'
  },
  {
    id: 'calculator',
    title: 'Command Line Calculator',
    description: 'A simple command-line calculator built with TypeScript.',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/p_4.jpg-5FVXGY0UpzpONNpBDwkID2RxwJf63m.jpeg',
    link: 'https://github.com/Romi58/Project00-simple-command-line-calculator'
  },
  {
    id: 'student-system-v2',
    title: 'Student Management System V2',
    description: 'An enhanced version of the student management system with additional features.',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/p_5.jpg-CXJuO4N5Har3i2AXxZIUkWJUZMN7Md.jpeg',
    link: 'https://github.com/Romi58/-project-06-_Student-Management-System'
  }
]

export default function Projects() {
  return (
    <div className="container mx-auto px-6 py-12">
      <motion.h1 
        className="text-4xl font-bold mb-8 text-center text-white"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        My Projects
      </motion.h1>
      <motion.div 
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {projects.map((project, index) => (
          <motion.div 
            key={project.id}
            className="bg-white rounded-lg shadow-md overflow-hidden"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.05, boxShadow: '0 0 25px rgba(255, 105, 180, 0.7)' }}
          >
            <Image
              src={project.image || "/placeholder.svg"}
              alt={project.title}
              width={400}
              height={300}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-black">{project.title}</h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <div className="flex gap-2">
                <Link href={`/projects/${project.id}`} className="btn bg-primary text-white hover:bg-opacity-80">
                  View Details
                </Link>
                <a 
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn bg-secondary text-white hover:bg-opacity-80"
                >
                  GitHub
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}

