
# DevMode Learning Platform

## Overview
DevMode is an interactive web-based learning platform designed to help users unlock their potential through online courses. It features a modern interface with a "Dev Mode" toggle, user authentication (sign-up/sign-in), course selection, community chat channels, and a FAQ section. Built with **HTML, CSS, JavaScript**, and **Font Awesome** for icons.

---

## Features
- **Dev Mode Toggle:** Enables an interactive learning mode with dynamic UI changes.
- **Authentication:** Modal-based sign-up/sign-in using localStorage (demo only).
- **Course Selection:** Search and select courses from a dropdown or datalist.
- **Community Chat:** Interactive channels for discussions like Marketing, Web Development, and more.
- **FAQ Section:** Collapsible FAQ answers with toggleable arrows.
- **Responsive Design:** Tailored for desktop browsers with smooth animations.

---

## Prerequisites
- Modern web browser (Chrome, Firefox, Edge)  
- Local web server for testing (e.g., Live Server in VS Code, Node.js `http-server`)  
- Internet access for external dependencies (Font Awesome CDN)

---

## Setup Instructions
devmode/
├── code/
│   ├── index.html
│   ├── auth.js
│   ├── main.js
│   ├── interactive.js
│   └── styles.css
└── image/
    └── ...all images
## Usage

### Access the Platform
- Open `index.html` in a browser via a local server.  
- The landing page displays a **"DIVE INTO DEV MODE"** prompt with a toggle switch.

### Enable Dev Mode
- Toggle the **Dev Mode** switch to activate the learning interface.  
- This reveals the course selection input, navigation bar, and enables scrolling.

### Sign Up or Sign In
- Click **Sign Up** or **Sign In** in the top-right corner to open the authentication modal.  
- **Sign Up:** Enter a username, email, password, and confirm password. Data is stored in `localStorage` (for demo purposes).  
- **Sign In:** Enter email and password to log in. Redirects to `home.html` with the username in the URL.

> Note: `home.html` is referenced but not provided. Ensure it exists or modify `auth.js` to redirect elsewhere.

### Select a Course
- In Dev Mode, use the search input to select a course (e.g., Programming, UI/UX Design).  
- A custom dropdown appears for browsers without datalist support.

### Community Chat
- Click a channel (e.g., "Marketing Analysis") to view its chat section.  
- Use the **Back** button to return to the channel list.

### FAQ Section
- Click an FAQ question to toggle its answer and arrow icon.

---

## Future Improvements

- Replace `localStorage` with a backend API for secure authentication.
- Add real-time chat functionality using WebSockets or a chat service.
- Implement responsive design for mobile devices.
- Add unit tests for JavaScript functions using a framework like Jest.
- Create `home.html` for post-authentication user experience.




