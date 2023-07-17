# Plant.co
A static website inspired from plant decorations and services, developed using the Next.js framework.

## Automatic Installation
Create a Next.js app using create-next-app, which sets up everything automatically. To create a project, run:
> npx create-next-app@latest

## Install Required Libraries
### Framer Motion, to provide our animation features.
To install, run:
> npm install framer-motion

### NextAuth.js, a complete open-source authentication solution for Next.js applications.
To install, run:
> npm install nextauth

## Run the Development Server
1. Run npm run dev to start the development server.
2. Visit http://localhost:3000 to view your application.
3. Edit app/layout.tsx (or pages/index.tsx) file and save it to see the updated result in your browser.

## Run the Client Server
Launch XAMPP Control Panel. Start Apache and MySQL Server.
Then on another command prompt, run: 
> npm run server

### Create Data Table
a. Visit http://localhost:3001/user_registration to create table for user credentials
b. Visit http://localhost:3001/motion_image to create table for detected motions of our separate python motion-detector application.
