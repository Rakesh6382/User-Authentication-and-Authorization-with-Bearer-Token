# User-Authentication-and-Authorization-with-Bearer-Token
Implement user authentication and authorization using Bearer tokens in a Node.js application with Express.js, Mongoose, and JWT. The application should follow the MVC pattern and include API documentation.

# JWT Auth Example

Simple Node.js JWT authentication project using:

- Node.js
- Express.js
- Mongoose (MongoDB)
- JWT (JSON Web Tokens)

## Scripts

- `npm run dev` → Start server with nodemon
- `npm start` → Start server normally

## API Endpoints

- **POST** `/api/auth/register` → Register user  
- **POST** `/api/auth/login` → Login user, returns JWT  
- **GET** `/api/user/me` → Get logged-in user (requires Bearer token)

