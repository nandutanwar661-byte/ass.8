Project Explanation


Introduction

This project is a Full Stack MERN To-Do List Application.
The application helps users manage their daily tasks easily. Users can add new tasks, update existing tasks, delete tasks, search tasks, and change task status.

The project is built using:

React.js for frontend
Node.js and Express.js for backend
MongoDB for database
Tailwind CSS for responsive UI design
Main Features
1. Add Task

Users can create a new task by entering:

Task title
Task description

The data is stored in MongoDB using backend APIs.

2. Update Task

Users can edit task details whenever needed.

The frontend sends updated data to the backend using API requests.

3. Delete Task

Users can remove unnecessary tasks.

After deleting, the UI updates automatically.

4. Update Status

Users can change task status:

Pending
Completed

This helps track completed work.

5. Search Task

Users can search tasks using keywords.

The search functionality filters tasks dynamically.

Backend Explanation
Node.js

Node.js is used as the runtime environment to run JavaScript on the server.

Express.js

Express.js is used to create REST APIs and manage routes.

MongoDB

MongoDB stores all task data such as:

Title
Description
Status
Created Date
MVC Structure

The backend follows MVC architecture:

Models → Database structure
Controllers → API logic
Routes → API endpoints

This makes the code clean and scalable.

Frontend Explanation
React.js

React.js is used to build reusable UI components.

Examples:

TaskCard
TaskForm
SearchBar
Tailwind CSS

Tailwind CSS is used for:

Responsive Design
Modern UI
Fast Styling
Axios

Axios is used to connect frontend with backend APIs.

Responsive Design

The UI is fully responsive for:

Mobile Devices
Tablets
Desktop Screens

Tailwind responsive classes are used for proper layout and spacing.

Error Handling

Error handling is implemented on:

Backend APIs
Frontend API requests

This improves user experience and prevents crashes.

Testing

Postman is used to test all APIs:

GET API
POST API
PUT API
PATCH API
DELETE API
Deployment

The project can be deployed using:

Frontend
Netlify
Vercel

Backend
Vercel
