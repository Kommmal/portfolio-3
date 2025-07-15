import React from 'react'
import RevealOnScroll from '../RevealOnScroll'

export const Projects = () => {
  return (
    <RevealOnScroll>
    <section 
    id='projects'
    className='min-h-screen flex items-center justify-center py-20' 
    >
        <div className='max-w-5xl mx-auto px-4'>
            <h2 className='text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center'>
                Featured Projects
            </h2>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                    <div className='p-6 rounded-xl border border-white/10 hover:translate-y-1 transition-all hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]'>
                        <h3 className='text-xl font-bold mb-4'>E-Commerce Plateform</h3>
                        <p className='text-gray-300 mb-6 text-sm'>A modern e-commerce website offering a seamless shopping experience with dynamic product listings, cart functionality, and responsive design.</p>
                        <div className='flex flex-wrap gap-2'>
                            {["Typecript", "Next JS", "TailwindCSS", "Sanity CMS"].map((tech) => (
                                <span className='bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all'>
                                    {tech}
                                </span>
                            ))}
                        </div>
                        <div className='flex justify-between items-center'>
                            <a 
                                href="https://next-jam-2025-hackathon-v1ar.vercel.app/"
                                target='_blank'
                                className='text-blue-400 hover:text-blue-300 transition-colors my-4'
                            >
                                View Project →
                            </a>
                        </div>
                    </div>
                    <div className='p-6 rounded-xl border border-white/10 hover:translate-y-1 transition-all hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]'>
                        <h3 className='text-xl font-bold mb-4'>Admin Dashboard</h3>
                        <p className='text-gray-300 mb-6 text-sm'>A responsive admin dashboard with secure email-password authentication, user profile management, and intuitive UI built using Next.js and Tailwind CSS.</p>
                        <div className='flex flex-wrap gap-2'>
                            {["Typecript", "Next JS", "TailwindCSS", "Sanity CMS"].map((tech) => (
                                <span className='bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all'>
                                    {tech}
                                </span>
                            ))}
                        </div>
                        <div className='flex justify-between items-center'>
                            <a 
                                href="https://admin-dashboard-g7c6.vercel.app/"
                                target='_blank'
                                className='text-blue-400 hover:text-blue-300 transition-colors my-4'
                            >
                                View Project →
                            </a>
                        </div>
                    </div>
            </div>
        </div>
    </section>
    </RevealOnScroll>
  )
}
