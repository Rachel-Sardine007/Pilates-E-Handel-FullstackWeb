# FORMA – Pilates & Wellness E-Commerce

## About the Project

FORMA is a full-stack e-commerce application inspired by modern pilates studios and wellness brands. The website combines a premium studio experience with online shopping functionality, allowing users to browse products, save favorites, add items to the cart, complete purchases, and manage their accounts.

The project was developed using React for the frontend and Node.js, Express, MongoDB Atlas for the backend.

### Features

* Home page with hero section and studio presentation
* Product catalog with category filtering
* Product color selection
* Favorites (wishlist)
* Shopping cart
* Checkout and payment flow
* User registration and login
* Order confirmation page
* Responsive design for desktop and mobile
* MongoDB database integration

---

# Frontend Setup

Navigate to the frontend folder:

```bash
cd web-frontend
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Frontend runs on:

```txt
http://localhost:5173
```

---

# Backend Setup

Navigate to the backend folder:

```bash
cd web-backend
```

Install dependencies:

```bash
npm install
```

 `.env` file in the backend root directory for required environment variables.

Start the backend server:

```bash
npm run dev
```

Backend runs on:

```txt
http://localhost:3000
```

---

# Test User

Use the following account to test the application:

Email:

```txt
user@test.com
```

Password:

```txt
password
```

---

# Environment Variables

`.env` file inside the backend folder:

```env
PORT=3000

CONNECTION_STRING=your_mongodb_connection_string

ACCESS_TOKEN_SECRET=your_jwt_secret
```

---

# MongoDB Atlas Configuration

To allow external testing, has added the following IP address under: MongoDB Atlas → Network Access

```txt
0.0.0.0/0
```

This allows the database connection from external machines.

---

# Project Structure

```txt
GRA-FullstackWeb/
│
├── web-backend/
│   │
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── .env
│   ├── server.js
│   ├── constants.js
│   └── package.json
│
├── web-frontend/
│   │
│   ├── public/
│   │   └── images/
│   │
│   ├── src/
│   │   ├── components/
│   │   ├── contexts/
│   │   ├── pages/
│   │   ├── services/
│   │   ├── assets/
│   │   ├── api.jsx
│   │   ├── App.jsx
│   │   ├── App.css
│   │   ├── index.css
│   │   └── main.jsx
│   │
│   └── package.json
│
└── README.md
```

---

# Technologies Used

### Frontend

* React
* React Router DOM
* Context API
* CSS3
* React Icons

### Backend

* Node.js
* Express.js
* MongoDB Atlas
* Mongoose
* JWT Authentication
* bcrypt

---

# Author

Developed as part of the SYSM9 Web Development course project.

Sardine © 2026
