# Product Management System

This is a full-stack web application for managing a list of products. The system is built with a clean, simple user interface that communicates with a robust backend API to handle all product data. You can perform standard CRUD (Create, Read, Update, Delete) operations and navigate through product listings with efficient pagination.

### Live Demo 🚀

The application is deployed and available at the following links:
* **Frontend:** `https://navicode-product-crud-dz43.vercel.app/`
* **Backend:** `https://navicode-product-crud.vercel.app`

***

### Key Features
* **Create:** Easily add new products to your inventory.
* **Read:** Retrieve all products with paginated results or fetch a single product by its unique ID.
* **Update:** Modify the details of any existing product.
* **Delete:** Remove products from the database.
* **Pagination:** Seamlessly browse through large product lists using "Next" and "Previous" buttons.

---

### Technology Stack
This project is built using a modern JavaScript stack.

**Backend:**
* **Node.js & Express.js:** The core server-side framework.
* **Mongoose:** Provides a straightforward way to interact with the database.
* **MongoDB:** A NoSQL database for flexible data storage.

**Frontend:**
* **React:** A popular library for building dynamic user interfaces.
* **Material-UI (MUI):** A component library for building a professional and responsive UI.

---

### Getting Started

To get the application up and running on your local machine, follow these steps.

#### Prerequisites
Make sure you have the following installed:
* [Node.js](https://nodejs.org/en/)
* A running instance of [MongoDB](https://www.mongodb.com/) (either a local installation or a cloud service like MongoDB Atlas).

#### 1. Backend Setup

1.  Open your terminal and navigate to the `backend` folder:
    ```bash
    cd backend
    ```
2.  Install the necessary dependencies:
    ```bash
    npm install
    ```
3.  Create a `.env` file in the `backend` folder and add your MongoDB connection string.
    ```bash
    PORT=4000
    MONGO_URI=your_mongodb_connection_string
    ```
    (Remember to replace `your_mongodb_connection_string` with your actual MongoDB URI).
    
4.  Change the CORS origin to allow requests from your local frontend. Open server.js and update the cors middleware:
    ```bash
    origin: 'http://localhost:5173'
    ```
6.  Start the backend server:
    ```bash
    npm start
    ```

#### 2. Frontend Setup

1.  Open a **new** terminal window and navigate to the `frontend` folder:
    ```bash
    cd frontend
    ```
2.  Change the API URL to point to your local backend. Open src/App.jsx and update the API_URL constant:
   ```bash 
    `const API_URL = '/api/products'
    ```
    
2.  Install the project's frontend dependencies:
    ```bash
    npm install
    ```
3.  Start the frontend development server:
    ```bash
    npm run dev
    ```

Now you're all set! Both the frontend and backend should be connected, and you can start managing products.

---

### API Endpoints
The backend provides a set of clean, RESTful API endpoints for all operations:

| Method | Endpoint             | Description                       |
|--------|----------------------|-----------------------------------|
| `POST`   | `/api/products`        | Creates a new product.            |
| `GET`    | `/api/products`        | Fetches a list of all products with pagination. |
| `GET`    | `/api/products/:id`    | Retrieves a single product by its ID. |
| `PUT`    | `/api/products/:id`    | Updates an existing product.      |
| `DELETE` | `/api/products/:id`    | Deletes a product.                |
