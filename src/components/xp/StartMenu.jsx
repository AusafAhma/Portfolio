import React from 'react';
import { motion } from 'framer-motion';
import { FaUser, FaBriefcase, FaCode, FaEnvelope, FaGraduationCap, FaPowerOff } from 'react-icons/fa';
import './XP.css';

const StartMenu = ({ isOpen, onClose, onOpenWindow }) => {
    if (!isOpen) return null;

    const menuItems = [
        { id: 'about', label: 'My Profile', icon: <FaUser color="#E65100" />, sub: 'About Me' },
        { id: 'projects', label: 'My Projects', icon: <FaBriefcase color="#1B5E20" />, sub: 'Portfolio' },
        { id: 'skills', label: 'My Skills', icon: <FaCode color="#0D47A1" />, sub: 'Tech Stack' },
        { id: 'education', label: 'My Education', icon: <FaGraduationCap color="#4A148C" />, sub: 'Academic' },
        { id: 'contact', label: 'Contact Me', icon: <FaEnvelope color="#B71C1C" />, sub: 'Get in touch' },
    ];

    return (
        <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 20, opacity: 0 }}
            transition={{ duration: 0.1 }}
            style={{
                position: 'fixed',
                bottom: 'var(--taskbar-height)',
                left: 0,
                width: '380px',
                height: '480px',
                backgroundColor: '#fff',
                borderTopRightRadius: '8px',
                borderTopLeftRadius: '8px',
                boxShadow: '2px -2px 10px rgba(0,0,0,0.3)',
                zIndex: 10000,
                display: 'flex',
                flexDirection: 'column',
                overflow: 'hidden',
                border: '1px solid #0046D1',
            }}
        >
            {/* Header */}
            <div style={{
                height: '60px',
                background: 'linear-gradient(to bottom, #1565C0 0%, #0D47A1 100%)',
                display: 'flex',
                alignItems: 'center',
                padding: '0 10px',
                gap: '10px',
                color: 'white',
                borderBottom: '2px solid #E65100' // Orange line
            }}>
                <div style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '4px',
                    border: '2px solid white',
                    overflow: 'hidden',
                    background: '#fff'
                }}>
                    <img
                        src="https://api.dicebear.com/7.x/avataaars/svg?seed=Ausaf"
                        alt="User"
                        style={{ width: '100%', height: '100%' }}
                    />
                </div>
                <span style={{ fontWeight: 'bold', fontSize: '16px', textShadow: '1px 1px 2px rgba(0,0,0,0.5)' }}>
                    Syed Ausaf Ahmad
                </span>
            </div>

            {/* Body */}
            <div style={{ flex: 1, display: 'flex' }}>
                {/* Left Column (White) */}
                <div style={{ flex: 1, padding: '10px 5px', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                    {menuItems.map(item => (
                        <div
                            key={item.id}
                            onClick={() => { onOpenWindow(item.id); onClose(); }}
                            className="start-menu-item"
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '10px',
                                padding: '8px',
                                cursor: 'pointer',
                                borderRadius: '4px',
                                transition: 'background 0.2s'
                            }}
                            onMouseEnter={(e) => e.currentTarget.style.background = '#316AC5'}
                            onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}
                        >
                            <div style={{ fontSize: '20px' }}>{item.icon}</div>
                            <div style={{ display: 'flex', flexDirection: 'column' }}>
                                <span style={{ fontWeight: 'bold', fontSize: '12px', color: '#333' }} className="menu-text">
                                    {item.label}
                                </span>
                                <span style={{ fontSize: '10px', color: '#666' }} className="menu-sub">
                                    {item.sub}
                                </span>
                            </div>
                        </div>
                    ))}

                    <div style={{ height: '1px', background: 'linear-gradient(to right, transparent, #ccc, transparent)', margin: '5px 0' }} />
                </div>

                {/* Right Column (Blue) */}
                <div style={{
                    width: '140px',
                    background: '#D3E5FA',
                    borderLeft: '1px solid #9FBCE5',
                    padding: '10px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '5px',
                    fontSize: '11px',
                    color: '#15428B'
                }}>
                    <div style={{ fontWeight: 'bold', padding: '5px' }}>My Documents</div>
                    <div style={{ fontWeight: 'bold', padding: '5px' }}>My Recent Documents</div>
                    <div style={{ fontWeight: 'bold', padding: '5px' }}>My Pictures</div>
                    <div style={{ fontWeight: 'bold', padding: '5px' }}>My Music</div>
                    <div style={{ height: '1px', background: '#9FBCE5', margin: '5px 0' }} />
                    <div style={{ padding: '5px' }}>Control Panel</div>
                    <div style={{ padding: '5px' }}>Printers and Faxes</div>
                    <div style={{ height: '1px', background: '#9FBCE5', margin: '5px 0' }} />
                    <div style={{ padding: '5px' }}>Help and Support</div>
                    <div style={{ padding: '5px' }}>Search</div>
                    <div style={{ padding: '5px' }}>Run...</div>
                </div>
            </div>

            {/* Footer */}
            <div style={{
                height: '40px',
                background: 'linear-gradient(to bottom, #4282D6 0%, #3A6EA5 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-end',
                padding: '0 10px',
                gap: '10px',
                borderTop: '1px solid #fff'
            }}>
                <button
                    onClick={() => window.location.reload()}
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '5px',
                        background: 'transparent',
                        border: 'none',
                        color: 'white',
                        cursor: 'pointer',
                        fontSize: '11px'
                    }}
                >
                    <FaPowerOff color="#E04238" />
                    Turn Off Computer
                </button>
            </div>

            <style>{`
        .start-menu-item:hover .menu-text,
        .start-menu-item:hover .menu-sub {
          color: white !important;
        }
      `}</style>
        </motion.div>
    );
};

export default StartMenu;
