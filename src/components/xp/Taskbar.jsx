import React, { useState, useEffect } from 'react';
import { FaWindows } from 'react-icons/fa';
import './XP.css';

const Taskbar = ({ windows, activeWindowId, onToggleWindow, onStartClick, isStartOpen }) => {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => setTime(new Date()), 1000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div style={{
            position: 'fixed',
            bottom: 0,
            left: 0,
            right: 0,
            height: 'var(--taskbar-height)',
            background: 'linear-gradient(to bottom, var(--xp-taskbar-start) 0%, var(--xp-taskbar-end) 100%)',
            display: 'flex',
            alignItems: 'center',
            zIndex: 9999,
            borderTop: '1px solid #3E75D2',
            padding: '0 2px',
            userSelect: 'none',
        }}>
            {/* Start Button */}
            <button
                onClick={onStartClick}
                style={{
                    height: '100%',
                    padding: '0 10px 0 5px',
                    background: isStartOpen
                        ? '#22563A' // Darker green when active
                        : 'linear-gradient(to bottom, #3C9E5D 0%, #3C9E5D 100%)', // Fallback/Simple green
                    border: 'none',
                    borderTopRightRadius: '10px',
                    borderBottomRightRadius: '10px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    cursor: 'pointer',
                    boxShadow: '2px 0 5px rgba(0,0,0,0.3)',
                    marginRight: '10px',
                    color: 'white',
                    fontFamily: 'var(--xp-font)',
                    fontWeight: 'bold',
                    fontStyle: 'italic',
                    fontSize: '14px',
                    textShadow: '1px 1px 1px rgba(0,0,0,0.5)',
                    backgroundImage: 'url("https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Windows_logo_and_wordmark_-_2001-2006.svg/1200px-Windows_logo_and_wordmark_-_2001-2006.svg.png")', // Using icon instead
                    backgroundSize: '0', // Hide bg image, use icon
                    backgroundColor: '#388E3C', // Green
                }}
            >
                <div style={{
                    background: 'white',
                    borderRadius: '50%',
                    width: '18px',
                    height: '18px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '1px 1px 2px rgba(0,0,0,0.3)'
                }}>
                    <FaWindows color="#E65100" size={12} />
                </div>
                start
            </button>

            {/* Task List */}
            <div style={{ flex: 1, display: 'flex', gap: '4px', overflowX: 'auto' }}>
                {windows.filter(w => w.isOpen).map(window => (
                    <button
                        key={window.id}
                        onClick={() => onToggleWindow(window.id)}
                        style={{
                            maxWidth: '160px',
                            minWidth: '50px',
                            flex: '1 1 auto',
                            height: '24px',
                            marginTop: '3px',
                            background: window.id === activeWindowId && !window.isMinimized
                                ? '#1E52B7' // Active dark blue
                                : '#3C81F3', // Inactive lighter blue
                            border: '1px solid rgba(0,0,0,0.2)',
                            borderRadius: '3px',
                            color: 'white',
                            display: 'flex',
                            alignItems: 'center',
                            padding: '0 8px',
                            gap: '6px',
                            cursor: 'pointer',
                            fontSize: '11px',
                            fontFamily: 'var(--xp-font)',
                            boxShadow: window.id === activeWindowId && !window.isMinimized
                                ? 'inset 1px 1px 2px rgba(0,0,0,0.5)'
                                : '1px 1px 1px rgba(255,255,255,0.2)',
                            opacity: window.isMinimized ? 0.8 : 1,
                        }}
                    >
                        {window.icon}
                        <span style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                            {window.title}
                        </span>
                    </button>
                ))}
            </div>

            {/* System Tray */}
            <div style={{
                background: '#1290E8',
                height: '100%',
                padding: '0 15px',
                display: 'flex',
                alignItems: 'center',
                borderLeft: '1px solid #104E8B',
                boxShadow: 'inset 1px 0 1px rgba(0,0,0,0.2)',
                color: 'white',
                fontSize: '11px',
                fontFamily: 'var(--xp-font)',
            }}>
                {time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
            </div>
        </div >
    );
};

export default Taskbar;
