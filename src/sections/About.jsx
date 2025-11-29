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
                    <p className="about-text">
                        Electronics and Communication Engineering major with hands-on experience in my field,
                        demonstrating strong technical expertise and initiative. Demonstrated success in
                        <span className="gradient-text"> full-stack development</span>,
                        <span className="gradient-text"> machine learning</span>, and
                        <span className="gradient-text"> IoT projects</span>, effectively contributing as both
                        a team member and leader in innovative technology roles.
                    </p>

                    <p className="about-text">
                        Currently pursuing my <strong>B.Tech in Electronics and Communication Engineering</strong> at
                        Vel Tech Rangarajan Dr.Sagunthala R&D Institute of Science and Technology, Chennai,
                        while also participating in an <strong>International MBA Exchange Program</strong> at
                        National Taipei University of Technology, Taiwan, focusing on information management,
                        marketing, and core business subjects.
                    </p>

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
