import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaAward, FaCertificate } from 'react-icons/fa';
import './Education.css';

const Education = () => {
    const education = [
        {
            degree: 'B.Tech in Electronics and Communication Engineering',
            institution: 'Vel Tech Rangarajan Dr.Sagunthala R&D Institute of Science and Technology',
            location: 'Chennai, Tamil Nadu',
            period: 'Expected 2026',
            icon: <FaGraduationCap />,
        },
        {
            degree: 'International MBA Exchange Program (IMBA)',
            institution: 'National Taipei University of Technology',
            location: 'Taiwan',
            period: '2025 - Ongoing',
            description: 'Pursuing courses in information management, marketing, and core business subjects.',
            icon: <FaGraduationCap />,
        },
        {
            degree: '12th Grade',
            institution: 'Woodbine Modern School',
            location: 'Darbhanga, Bihar',
            period: '2020',
            description: 'Central Board of Secondary Education',
            icon: <FaGraduationCap />,
        },
        {
            degree: '10th Grade',
            institution: 'Mahatma Gandhi Shikshan Sansthan',
            location: 'Darbhanga, Bihar',
            period: '2018',
            description: 'Central Board of Secondary Education',
            icon: <FaGraduationCap />,
        },
    ];

    const awards = [
        '🥇 1st position in ECE departmental and 2nd position in Pro-G paper presentation at IIT Roorkee\'s Cognizance',
        '🥇 1st prize in paper presentation at Loyola Engineering College, Chennai',
        '🏆 Top 3 positions in various college-level coding competitions',
    ];

    const certificates = [
        {
            name: 'Data Analytics Job Simulation',
            issuer: 'Deloitte',
            date: 'April 2025',
            link: 'https://shy-haze-446.linkyhost.com',
        },
        {
            name: 'Prod-G',
            issuer: 'IIT Roorkee',
            date: 'March 2024',
            link: 'https://young-mountain-156.linkyhost.com',
        },
        {
            name: 'Adobe India Hackathon - Round 1',
            issuer: 'Adobe',
            date: '2024',
        },
    ];

    const itemVariants = {
        hidden: { opacity: 0, x: -30 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.5 },
        },
    };

    return (
        <section id="education" className="section education">
            <div className="container">
                <motion.h2
                    className="section-title"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={itemVariants}
                >
                    Education & Achievements
                </motion.h2>

                {/* Education Timeline */}
                <div className="education-timeline">
                    <h3 className="subsection-title">
                        <FaGraduationCap /> Education
                    </h3>
                    {education.map((edu, index) => (
                        <motion.div
                            key={index}
                            className="timeline-item glass-card"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={itemVariants}
                            transition={{ delay: index * 0.1 }}
                        >
                            <div className="timeline-icon">{edu.icon}</div>
                            <div className="timeline-content">
                                <h4 className="timeline-degree">{edu.degree}</h4>
                                <p className="timeline-institution">{edu.institution}</p>
                                <p className="timeline-location">{edu.location}</p>
                                <span className="timeline-period">{edu.period}</span>
                                {edu.description && (
                                    <p className="timeline-description">{edu.description}</p>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Awards */}
                <motion.div
                    className="awards-section"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={itemVariants}
                >
                    <h3 className="subsection-title">
                        <FaAward /> Awards & Achievements
                    </h3>
                    <div className="awards-grid">
                        {awards.map((award, index) => (
                            <motion.div
                                key={index}
                                className="award-item glass-card"
                                whileHover={{ scale: 1.02 }}
                                transition={{ duration: 0.2 }}
                            >
                                {award}
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Certificates */}
                <motion.div
                    className="certificates-section"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={itemVariants}
                >
                    <h3 className="subsection-title">
                        <FaCertificate /> Certifications
                    </h3>
                    <div className="certificates-grid">
                        {certificates.map((cert, index) => (
                            <motion.div
                                key={index}
                                className="certificate-item glass-card"
                                whileHover={{ scale: 1.05 }}
                                transition={{ duration: 0.2 }}
                            >
                                <h4 className="cert-name">{cert.name}</h4>
                                <p className="cert-issuer">{cert.issuer}</p>
                                <p className="cert-date">{cert.date}</p>
                                {cert.link && (
                                    <a
                                        href={cert.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="cert-link"
                                    >
                                        View Certificate →
                                    </a>
                                )}
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Education;
