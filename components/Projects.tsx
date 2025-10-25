import React from 'react'
import AnimatedSection from './AnimatedSection'
import { ExternalLink, Github } from 'lucide-react'

const projects = [
  {
    title: 'WP Blog',
    description:
      'A fully functional blog built on WordPress, showcasing custom theming and plugin integration.',
    tags: ['WordPress', 'PHP', 'CSS', 'Bootstrap'],
    imageUrl: 'https://picsum.photos/seed/wpblog/600/400',
    demoUrl: '#',
    repoUrl: '#',
  },
  {
    title: 'Special Design',
    description:
      'A unique and creative web design implementation with a focus on modern UI/UX principles and animations.',
    tags: ['HTML', 'CSS', 'JavaScript', 'Responsive'],
    imageUrl: 'https://picsum.photos/seed/special/600/400',
    demoUrl: 'https://compassionate-easley-d8d851.netlify.app/',
    repoUrl: '#',
  },
  {
    title: 'QR Code Generator',
    description:
      'A simple and effective tool to generate QR codes from any text or URL input, built with vanilla JavaScript.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    imageUrl: 'https://picsum.photos/seed/qrcode/600/400',
    demoUrl: 'https://abdulrahman-adil.github.io/QR-Code-Generator/',
    repoUrl: '#',
  },
  {
    title: 'Image Color Editor',
    description:
      'An in-browser image editor that allows users to apply filters and adjust color properties.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    imageUrl: 'https://picsum.photos/seed/editor/600/400',
    demoUrl: 'https://abdulrahman-adil.github.io/ImageEditor/',
    repoUrl: '#',
  },
  {
    title: 'Responsive Landing Page',
    description:
      'A modern, glassmorphism-style landing page designed to be fully responsive across all devices.',
    tags: ['HTML', 'CSS', 'Responsive'],
    imageUrl: 'https://picsum.photos/seed/landing/600/400',
    demoUrl: 'https://abdulrahman-adil.github.io/ResponsiveGlassWebsite/',
    repoUrl: '#',
  },
  {
    title: 'Business Template',
    description:
      'A professional and clean template for business websites, featuring multiple sections and a contact form.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    imageUrl: 'https://picsum.photos/seed/business/600/400',
    demoUrl: '#',
    repoUrl: '#',
  },
]

const ProjectCard: React.FC<typeof projects[0]> = ({
  title,
  description,
  tags,
  imageUrl,
  demoUrl,
  repoUrl,
}) => {
  return (
    <div className="group relative flex flex-col bg-light-card dark:bg-light-navy rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:-translate-y-2">
      <div className="relative h-48 w-full">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-navy/50 group-hover:bg-navy/70 transition-colors"></div>
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-bold text-light-heading dark:text-white group-hover:text-light-accent dark:group-hover:text-accent transition-colors">
            {title}
          </h3>
          <div className="flex space-x-3 text-light-text dark:text-light-slate">
            {repoUrl && repoUrl !== '#' && (
              <a
                href={repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-light-accent dark:hover:text-accent transition-colors"
              >
                <Github size={20} />
              </a>
            )}
            {demoUrl && demoUrl !== '#' && (
              <a
                href={demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-light-accent dark:hover:text-accent transition-colors"
              >
                <ExternalLink size={20} />
              </a>
            )}
          </div>
        </div>
        <p className="text-light-text dark:text-light-slate mb-4 flex-grow">
          {description}
        </p>
        <div className="flex flex-wrap gap-2 font-mono text-xs text-light-text dark:text-light-slate">
          {tags.map((tag) => (
            <span
              key={tag}
              className="bg-light-accent/10 dark:bg-accent/10 px-2 py-1 rounded"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

const Projects: React.FC = () => {
  return (
    <AnimatedSection id="projects" className="py-24">
      <h2 className="text-3xl font-bold text-light-heading dark:text-lightest-slate mb-8 font-mono relative w-full flex items-center">
        <span className="text-2xl text-light-accent dark:text-accent mr-3">
          02.
        </span>
        Some Things I’ve Built
        <span className="h-px bg-light-text/20 dark:bg-lightest-navy/50 flex-grow ml-4"></span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </AnimatedSection>
  )
}

export default Projects
