# NXTWatch

NXTWatch is a React-based video streaming application that simulates a video platform experience, allowing users to browse and view videos by category, access detailed video pages, and switch between light and dark themes.

## Table of Contents
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [File Structure](#file-structure)
- [Components Overview](#components-overview)
- [Contributing](#contributing)
- [License](#license)

## Features
- **User Authentication**: Secure login page for user access.
- **Protected Routes**: Restricts access to certain pages based on user authentication.
- **Video Categories**: Browse videos in categories such as Gaming and Trending.
- **Dark Mode**: Supports theme toggle between light and dark modes.
- **Responsive Design**: Optimized for various screen sizes and devices.

## Technologies Used
- **React**: For building the user interface.
- **React Router**: Manages navigation and routing within the app.
- **CSS Modules and Styled Components**: Custom styling for individual components.
- **REST API**: Data fetching and management.

## Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/shariffDevMern/NxtWatch.git

NXTWatch/
├── public/
│   ├── index.html           # Main HTML template
│   ├── manifest.json        # Web app manifest for PWA support
│   └── img/                 # Static images and icons
├── src/
│   ├── components/          # Reusable UI components
│   │   ├── Login/           # Authentication component
│   │   ├── MenuItems/       # Navigation menu items
│   │   ├── ProtectedRoute/  # Auth-protected route component
│   │   ├── VideoItem/       # Component for individual video items
│   │   ├── GameItem/        # Component for gaming videos
│   │   ├── NavBar/          # Header with theme toggle
│   │   └── Gaming/          # Gaming category component
│   ├── App.js               # Main application component
│   ├── index.js             # Entry point of the application
│   ├── setupTests.js        # Testing setup
│   └── convertKeys.js       # Utility function for key conversion
└── package.json             # Project metadata and dependencies

