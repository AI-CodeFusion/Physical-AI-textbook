# Quickstart Guide: Physical AI & Humanoid Robotics Textbook

## Prerequisites

Before getting started with the Physical AI & Humanoid Robotics textbook development, ensure you have the following installed:

- Node.js (version 18 or higher)
- npm (version 8 or higher) or yarn
- Git
- A modern web browser (Chrome, Firefox, Safari, or Edge)

## Getting Started

### 1. Clone the Repository

```bash
git clone <repository-url>
cd <repository-name>
```

### 2. Install Dependencies

```bash
npm install
# or
yarn install
```

### 3. Start the Development Server

```bash
npm run start
# or
yarn start
```

This command starts a local development server and opens the textbook in your default browser at `http://localhost:3000`. Most changes are reflected live without restarting the server.

### 4. Project Structure

The textbook content is organized as follows:

```
website/
├── blog/               # Blog section (if applicable)
├── docs/               # Textbook content
│   ├── module-1/       # Module 1: The Robotic Nervous System (ROS 2)
│   ├── module-2/       # Module 2: The Digital Twin (Gazebo & Unity)
│   ├── module-3/       # Module 3: The AI-Robot Brain (NVIDIA Isaac™)
│   └── module-4/       # Module 4: Vision-Language-Action (VLA)
├── src/
│   ├── components/     # React components for interactive elements
│   ├── css/            # Custom styles
│   └── pages/          # Standalone pages
├── static/             # Static assets (images, simulations, etc.)
├── docusaurus.config.js # Docusaurus configuration
├── package.json        # Dependencies and scripts
└── sidebars.js         # Navigation structure
```

### 5. Adding New Content

To add a new chapter or lesson:

1. Create a new MDX file in the appropriate module directory
2. Add the file to the `sidebars.js` to make it accessible in the navigation
3. Use the MDX format to include both text and interactive components

Example of a lesson file (`docs/module-1/chapter-1/lesson-1.mdx`):

```md
---
title: Introduction to ROS 2
sidebar_position: 1
description: Learn the basics of Robot Operating System 2
---

# Introduction to ROS 2

Content here...

import SimulationComponent from '@site/src/components/SimulationComponent';

<SimulationComponent simulationId="ros-node-communication" />
```

### 6. Working with Simulations

To embed a simulation in your content:

1. Create the simulation in the `static/simulations/` directory
2. Create a React component that loads the simulation
3. Import and use the component in your MDX files

### 7. Building for Production

To build the textbook for deployment:

```bash
npm run build
# or
yarn build
```

This command generates a `build` directory with static files that can be served on any static hosting service.

### 8. Customization

- **Styling**: Modify the CSS in `src/css/custom.css` to customize the appearance
- **Navigation**: Update `sidebars.js` to change the navigation structure
- **Configuration**: Edit `docusaurus.config.js` to change site metadata, plugins, etc.
- **Components**: Add new React components in `src/components/` for interactive elements

### 9. Running Tests

To run tests for the documentation site:

```bash
npm run test
# or
yarn test
```

### 10. Deployment

The built site can be deployed to any static hosting service. For GitHub Pages:

```bash
GIT_USER=<your-github-username> npm run deploy
# or
GIT_USER=<your-github-username> yarn deploy
```

## Need Help?

- Review the [Docusaurus documentation](https://docusaurus.io/docs)
- Check the [Physical AI textbook specification](../spec.md)
- Look at existing content examples in the `docs/` directory