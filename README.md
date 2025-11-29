# 🖥️ Windows XP Portfolio

A nostalgic portfolio website designed to look and feel like **Windows XP**! This project recreates the classic Windows XP desktop experience with draggable windows, a taskbar, start menu, and the iconic Bliss wallpaper.

![Windows XP Portfolio](https://img.shields.io/badge/Windows-XP-blue?style=for-the-badge&logo=windows)
![React](https://img.shields.io/badge/React-19.2.0-61DAFB?style=for-the-badge&logo=react)
![Vite](https://img.shields.io/badge/Vite-7.2.4-646CFF?style=for-the-badge&logo=vite)

---

## 📸 Screenshots

### Login Screen
The classic Windows XP login screen greets visitors before they enter the portfolio.

![Login Screen](./screenshots/login.png)

### Desktop View
The main desktop with the iconic Bliss wallpaper, desktop icons, and taskbar.

![Desktop](./screenshots/desktop.png)

### Windows & Content
Draggable windows displaying portfolio sections with proper XP styling.

![Windows](./screenshots/windows.png)

---

## ✨ Features

### 🎨 Authentic Windows XP Experience
- **Login Screen**: Classic XP-style login page with user avatar
- **Bliss Wallpaper**: The iconic green hills background
- **Desktop Icons**: Clickable icons for each portfolio section
- **Taskbar**: Functional taskbar with Start button and system tray
- **Start Menu**: Classic two-column XP start menu

### 🪟 Interactive Windows
- **Draggable**: Move windows around the desktop
- **Minimize/Restore**: Minimize windows to the taskbar
- **Close**: Close windows completely
- **Focus Management**: Click to bring windows to front
- **XP Styling**: Authentic blue title bars and window chrome

### 📄 Portfolio Sections
- **My Profile** (About): Background, education, and achievements
- **My Skills**: Technical skills with progress bars
- **My Projects**: Showcase of projects with links
- **My Education**: Timeline of academic journey
- **Contact Me**: Contact form and social links

### 🎭 Design Highlights
- **Authentic Colors**: XP blue theme (#0055EA)
- **Readable Text**: Dark text on white backgrounds for accessibility
- **Smooth Animations**: Framer Motion for window transitions
- **Responsive Design**: Works on desktop and mobile devices

---

## 🚀 Getting Started

Follow these steps to run the project locally:

### Prerequisites

Make sure you have the following installed:
- **Node.js** (v16 or higher) - [Download here](https://nodejs.org/)
- **npm** (comes with Node.js) or **yarn**

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/AusafAhma/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```
   Or if you use yarn:
   ```bash
   yarn install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```
   Or with yarn:
   ```bash
   yarn dev
   ```

4. **Open in browser**
   
   The app will be running at [http://localhost:5173](http://localhost:5173)

### Build for Production

To create a production build:

```bash
npm run build
```

The optimized files will be in the `dist` folder.

To preview the production build:

```bash
npm run preview
```

---

## 📖 Usage Guide

### Step 1: Login Screen
When you first visit the site, you'll see the Windows XP login screen.

1. You'll see your user avatar and name
2. Click the **"Log in"** button to enter the desktop
3. (Optional) Click **"Turn off computer"** to reload the page

### Step 2: Desktop
After logging in, you'll see the desktop with:
- **Desktop Icons** on the left (My Profile, My Projects, My Skills, etc.)
- **Taskbar** at the bottom with Start button and clock
- **Bliss Wallpaper** in the background

### Step 3: Opening Windows
To view portfolio content:

**Method 1: Desktop Icons**
- Click any desktop icon to open that section in a window

**Method 2: Start Menu**
- Click the green **"start"** button in the taskbar
- Select a section from the menu

### Step 4: Managing Windows
Once a window is open:
- **Drag**: Click and drag the title bar to move the window
- **Minimize**: Click the minimize button (—) to hide the window
- **Restore**: Click the window's taskbar button to restore it
- **Close**: Click the close button (×) to close the window
- **Focus**: Click anywhere on a window to bring it to front

### Step 5: Navigation
- Use the **Start Menu** to quickly access all sections
- Use the **Taskbar** to switch between open windows
- Check the **System Tray** for the current time

---

## 📁 Project Structure

```
portfolio/
├── public/                  # Static assets
├── src/
│   ├── components/
│   │   ├── xp/             # Windows XP components
│   │   │   ├── WindowFrame.jsx    # Draggable window component
│   │   │   ├── Taskbar.jsx        # Bottom taskbar
│   │   │   ├── StartMenu.jsx      # Start menu
│   │   │   ├── DesktopIcon.jsx    # Desktop icons
│   │   │   ├── LoginScreen.jsx    # Login screen
│   │   │   └── XP.css             # XP theme styles
│   │   ├── Navbar.jsx      # (Legacy - not used in XP mode)
│   │   └── Footer.jsx      # (Legacy - not used in XP mode)
│   ├── sections/           # Portfolio content sections
│   │   ├── About.jsx       # About section
│   │   ├── Skills.jsx      # Skills section
│   │   ├── Projects.jsx    # Projects section
│   │   ├── Education.jsx   # Education section
│   │   └── Contact.jsx     # Contact section
│   ├── App.jsx             # Main app component
│   ├── main.jsx            # Entry point
│   └── index.css           # Global styles
├── index.html              # HTML template
├── package.json            # Dependencies
├── vite.config.js          # Vite configuration
└── README.md               # This file
```

---

## 🛠️ Technologies Used

### Frontend Framework
- **React 19.2.0** - UI library
- **Vite 7.2.4** - Build tool and dev server

### Styling & Animation
- **CSS3** - Custom styling with XP theme
- **Framer Motion 12.23.24** - Smooth animations and drag-and-drop

### Icons
- **React Icons 5.5.0** - Icon library (Font Awesome, etc.)

### Utilities
- **React Scroll 1.9.3** - Smooth scrolling (legacy)

### Development Tools
- **ESLint** - Code linting
- **Vite Plugin React** - Fast refresh for React

---

## 🎨 Customization

### Changing Personal Information

1. **Update User Details** in `src/components/xp/LoginScreen.jsx`:
   ```javascript
   <h2>Your Name</h2>
   ```

2. **Update Avatar** in `src/components/xp/LoginScreen.jsx` and `src/components/xp/StartMenu.jsx`:
   ```javascript
   <img src="your-avatar-url" alt="User" />
   ```

3. **Update Content** in `src/sections/`:
   - `About.jsx` - Your background and bio
   - `Skills.jsx` - Your technical skills
   - `Projects.jsx` - Your projects
   - `Education.jsx` - Your education and certifications
   - `Contact.jsx` - Your contact information

### Changing Colors

Edit `src/components/xp/XP.css` to customize the XP theme:

```css
:root {
  --xp-blue-title-start: #0058EE;  /* Window title bar start */
  --xp-blue-title-end: #3A93FF;    /* Window title bar end */
  --xp-taskbar-start: #245DDA;     /* Taskbar gradient start */
  --xp-taskbar-end: #1941A5;       /* Taskbar gradient end */
}
```

### Changing Background

Replace the Bliss wallpaper in `src/components/xp/XP.css`:

```css
body {
  background-image: url('your-image-url');
}
```

---

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Commit your changes**
   ```bash
   git commit -m 'Add some amazing feature'
   ```
4. **Push to the branch**
   ```bash
   git push origin feature/amazing-feature
   ```
5. **Open a Pull Request**

---

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

---

## 👨‍💻 Author

**Syed Ausaf Ahmad**

- GitHub: [@AusafAhma](https://github.com/AusafAhma)
- LinkedIn: [Syed Ausaf Ahmad](https://www.linkedin.com/in/syed-ausaf-ahmad-87b5a5266/)
- Email: ausafahmad0072@gmail.com

---

## 🙏 Acknowledgments

- **Windows XP** - For the nostalgic design inspiration
- **Microsoft** - For the iconic Bliss wallpaper
- **React Community** - For amazing tools and libraries
- **Framer Motion** - For smooth animations

---

## 📞 Support

If you have any questions or need help, feel free to:
- Open an [issue](https://github.com/AusafAhma/portfolio/issues)
- Contact me via [email](mailto:ausafahmad0072@gmail.com)
- Connect on [LinkedIn](https://www.linkedin.com/in/syed-ausaf-ahmad-87b5a5266/)

---

<div align="center">

**⭐ Star this repo if you like it! ⭐**

Made with ❤️ and nostalgia for Windows XP

</div>
