# Plant.co
A simple Plant Services Co. website built in Nextjs and MySQL. 
Visit the website [here](https://plantco.netlify.app).

## Table of Contents
- [Technologies](#technologies)
- [Installation and Setup](#installation-and-setup)
- [Key Features](#key-features)
- [Inspiration](#inspiration)

##Technologies
Below are some of the notable dependencies used in this project
- Axios version: "^1.2.2"
- Brypt version: "^5.1.0"
- Cookie-parser version: "^1.4.6"
- Express version: "^4.18.2"
- Express-session version: "^1.17.3"
- Framer-motion version: "^7.6.18"
- Jsonwebtoken version: "^9.0.0"
- Mysql version: "^2.18.1"
- Next version: "13.0.3"
- Next-auth version: "^4.18.8"
- Nodemon version: "^2.0.20"
- React-toastify version: "^9.1.1",

## Installation and Setup
Create a Next.js app using create-next-app, which sets up everything automatically. To create a project, run:
> npx create-next-app@latest

### 1. Install Required Libraries
To install a [dependency](#technologies), run:
> npm install package-name

### 2. Run the Development Server
1. Run npm run dev to start the development server.
2. Visit http://localhost:3000 to view your application.
3. Edit app/layout.tsx (or pages/index.tsx) file and save it to see the updated result in your browser.

### 3. Run the Client Server
Launch XAMPP Control Panel. Start Apache and MySQL Server.
Then on another command prompt, run: 
> npm run server

### 4. Create Data Table
1. Visit http://localhost:3001/user_registration to create table for user credentials
2. Visit http://localhost:3001/motion_image to create table for detected motions of our separate python motion-detector application.

##Key Features
- External Python Motion Detector Program created in Node.js and Python is integrated into this web application.
