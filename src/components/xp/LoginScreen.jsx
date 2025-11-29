import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPowerOff, FaArrowRight } from 'react-icons/fa';

const LoginScreen = ({ onLogin }) => {
    const [isLoggingIn, setIsLoggingIn] = useState(false);

    const handleLogin = () => {
        setIsLoggingIn(true);
        setTimeout(() => {
            onLogin();
        }, 1000);
    };

    return (
        <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'linear-gradient(to bottom, #5A98D0 0%, #3A6EA5 100%)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 99999,
        }}>
            {/* Windows XP Logo */}
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                style={{
                    position: 'absolute',
                    top: '10%',
                    textAlign: 'center',
                }}
            >
                <div style={{
                    fontSize: '48px',
                    fontWeight: 'bold',
                    color: 'white',
                    textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
                    fontFamily: 'Trebuchet MS, sans-serif',
                    letterSpacing: '-2px'
                }}>
                    Microsoft<span style={{ fontWeight: 'normal', fontSize: '36px' }}>®</span> Windows<span style={{ fontWeight: 'normal', fontSize: '36px' }}>™</span>
                </div>
                <div style={{
                    fontSize: '18px',
                    color: 'white',
                    marginTop: '5px',
                    fontFamily: 'Tahoma, sans-serif'
                }}>
                    XP Professional
                </div>
            </motion.div>

            {/* Login Box */}
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                style={{
                    background: 'rgba(255, 255, 255, 0.95)',
                    borderRadius: '12px',
                    padding: '40px 50px',
                    boxShadow: '0 10px 40px rgba(0,0,0,0.3)',
                    textAlign: 'center',
                    minWidth: '350px',
                }}
            >
                {/* User Avatar */}
                <div style={{
                    width: '100px',
                    height: '100px',
                    margin: '0 auto 20px',
                    borderRadius: '50%',
                    overflow: 'hidden',
                    border: '4px solid #0055EA',
                    boxShadow: '0 4px 10px rgba(0,0,0,0.2)',
                }}>
                    <img
                        src="https://api.dicebear.com/7.x/avataaars/svg?seed=Ausaf"
                        alt="User"
                        style={{ width: '100%', height: '100%' }}
                    />
                </div>

                {/* Username */}
                <h2 style={{
                    fontSize: '24px',
                    fontWeight: 'bold',
                    color: '#000',
                    marginBottom: '10px',
                    fontFamily: 'Tahoma, sans-serif'
                }}>
                    Syed Ausaf Ahmad
                </h2>

                <p style={{
                    fontSize: '14px',
                    color: '#666',
                    marginBottom: '30px',
                    fontFamily: 'Tahoma, sans-serif'
                }}>
                    Welcome to my portfolio
                </p>

                {/* Login Button */}
                <motion.button
                    onClick={handleLogin}
                    disabled={isLoggingIn}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    style={{
                        width: '100%',
                        padding: '12px 24px',
                        background: 'linear-gradient(to bottom, #3C9E5D 0%, #2D7A45 100%)',
                        border: '1px solid #2D7A45',
                        borderRadius: '6px',
                        color: 'white',
                        fontSize: '16px',
                        fontWeight: 'bold',
                        fontFamily: 'Tahoma, sans-serif',
                        cursor: isLoggingIn ? 'wait' : 'pointer',
                        boxShadow: '0 2px 5px rgba(0,0,0,0.2)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '10px',
                        opacity: isLoggingIn ? 0.7 : 1,
                    }}
                >
                    {isLoggingIn ? 'Logging in...' : (
                        <>
                            Log in
                            <FaArrowRight />
                        </>
                    )}
                </motion.button>
            </motion.div>

            {/* Turn Off Computer */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                style={{
                    position: 'absolute',
                    bottom: '10%',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    color: 'white',
                    fontSize: '14px',
                    fontFamily: 'Tahoma, sans-serif',
                    cursor: 'pointer',
                    padding: '10px 20px',
                    borderRadius: '6px',
                    transition: 'background 0.3s',
                }}
                onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.1)'}
                onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}
                onClick={() => window.location.reload()}
            >
                <FaPowerOff />
                Turn off computer
            </motion.div>

            {/* Footer Text */}
            <div style={{
                position: 'absolute',
                bottom: '20px',
                fontSize: '11px',
                color: 'rgba(255,255,255,0.7)',
                fontFamily: 'Tahoma, sans-serif'
            }}>
                To begin, click your user name
            </div>
        </div>
    );
};

export default LoginScreen;
