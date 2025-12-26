import React from 'react';
import { motion } from 'framer-motion';
import './About.css';

const About = () => {
    const fadeInUp = {
        hidden: { opacity: 0, y: 60 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: 'easeOut' }
        }
    };

    return (
        <section id="about" className="section about">
            <div className="container">
                <motion.h2
                    className="section-title"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={fadeInUp}
                >
                    About Me
                </motion.h2>

                <motion.div
                    className="about-content glass-card"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={fadeInUp}
                >
                    <div className="about-grid">
                        <div className="about-main">
                            <h3 className="subsection-title">Who I Am</h3>
                            <p className="about-text">
                                I am an <strong>Electronics and Communication Engineering</strong> major with a strong interest in
                                building practical, data-driven software solutions. My core strengths include
                                <span className="gradient-text"> Web Development</span>,
                                <span className="gradient-text"> Python Development</span>, and
                                <span className="gradient-text"> Data Analytics</span>, where I focus on transforming ideas and data
                                into reliable, user-focused applications.
                            </p>

                            <p className="about-text">
                                I have hands-on experience developing responsive web applications, analyzing and visualizing data
                                using Python-based tools, and working with cloud platforms to deploy and manage applications.
                                My background in engineering helps me approach problems analytically and build solutions that are
                                both efficient and scalable.
                            </p>

                            <p className="about-text">
                                Currently, I am expanding my global perspective through an
                                <strong> International MBA Exchange</strong> at National Taipei University of Technology, Taiwan,
                                with a focus on information management and marketing to complement my technical expertise.
                            </p>
                        </div>

                        <div className="about-side">
                            <h3 className="subsection-title">My Vision</h3>
                            <p className="about-text">
                                I aim to develop technology that is meaningful, data-informed, and user-centric.
                                Whether it is building analytical dashboards, backend systems, or web applications,
                                my goal is to create solutions that address real-world problems and deliver measurable value.
                            </p>
                        </div>
                    </div>


                    <div className="about-stats">
                        <div className="stat-item">
                            <div className="stat-number gradient-text">10+</div>
                            <div className="stat-label">Projects Completed</div>
                        </div>
                        <div className="stat-item">
                            <div className="stat-number gradient-text">3+</div>
                            <div className="stat-label">Awards Won</div>
                        </div>
                        <div className="stat-item">
                            <div className="stat-number gradient-text">5+</div>
                            <div className="stat-label">Certifications</div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
