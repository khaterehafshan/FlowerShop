🌸 FlowerShop

FlowerShop is a simple React-based shopping application for browsing flowers, viewing product details, managing a shopping cart, and handling basic user authentication. The app uses React Router for navigation and localStorage to persist user login data.

Features

Browse flowers in a gallery view

Search flowers by name

View detailed product pages

Add and remove items from the shopping cart

Dedicated cart page

Login and signup via modal dialogs

User login state saved in localStorage

Background blur effect when authentication modal is open

Clean layout with header and footer

Technologies Used

React (Hooks: useState)

React Router (Routes, Route)

JavaScript (ES6+)

HTML & CSS

LocalStorage

Project Structure
FlowerShop/
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Gallery.jsx
│   │   ├── ProductPage.jsx
│   │   ├── Cart.jsx
│   │   ├── Login.jsx
│   │   ├── Signup.jsx
│   │   └── Footer.jsx
│   ├── App.jsx
│   └── index.js
├── package.json
└── README.md
How It Works

Navigation is handled with React Router

The shopping cart state is managed in the App component

Search input filters products in the gallery

Authentication is handled with modal components

Logged-in user data is stored under currentUser in localStorage

If no user is logged in, the login modal opens automatically

Installation & Setup

Clone the repository:

https://github.com/khaterehafshan/FlowerShop.git


Install dependencies:

npm run dev

Start the development server:

npm start

Open your browser at:

http://localhost:3000
Usage

Browse flowers on the home page

Use the search bar to find specific products

Click on a product to view its details

Add items to the cart

Visit the cart page to manage selected items

Log in or sign up using the modal

Notes

This project is built for learning and practice purposes

Authentication is frontend-only and not secure for production use

License

This project is open-source and available under the MIT License.
