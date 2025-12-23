Secure User Profile & Access Control System
📌 Project Overview

This project implements Assignment 1: Secure User Profile & Access Control System, which focuses on building a secure identity management microservice. The system allows users to register, log in, and securely view their profile information.

The backend is designed using JWT-based stateless authentication and AES-256 encryption to protect sensitive user data such as Aadhaar/ID numbers at rest. The frontend provides a React-based user interface for authentication and profile management with proper validation and error handling.

Implementation Approach

Backend APIs built using Node.js and Express

User data stored in MongoDB

Passwords hashed using bcrypt

Aadhaar/ID number encrypted using AES-256

JWT used for secure access to protected routes

Frontend developed in React.js with form validation and protected dashboard access

⚙️ Setup / Run Instructions
Prerequisites

Node.js (v16+ recommended)

MongoDB (local or cloud)

npm

🔹 Backend Setup
cd backend
npm install

⚠️ ENCRYPTION_KEY must be exactly 32 characters for AES-256.

Start the backend server:

node server.js


Backend will run at:

http://localhost:5000

🔹 Frontend Setup
cd frontend
npm install
npm start


Frontend will run at:

http://localhost:3000

📡 API Documentation
Authentication & Profile APIs
Method	Endpoint	Description
POST	/api/register	Register a new user
POST	/api/login	Authenticate user and return JWT
GET	/api/profile	Fetch authenticated user profile

🔐 Authorization Header (Protected APIs)

Authorization: Bearer <JWT_TOKEN>

🗄️ Database Schema
MongoDB – User Collection
{
  name: String,
  email: String,
  password: String,        // Hashed using bcrypt
  aadhaar_encrypted: String, // Encrypted using AES-256
  createdAt: Date
}


Sensitive fields such as Aadhaar/ID number are encrypted before storage and decrypted only when returned to authenticated users.

🤖 AI Tool Usage Log
AI-Assisted Tasks

AI-based development tools (ChatGPT) were used selectively for guidance and understanding.

AI assistance was used for:

Understanding JWT-based authentication flow

Clarifying AES-256 encryption and decryption concepts

Discussing regular expressions for email and Aadhaar validation

Guidance on structuring backend APIs

Conceptual help in writing unit test cases for encryption logic

Formatting and structuring this README documentation as per submission guidelines

All implementation decisions and code integration were performed manually.

Effectiveness Score

Score: 3 / 5

Justification:
AI tools were helpful in clarifying security concepts and improving documentation efficiency. However, significant manual effort was required for implementation, debugging environment issues, and integrating backend and frontend components.


📤 Submission Details

Public GitHub Repository: https://github.com/Suman-9301/secure_user_profile_access_control_system
