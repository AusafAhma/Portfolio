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
                                I am an <strong>Electronics and Communication Engineering</strong> major with a deep passion for
                                bridging the gap between hardware and software. My expertise lies in building scalable
                                <span className="gradient-text"> full-stack applications</span>, developing
                                <span className="gradient-text"> machine learning</span> models, and architecting
                                <span className="gradient-text"> IoT systems</span>.
                            </p>
                            <p className="about-text">
                                Currently, I am expanding my global perspective through an
                                <strong> International MBA Exchange</strong> at National Taipei University of Technology, Taiwan,
                                where I focus on information management and marketing to complement my technical background.
                            </p>
                        </div>
                        <div className="about-side">
                            <h3 className="subsection-title">My Vision</h3>
                            <p className="about-text">
                                I strive to create technology that is not only functional but also impactful.
                                Whether it's enhancing safety through AI or optimizing waste management with IoT,
                                my goal is to build solutions that solve real-world problems.
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
