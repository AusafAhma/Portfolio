import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import './Projects.css';

const Projects = () => {
    const projects = [
        {
            title: 'Omnifood Website',
            description: 'A fully responsive food delivery website built from scratch with smooth animations, mobile-first design, and interactive elements showcasing modern frontend development.',
            technologies: ['HTML5', 'CSS3', 'JavaScript'],
            liveLink: 'https://lnkd.in/gejeA_GC',
            githubLink: 'https://lnkd.in/gRciewt7',
            highlights: [
                'Responsive design with mobile-first approach',
                'Smooth animations and transitions',
                'Interactive UI elements',
                'Open-sourced for community collaboration',
            ],
        },
        {
            title: 'Face Recognition System',
            description: 'An intelligent facial recognition system designed to enhance women\'s safety through public surveillance cameras with threat detection capabilities.',
            technologies: ['LBPH', 'Machine Learning', 'Deep Learning', 'OpenCV'],
            highlights: [
                'Facial expression detection',
                'Intelligent threat detection',
                'Real-time alert system for authorities',
                'Day and night operation capability',
            ],
        },
        {
            title: 'Automatic Waste Segregation Management',
            description: 'A microcontroller-based IoT system for intelligent waste segregation using ML-powered image classification and cloud monitoring.',
            technologies: ['Python', 'AWS', 'OpenCV', 'IoT', 'Firebase'],
            highlights: [
                'Real-time waste segregation with sensors',
                'ML model for waste classification',
                'IoT monitoring via AWS and Firebase',
                'Remote performance analysis',
            ],
        },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2 },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5 },
        },
    };

    return (
        <section id="projects" className="section projects">
            <div className="container">
                <motion.h2
                    className="section-title"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={itemVariants}
                >
                    Featured Projects
                </motion.h2>

                <motion.div
                    className="projects-grid"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={containerVariants}
                >
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            className="project-card glass-card"
                            variants={itemVariants}
                            whileHover={{ y: -10 }}
                        >
                            <div className="project-header">
                                <h3 className="project-title">{project.title}</h3>
                                <div className="project-links">
                                    {project.githubLink && (
                                        <a
                                            href={project.githubLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="project-link"
                                            aria-label="GitHub"
                                        >
                                            <FaGithub />
                                        </a>
                                    )}
                                    {project.liveLink && (
                                        <a
                                            href={project.liveLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="project-link"
                                            aria-label="Live Demo"
                                        >
                                            <FaExternalLinkAlt />
                                        </a>
                                    )}
                                </div>
                            </div>

                            <p className="project-description">{project.description}</p>

                            <div className="project-tech">
                                {project.technologies.map((tech, techIndex) => (
                                    <span key={techIndex} className="tech-tag">
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            <ul className="project-highlights">
                                {project.highlights.map((highlight, hIndex) => (
                                    <li key={hIndex}>{highlight}</li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Projects;
