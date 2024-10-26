Product Management System

A complete Product Management System built with a Node.js and Express backend, PostgreSQL database, and a React frontend. This project allows users to perform CRUD (Create, Read, Update, Delete) operations on products.

Table of Contents

- [Project Overview](#project-overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [API Endpoints](#api-endpoints)
- [Running the Project](#running-the-project)
- [Screenshots](#screenshots)
- [License](#license)

 Project Overview

This is a basic product management application where users can manage products in a database. It features a RESTful API for backend operations, a PostgreSQL database to store product information, and a React-based frontend to interact with the system.

 Features

- Add new products to the inventory.
- Retrieve all products from the inventory.
- Edit existing products in the inventory.
- Delete products from the inventory.
- Responsive UI for managing products.
- RESTful API for handling backend operations.

 Tech Stack

- Backend: Node.js, Express
- Frontend: React
- Database: PostgreSQL
- HTTP Client for Testing: Postman

 Project Structure

product-management-system/
├── backend/
│   ├── .env
│   ├── db.js
│   ├── server.js
│   ├── controllers/
│   │   └── productController.js
│   ├── routes/
│   │   └── productRoutes.js
│   ├── models/
│   │   └── productModel.js
│   └── config/
│       └── database.js
├── frontend/
│   ├── src/
│   │   ├── App.js
│   │   ├── index.js
│   │   ├── components/
│   │   │   ├── ProductList.js
│   │   │   ├── ProductForm.js
│   │   │   └── ProductItem.js
│   │   └── services/
│   │       └── api.js
├── .gitignore
├── README.md
├── package.json
└── package-lock.json



 
 
 
 
Getting Started

 Prerequisites

Before you begin, ensure you have installed the following on your machine:

- [Node.js and npm](https://nodejs.org/) (Node Package Manager)
- [PostgreSQL](https://www.postgresql.org/)
- [Git](https://git-scm.com/)

 Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/yourusername/product-management-system.git
    cd product-management-system
    ```

2. Set up the PostgreSQL Database:

   - Start PostgreSQL and create a new database named `productdb`.
   - Connect to the database and create a table named `products`.
   - Run the following commands in the PostgreSQL shell:

     ```sql
     CREATE DATABASE productdb;
     \c productdb;
     CREATE TABLE products (
         id SERIAL PRIMARY KEY,
         name VARCHAR(100) NOT NULL,
         description TEXT,
         price DECIMAL(10, 2) NOT NULL,
         quantity INTEGER NOT NULL
     );
     ```

3. Set up the Backend:

   - Navigate to the `backend` directory:

     ```bash
     cd backend
     ```

   - Install the backend dependencies:

     ```bash
     npm install
     ```

   - Create a `.env` file in the backend root and add the following environment variables:

     ```plaintext
     PORT=5000
     DB_USER=your_db_username
     DB_PASSWORD=your_db_password
     DB_HOST=localhost
     DB_PORT=5432
     DB_NAME=productdb
     ```

   - Start the backend server:

     ```bash
     npm start
     ```

4. Set up the Frontend:

   - Navigate to the `frontend` directory:

     ```bash
     cd ../frontend
     ```

   - Install the frontend dependencies:

     ```bash
     npm install
     ```

   - Start the frontend server:

     ```bash
     npm start
     ```

 API Endpoints

 Base URL

The backend server runs on `http://localhost:5000`

 Endpoints

| Method | Endpoint       | Description              |
| ------ | -------------- | ------------------------ |
| GET    | `/api/products` | Fetch all products      |
| POST   | `/api/products` | Add a new product       |
| PUT    | `/api/products/:id` | Update a product    |
| DELETE | `/api/products/:id` | Delete a product    |

 Sample API Calls

Using Postman or curl, you can test the endpoints.

- Fetch all products:

  ```bash
  curl -X GET http://localhost:5000/api/products
  ```

- Add a new product:

  ```bash
  curl -X POST http://localhost:5000/api/products -H "Content-Type: application/json" -d '{"name": "Example Product", "description": "Sample description", "price": 9.99, "quantity": 100}'
  ```

 Running the Project

1. Start the backend server:

   ```bash
   cd backend
   npm start
   ```

2. Start the frontend server:

   ```bash
   cd frontend
   npm start
   ```

Visit `http://localhost:3000` to interact with the frontend interface.

 License

This project is licensed under the MIT License.
