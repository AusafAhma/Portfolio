import React from 'react';
import { motion } from 'framer-motion';
import {
    FaPython, FaJs, FaReact, FaNode, FaDatabase,
    FaGitAlt, FaAws, FaMicrochip, FaFileExcel, FaChartBar, FaCloud
} from 'react-icons/fa';
import {
    SiMongodb, SiExpress, SiMysql, SiOpencv,
    SiTensorflow, SiFirebase, SiC, SiPandas, SiTableau
} from 'react-icons/si';
import './Skills.css';

const Skills = () => {
    const skillCategories = [
        {
            title: 'Languages',
            skills: [
                { name: 'C', icon: <SiC />, level: 85 },
                { name: 'Python', icon: <FaPython />, level: 90 },
                { name: 'JavaScript', icon: <FaJs />, level: 88 },
            ],
        },
        {
            title: 'Web Development',
            skills: [
                { name: 'React.js', icon: <FaReact />, level: 90 },
            ],
        },
        {
            title: 'Data Analysis Visualization',
            skills: [
                { name: 'Excel', icon: <FaFileExcel />, level: 82 },
                { name: 'Pandas', icon: <SiPandas />, level: 88 },
                { name: 'Tableau', icon: <SiTableau />, level: 75 },
                { name: 'Power BI', icon: <FaChartBar />, level: 78 },
            ],
        },
        {
            title: 'Cloud Platforms',
            skills: [
                { name: 'Microsoft Azure', icon: <FaCloud />, level: 82 },
                { name: 'AWS', icon: <FaAws />, level: 75 },
                { name: 'Firebase', icon: <SiFirebase />, level: 88 },
            ],
        },
        {
            title: 'AI/ML & Others',
            skills: [
                { name: 'Machine Learning', icon: <SiTensorflow />, level: 80 },
                { name: 'OpenCV', icon: <SiOpencv />, level: 75 },
                { name: 'IoT', icon: <FaMicrochip />, level: 78 },
            ],
        },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5 },
        },
    };

    return (
        <section id="skills" className="section skills">
            <div className="container">
                <motion.h2
                    className="section-title"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={itemVariants}
                >
                    Skills & Expertise
                </motion.h2>

                <motion.div
                    className="skills-grid"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={containerVariants}
                >
                    {skillCategories.map((category, catIndex) => (
                        <motion.div
                            key={catIndex}
                            className="skill-category glass-card"
                            variants={itemVariants}
                        >
                            <h3 className="category-title">{category.title}</h3>
                            <div className="skills-list">
                                {category.skills.map((skill, skillIndex) => (
                                    <div key={skillIndex} className="skill-item">
                                        <div className="skill-header">
                                            <div className="skill-icon">{skill.icon}</div>
                                            <span className="skill-name">{skill.name}</span>
                                        </div>
                                        <div className="skill-bar">
                                            <motion.div
                                                className="skill-progress"
                                                initial={{ width: 0 }}
                                                whileInView={{ width: `${skill.level}%` }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 1, delay: 0.2 }}
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                <motion.div
                    className="additional-skills"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={itemVariants}
                >
                    <h3>Additional Expertise</h3>
                    <div className="tags">
                        <span className="tag">Data Structures & Algorithms</span>
                        <span className="tag">Deep Learning</span>
                        <span className="tag">Agile Methodologies</span>
                        <span className="tag">HTML5 & CSS3</span>
                        <span className="tag">Flask</span>
                        <span className="tag">VS Code</span>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Skills;
