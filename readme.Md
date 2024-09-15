# 🌱 Online Nursery Website

## Live Url: https://treehouse-client.vercel.app

## Project Overview

This project is an **Online Nursery Website** developed using **React**, **Redux**, **Node.js**, and **Express.js**. It allows users to browse, filter, and search for products, add them to their cart, and complete payments through **Stripe.js**. Additionally, there is an admin section for managing products and categories, with full **CRUD** (Create, Read, Update, Delete) functionality.

## Features

### 1. Public Routes

All the routes on the website are accessible without authentication.

### 2. Product and Category Management

- **Product List Table**: Displays products in a table with columns for the image, title, price, category, and actions.
- **Action Buttons**:
  - Update: Opens a modal with a form to modify existing product details.
  - Delete: Opens a confirmation modal before deleting a product.
- **Add Product**: Button to add new products via a form that includes fields for:
  - Category
  - Title
  - Price
  - Quantity
  - Description
  - Rating
  - Image (using ImgBB or direct link upload)
- All update, delete, and create actions reflect in real-time, with optimistic UI updates.

### 3. Product Browsing

- **Filtering, Pagination, Sorting, and Searching**:
  - Filter products by category, price, rating, etc.
  - Paginate products across multiple pages for easy navigation.
  - Sort products by relevance, price, name, and more.
  - Search for products by title or keywords.
- **Product Details**: Clicking on a product opens a details page with comprehensive information including:
  - Title
  - Description
  - Price
  - Rating
  - Category
  - Image(s)
  - Add to Cart button

### 4. Shopping Cart

- **Add to Cart**:
  - Users can add products to their cart by clicking the "Add to Cart" button.
  - If a product is out of stock, it cannot be added to the cart.
  - The quantity of duplicate products is increased rather than adding the same product again.
  - Users cannot add more products than are available in stock.
- **Proceed to Checkout**: Users can proceed to checkout from the cart section.


## Page List

1. **Landing Page**: Main page with search, filtering, and product listing.
2. **Products Page**: Dedicated page for all products with pagination, filtering, and search.
3. **Product Details Page**: Detailed information for a specific product.
4. **Checkout/Cart Page**: Lists cart products and allows users to proceed to checkout.
5. **Payment Page**: Handles payments via **Stripe.js**.
6. **Product and Category Management Page**: Interface for adding, updating, and deleting products and categories.


## Installation and Setup

1. Clone the repository:
    ```bash
    git clone https://github.com/Kj-RahiL/treehouse-server
    ```
   
2. Install server and client dependencies:
    ```bash
    # Install server dependencies
    cd server
    npm install
    
    # Install client dependencies
    cd ../client
    npm install
    ```

3. Set up environment variables:
    Create a `.env` file in the `server` directory with the following variables:
    ```
        PORT=5000
        DATABASE_URL= your database url
    ```

4. Start the development server:
    ```bash
    # Start the backend server
    cd server
    npm run dev
    
    # Start the frontend client
    cd ../client
    npm start
    ```

5. Open the app in your browser:
    ```
    http://localhost:5000

    get all product
    http://localhost:5000/api/v1/product


    ```
## Frontend Design part
``` 
    https://github.com/Kj-RahiL/treehouse-client

```

## Technologies Used

- **Frontend**: React, Redux
- **Backend**: Node.js, Express.js
- **Database**: MongoDB with Mongoose
- **Payment**: Stripe.js - not completed
- **Image Hosting**: ImgBB or direct image links

