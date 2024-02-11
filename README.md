# Plant.co
A simple Plant Services Co. website built in Nextjs and MySQL. <br/>
Visit the website [here](https://plantco.netlify.app).
<br/><br/>

## Table of Contents
- [General Info](#general-info)
- [Technologies](#technologies)
- [Installation and Setup](#installation-and-setup)
- [Key Features](#key-features)
- [Inspiration](#inspiration)
<br/><br/>

## General Info
It is an academic project that developed website application about Plant Planning and Services.This application is developed with HTML, CSS, Next.js, XAMPP, Apache Server, and MySQL. For website hosting Netlify is utilized to deploy the application.
<br/><br/>

## Technologies
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
<br/><br/>

## Installation and Setup
### 1. Install the App module
To install module, run:
> npm install

### 2. Install Required Libraries
To install a [dependency](#technologies), run:
> npm install package-name

### 3. Run the Development Server
1. Run npm run dev to start the development server.
2. Visit http://localhost:3000 to view your application.

### 4. Run the Client Server
Launch XAMPP Control Panel. Start Apache and MySQL Server.
Then on another command prompt, run: 
> npm run server

### 5. Create Data Table
To create MySQL tables, visit the links as follows:
1. Visit http://localhost:3001/user_registration to create table for user credentials
2. Visit http://localhost:3001/motion_image to create table for detected motions of our separate python motion-detector application.
<br/><br/>

## Key Features
- The system utilizes NextAuth and Rest APIs to allow user registration, authentication, and authorization.
- For custom registration, the system uses custom backend/external apis.
- Offers Reset Password feature for users who apparently have forgotten their password with the use of external APIs
- External Python Motion Detector Program created in Node.js and Python is integrated into this web application.
<br/><br/>

## Inspiration
The creation of this website is inspired from the concept of love and interest towards nature.
