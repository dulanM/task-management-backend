# Task-Management-BACKEND

Node.js REST API with Express and MongoDB

## Project Description

RESTful API design
CRUD operations
MongoDB integration
Error handling and input validation
Environment-based configurations
unit tests to ensure the reliability of the application


## Prerequisites
Make sure you have the following installed on your machine:

Node.js
MongoDB (Ensure MongoDB service is running locally or provide a remote URI)
npm package manager

## Installation and Setup

1. Clone the repository:
git clone https://github.com/dulanM/task-management-backend
cd task-management-backend

2. Install dependencies:
npm install

## Environment Variables

Already added MONGO_URI & JWT_SECRET env variables

## Running the Application
npm start

## API Endpoints


POST /api/auth/signup: Sign up user

Ex: 

{
  "username": "testuser",
  "email": "testuser@example.com",
  "password": "password123"
}


POST /api/auth/signin: Login user

Ex: 
{
  "email": "testuser@example.com",
  "password": "password123"
}

GET /api/tasks - Get all tasks [Include authorization token in headers]
POST /api/tasks - Create a task [Include authorization token in headers]

{
  "title": "Task 0001",
  "description": "REsolve issues related to login page",
  "priority": "HIGH",
  "status": "PENDING"
}

PUT /api/tasks/:id - Update a task [Include authorization token in headers]
DELETE /api/tasks/:id - Delete a task [Include authorization token in headers]

## Testing

npm test

