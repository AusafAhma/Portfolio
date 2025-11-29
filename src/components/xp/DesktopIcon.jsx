import React from 'react';
import './XP.css';

const DesktopIcon = ({ label, icon, onClick, style }) => {
    return (
        <div
            onClick={onClick}
            style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                width: '80px',
                cursor: 'pointer',
                padding: '5px',
                borderRadius: '4px',
                transition: 'background 0.2s',
                ...style
            }}
            className="desktop-icon"
        >
            <div style={{
                fontSize: '32px',
                marginBottom: '4px',
                filter: 'drop-shadow(2px 2px 2px rgba(0,0,0,0.5))'
            }}>
                {icon}
            </div>
            <span style={{
                color: 'white',
                fontSize: '12px',
                textAlign: 'center',
                textShadow: '1px 1px 2px rgba(0,0,0,0.8)',
                lineHeight: '1.2'
            }}>
                {label}
            </span>

            <style>{`
        .desktop-icon:hover {
          background-color: rgba(49, 106, 197, 0.4);
          border: 1px dotted rgba(255, 255, 255, 0.5);
        }
        .desktop-icon:active {
          background-color: rgba(49, 106, 197, 0.6);
        }
      `}</style>
        </div>
    );
};

export default DesktopIcon;
