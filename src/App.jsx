import React, { useState } from 'react';
import { FaUser, FaBriefcase, FaCode, FaEnvelope, FaGraduationCap, FaTrash, FaFilePdf } from 'react-icons/fa';
import About from './sections/About';
import Skills from './sections/Skills';
import Education from './sections/Education';
import Projects from './sections/Projects';
import Contact from './sections/Contact';
import WindowFrame from './components/xp/WindowFrame';
import Taskbar from './components/xp/Taskbar';
import StartMenu from './components/xp/StartMenu';
import DesktopIcon from './components/xp/DesktopIcon';
import LoginScreen from './components/xp/LoginScreen';
import './components/xp/XP.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [windows, setWindows] = useState([
    { id: 'about', title: 'My Profile', icon: <FaUser color="#E65100" />, component: <About />, isOpen: true, isMinimized: false, zIndex: 1 },
    { id: 'projects', title: 'My Projects', icon: <FaBriefcase color="#1B5E20" />, component: <Projects />, isOpen: false, isMinimized: false, zIndex: 0 },
    { id: 'skills', title: 'My Skills', icon: <FaCode color="#0D47A1" />, component: <Skills />, isOpen: false, isMinimized: false, zIndex: 0 },
    { id: 'education', title: 'My Education', icon: <FaGraduationCap color="#4A148C" />, component: <Education />, isOpen: false, isMinimized: false, zIndex: 0 },
    { id: 'contact', title: 'Contact Me', icon: <FaEnvelope color="#B71C1C" />, component: <Contact />, isOpen: false, isMinimized: false, zIndex: 0 },
  ]);

  const [activeWindowId, setActiveWindowId] = useState('about');
  const [isStartOpen, setIsStartOpen] = useState(false);
  const [nextZIndex, setNextZIndex] = useState(2);

  const handleOpenWindow = (id) => {
    setWindows(prev => prev.map(w => {
      if (w.id === id) {
        return { ...w, isOpen: true, isMinimized: false, zIndex: nextZIndex };
      }
      return w;
    }));
    setActiveWindowId(id);
    setNextZIndex(prev => prev + 1);
  };

  const handleCloseWindow = (id) => {
    setWindows(prev => prev.map(w => w.id === id ? { ...w, isOpen: false } : w));
    if (activeWindowId === id) {
      setActiveWindowId(null);
    }
  };

  const handleMinimizeWindow = (id) => {
    setWindows(prev => prev.map(w => w.id === id ? { ...w, isMinimized: true } : w));
    if (activeWindowId === id) {
      setActiveWindowId(null);
    }
  };

  const handleFocusWindow = (id) => {
    setWindows(prev => prev.map(w => w.id === id ? { ...w, zIndex: nextZIndex } : w));
    setActiveWindowId(id);
    setNextZIndex(prev => prev + 1);
  };

  const handleToggleWindow = (id) => {
    const window = windows.find(w => w.id === id);
    if (window.isMinimized) {
      setWindows(prev => prev.map(w => w.id === id ? { ...w, isMinimized: false, zIndex: nextZIndex } : w));
      setActiveWindowId(id);
      setNextZIndex(prev => prev + 1);
    } else if (activeWindowId === id) {
      handleMinimizeWindow(id);
    } else {
      handleFocusWindow(id);
    }
  };

  if (!isLoggedIn) {
    return <LoginScreen onLogin={() => setIsLoggedIn(true)} />;
  }

  return (
    <div className="App" style={{ height: '100vh', width: '100vw', overflow: 'hidden' }} onClick={() => setIsStartOpen(false)}>

      {/* Desktop Icons */}
      <div style={{
        position: 'absolute',
        top: '20px',
        left: '20px',
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
        zIndex: 0
      }}>
        {windows.map(w => (
          <DesktopIcon
            key={w.id}
            label={w.title}
            icon={w.icon}
            onClick={(e) => { e.stopPropagation(); handleOpenWindow(w.id); }}
          />
        ))}
        <DesktopIcon
          label="My Resume"
          icon={<FaFilePdf color="#B71C1C" />}
          onClick={(e) => { e.stopPropagation(); window.open('/resume.pdf', '_blank'); }}
        />
        <DesktopIcon
          label="Recycle Bin"
          icon={<FaTrash color="#555" />}
          onClick={() => alert("Recycle Bin is empty.")}
        />
      </div>

      {/* Windows */}
      {windows.map(w => (
        <WindowFrame
          key={w.id}
          id={w.id}
          title={w.title}
          icon={w.icon}
          isOpen={w.isOpen}
          isMinimized={w.isMinimized}
          isActive={activeWindowId === w.id}
          zIndex={w.zIndex}
          onClose={handleCloseWindow}
          onMinimize={handleMinimizeWindow}
          onFocus={handleFocusWindow}
        >
          {w.component}
        </WindowFrame>
      ))}

      {/* Start Menu */}
      <StartMenu
        isOpen={isStartOpen}
        onClose={() => setIsStartOpen(false)}
        onOpenWindow={handleOpenWindow}
      />

      {/* Taskbar */}
      <Taskbar
        windows={windows}
        activeWindowId={activeWindowId}
        onToggleWindow={handleToggleWindow}
        onStartClick={(e) => { e.stopPropagation(); setIsStartOpen(!isStartOpen); }}
        isStartOpen={isStartOpen}
      />
    </div>
  );
}

export default App;
