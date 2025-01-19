import { notFound } from 'next/navigation'
import Image from 'next/image'
import { motion } from 'framer-motion'

const projects = [
  {
    id: 'hackathon-ui-ux',
    title: 'Hackathon UI/UX',
    description: 'A user interface and experience design project for a hackathon event.',
    image: '/images/project1.jpg',
    details: 'This project focused on creating an intuitive and engaging user interface for a hackathon event. The design prioritizes ease of navigation and clear information presentation, enhancing the overall user experience for participants.',
    link: 'https://github.com/Romi58/hakathon_UI_UX'
  },
  {
    id: 'html-css-project',
    title: 'HTML/CSS Project',
    description: 'A showcase of HTML and CSS skills with responsive design.',
    image: '/images/project2.jpg',
    details: 'This project demonstrates proficiency in HTML and CSS, featuring a responsive design that adapts seamlessly to various screen sizes. It includes modern CSS techniques and follows best practices for web accessibility.',
    link: 'https://github.com/Romi58/HTML_CSS_'
  },
  // Add more projects here...
]

export default function ProjectDetails({ params }: { params: { id: string } }) {
  const project = projects.find(p => p.id === params.id)

  if (!project) {
    notFound()
  }

  return (
    <div className="container mx-auto px-6 py-12">
      <motion.div 
        className="bg-white rounded-lg shadow-md overflow-hidden"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Image
          src={project.image || "/placeholder.svg"}
          alt={project.title}
          width={800}
          height={600}
          className="w-full h-64 object-cover"
        />
        <div className="p-6">
          <motion.h1 
            className="text-4xl font-bold mb-6 text-black"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {project.title}
          </motion.h1>
          <p className="text-lg mb-4 text-black">{project.description}</p>
          <p className="text-lg mb-6 text-black">{project.details}</p>
          <a 
            href={project.link} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn bg-primary text-white hover:bg-opacity-80"
          >
            View on GitHub
          </a>
        </div>
      </motion.div>
    </div>
  )
}

