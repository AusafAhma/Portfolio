import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes, FaWindowMinimize, FaWindowMaximize } from 'react-icons/fa';
import './XP.css';

const WindowFrame = ({
    id,
    title,
    icon,
    children,
    isOpen,
    isMinimized,
    onClose,
    onMinimize,
    isActive,
    onFocus,
    zIndex
}) => {
    if (!isOpen) return null;

    return (
        <AnimatePresence>
            {!isMinimized && (
                <motion.div
                    drag
                    dragMomentum={false}
                    initial={{ scale: 0.8, opacity: 0, y: 100 }}
                    animate={{ scale: 1, opacity: 1, y: 0 }}
                    exit={{ scale: 0.8, opacity: 0 }}
                    onMouseDown={() => onFocus(id)}
                    style={{
                        position: 'absolute',
                        top: '10%',
                        left: '15%',
                        width: 'min(800px, 90vw)',
                        height: 'min(600px, 70vh)',
                        backgroundColor: 'var(--xp-window-bg)',
                        border: '3px solid #0055EA',
                        borderTopLeftRadius: '8px',
                        borderTopRightRadius: '8px',
                        boxShadow: isActive ? '0 0 15px rgba(0,0,0,0.3)' : '0 0 5px rgba(0,0,0,0.2)',
                        zIndex: zIndex,
                        display: 'flex',
                        flexDirection: 'column',
                        overflow: 'hidden',
                    }}
                >
                    {/* Title Bar */}
                    <div
                        className="title-bar"
                        style={{
                            background: isActive
                                ? 'linear-gradient(to bottom, var(--xp-blue-title-start) 0%, var(--xp-blue-title-end) 100%)'
                                : 'linear-gradient(to bottom, #7697CE 0%, #7D9FDB 100%)',
                            padding: '6px 8px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            color: 'white',
                            fontFamily: 'var(--xp-font)',
                            fontWeight: 'bold',
                            textShadow: '1px 1px #000',
                            cursor: 'default',
                            userSelect: 'none',
                        }}
                    >
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                            {icon && <span style={{ fontSize: '16px' }}>{icon}</span>}
                            <span>{title}</span>
                        </div>

                        <div style={{ display: 'flex', gap: '4px' }}>
                            <button
                                onClick={(e) => { e.stopPropagation(); onMinimize(id); }}
                                style={controlBtnStyle}
                                title="Minimize"
                            >
                                <FaWindowMinimize size={10} style={{ marginBottom: '4px' }} />
                            </button>
                            <button
                                style={{ ...controlBtnStyle, opacity: 0.5, cursor: 'default' }}
                                title="Maximize"
                            >
                                <FaWindowMaximize size={10} />
                            </button>
                            <button
                                onClick={(e) => { e.stopPropagation(); onClose(id); }}
                                style={{ ...controlBtnStyle, background: '#E04238' }}
                                title="Close"
                            >
                                <FaTimes size={12} />
                            </button>
                        </div>
                    </div>

                    {/* Content Area */}
                    <div
                        className="window-content"
                        style={{
                            flex: 1,
                            padding: '0',
                            overflowY: 'auto',
                            backgroundColor: '#fff',
                            position: 'relative',
                        }}
                    >
                        {/* Menu Bar (Fake) */}
                        <div style={{
                            borderBottom: '1px solid #D6D3CE',
                            padding: '4px 8px',
                            background: '#ECE9D8',
                            fontSize: '12px',
                            color: '#000'
                        }}>
                            <span style={{ marginRight: '10px' }}>File</span>
                            <span style={{ marginRight: '10px' }}>Edit</span>
                            <span style={{ marginRight: '10px' }}>View</span>
                            <span style={{ marginRight: '10px' }}>Favorites</span>
                            <span style={{ marginRight: '10px' }}>Tools</span>
                            <span style={{ marginRight: '10px' }}>Help</span>
                        </div>

                        {/* Address Bar (Fake) */}
                        <div style={{
                            borderBottom: '1px solid #D6D3CE',
                            padding: '4px 8px',
                            background: '#ECE9D8',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '8px'
                        }}>
                            <span style={{ fontSize: '12px', color: '#444' }}>Address</span>
                            <div style={{
                                background: '#fff',
                                border: '1px solid #7F9DB9',
                                flex: 1,
                                padding: '2px 4px',
                                fontSize: '12px',
                                display: 'flex',
                                alignItems: 'center'
                            }}>
                                <span style={{ marginRight: '4px' }}>📄</span>
                                C:\Desktop\{title}
                            </div>
                        </div>

                        <div style={{ padding: '20px', height: 'calc(100% - 60px)', overflowY: 'auto' }}>
                            {children}
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

const controlBtnStyle = {
    width: '22px',
    height: '22px',
    border: '1px solid #fff',
    borderRadius: '3px',
    background: 'transparent',
    color: 'white',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    boxShadow: 'inset 0 0 2px rgba(0,0,0,0.2)',
};

export default WindowFrame;
