import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPowerOff, FaArrowRight } from 'react-icons/fa';

import userImage from '../../assets/ausaf_new.jpg';

const LoginScreen = ({ onLogin }) => {
    const [isLoggingIn, setIsLoggingIn] = useState(false);

    const handleLogin = () => {
        setIsLoggingIn(true);
        setTimeout(() => {
            onLogin();
        }, 1000);
    };

    return (
        <div className="xp-login-background">
            <div className="xp-login-top-bar" />

            <div className="xp-login-content">
                {/* Left Side: Logo */}
                <motion.div
                    className="xp-login-left"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="xp-logo-text" style={{ fontSize: '42px' }}>
                        Microsoft<span style={{ fontWeight: 'normal', fontSize: '0.5em', verticalAlign: 'top' }}>®</span>
                    </div>
                    <div className="xp-logo-text" style={{ fontSize: '56px', lineHeight: '0.8', marginBottom: '10px' }}>
                        Windows<span style={{ fontWeight: 'normal', fontSize: '0.5em', verticalAlign: 'top' }}>xp</span>
                    </div>
                    <div className="xp-logo-professional" style={{ fontSize: '24px', alignSelf: 'flex-end', marginRight: '10px' }}>
                        Professional
                    </div>
                </motion.div>

                <div className="xp-login-divider" />

                {/* Right Side: User List */}
                <motion.div
                    className="xp-login-right"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <div className="xp-login-instruction" style={{ marginBottom: '20px', fontSize: '18px', color: '#BCD0FC' }}>
                        To begin, click your user name
                    </div>

                    <div className="xp-user-card" onClick={handleLogin}>
                        <div className="xp-user-avatar">
                            <img
                                src={userImage}
                                alt="User"
                                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                            />
                        </div>
                        <div className="xp-user-info">
                            <span className="xp-user-name">Syed Ausaf Ahmad</span>
                            {isLoggingIn && <span style={{ fontSize: '12px', color: '#fff' }}>Loading your personal settings...</span>}
                        </div>
                    </div>
                </motion.div>
            </div>

            <div className="xp-login-bottom-bar">
                <div
                    style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'white', cursor: 'pointer', opacity: 0.8 }}
                    onClick={() => window.location.reload()}
                    onMouseEnter={(e) => e.currentTarget.style.opacity = 1}
                    onMouseLeave={(e) => e.currentTarget.style.opacity = 0.8}
                >
                    <FaPowerOff size={24} color="#FCA247" />
                    <span style={{ fontSize: '16px', fontWeight: 'bold', fontFamily: 'Tahoma' }}>Turn off computer</span>
                </div>

                <div style={{ color: 'white', fontSize: '14px', fontFamily: 'Tahoma' }}>
                    After you log on, you can add or change accounts.<br />
                    Just go to Control Panel and click User Accounts.
                </div>
            </div>
        </div>
    );
};

export default LoginScreen;
