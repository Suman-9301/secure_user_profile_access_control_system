# Secure User Profile & Access Control System

## Description

This project implements a secure user identity management system that supports user registration, authentication, and protected profile access. The application follows a stateless authentication model using JSON Web Tokens (JWT) and encrypts sensitive user information using AES-256 before storing it in the database.

The system is implemented as a backend microservice with a React-based frontend for user interaction.

---

## Features

- User registration and authentication
- JWT-based stateless authentication
- Password hashing using bcrypt
- AES-256 encryption for sensitive user data (Aadhaar / ID)
- Protected API routes
- React-based frontend with form validation
- Secure profile access for authenticated users only

---

## Technology Stack

### Backend
- Node.js
- Express.js
- MongoDB
- JWT
- bcrypt
- AES-256 encryption

### Frontend
- React.js
- JavaScript
- HTML / CSS

---

## Setup Instructions

### Prerequisites

- Node.js (v16 or later)
- MongoDB
- npm

---

### Backend Setup

```
cd backend
npm install
Create a .env file in the backend directory with the following variables:

MONGO_URI=<mongodb_connection_string>
JWT_SECRET=<jwt_secret>
ENCRYPTION_KEY=<32_character_encryption_key>
Note: The encryption key must be exactly 32 characters for AES-256.

Start the backend server:

node server.js
The backend server will run on:
http://localhost:5000
```
---
### Frontend Setup
```
cd frontend
npm install
npm start
The frontend application will run on:
http://localhost:3000
```
---
### API Endpoints
```
Authentication and Profile
Method	Endpoint	Description
POST	/api/register	Register a new user
POST	/api/login	Authenticate user and return JWT
GET	/api/profile	Retrieve authenticated user profile
```
---
### Authorization
```
Protected routes require the following HTTP header:
Authorization: Bearer <JWT_TOKEN>
Database Schema
User Collection (MongoDB)
json
Copy code
{
  "name": "String",
  "email": "String",
  "password": "String",
  "aadhaar_encrypted": "String",
  "createdAt": "Date"
}
Passwords are hashed using bcrypt.
Aadhaar / ID numbers are encrypted using AES-256 before storage.
```
---
### Security Considerations

Stateless authentication using JWT
Password hashing to prevent plaintext storage
Encryption of sensitive personal data at rest
Access to protected resources restricted to authenticated users

---
### AI-Assisted Tasks

AI-based development tools (ChatGPT) were used selectively for guidance and understanding, not for direct end-to-end code generation.
AI assistance was used for:
Understanding JWT-based authentication flow
Clarifying AES-256 encryption and decryption concepts
Discussing regular expressions for email and Aadhaar validation
Guidance on structuring backend APIs
Conceptual help in writing unit test cases for encryption logic
Formatting and structuring this README documentation as per submission guidelines

---

### Effectiveness Score

Score: 3 / 5

Justification:
AI tools were helpful in clarifying security concepts and improving documentation efficiency. However, significant manual effort was required for implementation, debugging environment issues, and integrating backend and frontend components.

---
### Repository
GitHub Repository:
https://github.com/Suman-9301/secure_user_profile_access_control_system
