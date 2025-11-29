import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiGeeksforgeeks } from 'react-icons/si';
import './Contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Create mailto link
        const mailtoLink = `mailto:ausafahmad0072@gmail.com?subject=Portfolio Contact from ${formData.name}&body=${formData.message}%0D%0A%0D%0AFrom: ${formData.email}`;
        window.location.href = mailtoLink;
    };

    const contactInfo = [
        {
            icon: <FaEnvelope />,
            label: 'Email',
            value: 'ausafahmad0072@gmail.com',
            link: 'mailto:ausafahmad0072@gmail.com',
        },
        {
            icon: <FaPhone />,
            label: 'Phone',
            value: '+91 8409819853',
            link: 'tel:+918409819853',
        },
        {
            icon: <FaMapMarkerAlt />,
            label: 'Location',
            value: 'Chennai, Tamil Nadu, India',
        },
    ];

    const socialLinks = [
        {
            icon: <FaGithub />,
            label: 'GitHub',
            url: 'https://github.com/AusafAhma',
        },
        {
            icon: <FaLinkedin />,
            label: 'LinkedIn',
            url: 'https://www.linkedin.com/in/syed-ausaf-ahmad-87b5a5266/',
        },
        {
            icon: <SiGeeksforgeeks />,
            label: 'GeeksforGeeks',
            url: 'https://www.geeksforgeeks.org/user/vtu21p6zq/',
        },
    ];

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5 },
        },
    };

    return (
        <section id="contact" className="section contact">
            <div className="container">
                <motion.h2
                    className="section-title"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={itemVariants}
                >
                    Get In Touch
                </motion.h2>

                <div className="contact-content">
                    <motion.div
                        className="contact-info-section"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={itemVariants}
                    >
                        <h3>Let's Connect!</h3>
                        <p className="contact-intro">
                            I'm always open to discussing new projects, creative ideas, or opportunities
                            to be part of your vision. Feel free to reach out!
                        </p>

                        <div className="contact-details">
                            {contactInfo.map((info, index) => (
                                <div key={index} className="contact-detail-item">
                                    <div className="contact-icon">{info.icon}</div>
                                    <div className="contact-detail">
                                        <span className="contact-label">{info.label}</span>
                                        {info.link ? (
                                            <a href={info.link} className="contact-value">
                                                {info.value}
                                            </a>
                                        ) : (
                                            <span className="contact-value">{info.value}</span>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="contact-social">
                            {socialLinks.map((social, index) => (
                                <motion.a
                                    key={index}
                                    href={social.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="contact-social-link"
                                    whileHover={{ scale: 1.15 }}
                                    whileTap={{ scale: 0.95 }}
                                    aria-label={social.label}
                                >
                                    {social.icon}
                                    <span>{social.label}</span>
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        className="contact-form-section glass-card"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={itemVariants}
                    >
                        <form onSubmit={handleSubmit} className="contact-form">
                            <div className="form-group">
                                <label htmlFor="name">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    placeholder="Your Name"
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    placeholder="your.email@example.com"
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="message">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows="5"
                                    placeholder="Your message..."
                                />
                            </div>

                            <button type="submit" className="btn btn-primary">
                                Send Message
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
