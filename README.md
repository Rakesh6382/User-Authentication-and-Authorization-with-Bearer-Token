# JWT Auth Example (Node, Express, Mongoose)

## Features
- Register user with hashed password (bcrypt)
- Login and receive JWT (Bearer)
- Middleware to protect routes (verifies JWT and attaches `req.user`)
- Simple MVC-file layout
- Postman collection included

## Setup
1. `npm install`
2. Copy `.env.example` to `.env` and set values (MONGODB_URI, JWT_SECRET)
3. `npm run dev` (requires nodemon) or `npm start`

## Endpoints
- `POST /api/auth/register`
- `POST /api/auth/login`
- `GET /api/user/me` (protected)

## Host URL (local dev)
http://localhost:5000
