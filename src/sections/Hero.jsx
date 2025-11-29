import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa';
import { SiGeeksforgeeks } from 'react-icons/si';
import './Hero.css';

const Hero = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let animationFrameId;
        let particles = [];

        // Set canvas size
        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);

        // Particle class
        class Particle {
            constructor() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
                this.size = Math.random() * 2 + 1;
                this.speedX = Math.random() * 0.5 - 0.25;
                this.speedY = Math.random() * 0.5 - 0.25;
            }

            update() {
                this.x += this.speedX;
                this.y += this.speedY;

                if (this.x > canvas.width || this.x < 0) this.speedX *= -1;
                if (this.y > canvas.height || this.y < 0) this.speedY *= -1;
            }

            draw() {
                ctx.fillStyle = 'rgba(99, 102, 241, 0.5)';
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fill();
            }
        }

        // Initialize particles
        const initParticles = () => {
            particles = [];
            const particleCount = Math.min(100, Math.floor(canvas.width / 10));
            for (let i = 0; i < particleCount; i++) {
                particles.push(new Particle());
            }
        };
        initParticles();

        // Animation loop
        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            particles.forEach((particle) => {
                particle.update();
                particle.draw();
            });

            // Draw connections
            particles.forEach((a, i) => {
                particles.slice(i + 1).forEach((b) => {
                    const dx = a.x - b.x;
                    const dy = a.y - b.y;
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < 100) {
                        ctx.strokeStyle = `rgba(168, 85, 247, ${0.2 * (1 - distance / 100)})`;
                        ctx.lineWidth = 0.5;
                        ctx.beginPath();
                        ctx.moveTo(a.x, a.y);
                        ctx.lineTo(b.x, b.y);
                        ctx.stroke();
                    }
                });
            });

            animationFrameId = requestAnimationFrame(animate);
        };
        animate();

        return () => {
            window.removeEventListener('resize', resizeCanvas);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: 'easeOut',
            },
        },
    };

    const socialLinks = [
        { icon: <FaGithub />, url: 'https://github.com/AusafAhma', label: 'GitHub' },
        { icon: <FaLinkedin />, url: 'https://www.linkedin.com/in/syed-ausaf-ahmad-87b5a5266/', label: 'LinkedIn' },
        { icon: <SiGeeksforgeeks />, url: 'https://www.geeksforgeeks.org/user/vtu21p6zq/', label: 'GeeksforGeeks' },
        { icon: <FaEnvelope />, url: 'mailto:ausafahmad0072@gmail.com', label: 'Email' },
        { icon: <FaPhone />, url: 'tel:+918409819853', label: 'Phone' },
    ];

    return (
        <section id="home" className="hero">
            <canvas ref={canvasRef} className="hero-canvas" />

            <div className="container">
                <motion.div
                    className="hero-content"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <motion.div className="hero-greeting" variants={itemVariants}>
                        <span className="wave">👋</span> Hi, I'm
                    </motion.div>

                    <motion.h1 className="hero-title" variants={itemVariants}>
                        Syed Ausaf Ahmad
                    </motion.h1>

                    <motion.div className="hero-subtitle" variants={itemVariants}>
                        <span className="gradient-text">Full-Stack Web Developer</span>
                    </motion.div>

                    <motion.p className="hero-description" variants={itemVariants}>
                        MERN Stack | Python | MySQL | Electronics & Communication Engineer
                    </motion.p>

                    <motion.p className="hero-tagline" variants={itemVariants}>
                        Building innovative solutions at the intersection of hardware and software.
                        Passionate about creating impactful applications with cutting-edge technologies.
                    </motion.p>

                    <motion.div className="hero-cta" variants={itemVariants}>
                        <a href="#projects" className="btn btn-primary">
                            View My Work
                        </a>
                        <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-outline">
                            Resume
                        </a>
                        <a href="#contact" className="btn btn-outline">
                            Get In Touch
                        </a>
                    </motion.div>

                    <motion.div className="hero-social" variants={itemVariants}>
                        {socialLinks.map((link, index) => (
                            <motion.a
                                key={index}
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hero-social-link"
                                whileHover={{ scale: 1.2, rotate: 5 }}
                                whileTap={{ scale: 0.9 }}
                                aria-label={link.label}
                            >
                                {link.icon}
                            </motion.a>
                        ))}
                    </motion.div>
                </motion.div>
            </div>
        </section >
    );
};

export default Hero;
