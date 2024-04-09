Key Features:

User Authentication (Login/Signup):

Users can create accounts and log in securely.
Authentication is managed using JSON Web Tokens (JWT) for secure access.
Product Listings:

Products are listed with details such as name, description, and price.
Users can view available products without needing to log in.
Shopping Cart:

Users can add items to a shopping cart.
The cart retains selected items until checkout.
Order Placement via Email (Nodemailer):

Instead of a traditional payment gateway, when a user wishes to purchase items, the order details along with the price are sent via email using Nodemailer.
Email notifications are used to confirm orders and provide details for further communication.
Admin Panel:

An admin interface allows the addition, modification, and removal of products.
Admins have special privileges such as managing user accounts and overseeing orders.
Technology Stack:

Frontend: React.js is used for the client-side interface, providing a dynamic and responsive user experience.
Backend: Node.js and Express.js power the server-side logic, handling API requests and interactions with the database.
Database: MongoDB is used as the database to store product information, user data, and orders.
Authentication: JSON Web Tokens (JWT) are utilized for secure user authentication.
Email Handling: Nodemailer is integrated to manage transactional emails for order confirmations.
Workflow:

User Interaction:

Users can browse products, add items to the cart, and proceed to checkout.
Authentication:

Users can create accounts or log in using existing credentials.
Cart Management:

Items added to the cart are stored in the backend and associated with the user's session.
Order Processing:

When a user initiates a purchase, the order details are compiled and sent via email using Nodemailer.
Admin Operations:

Admins can log in to manage products, view orders, and handle user accounts.
Future Enhancement: Display Admin's Uploaded Products on Admin Page

Description:
Currently, the admin dashboard displays all products regardless of who uploaded them. To improve the user experience and streamline product management, we will implement a feature that filters and displays only the products uploaded by the currently logged-in admin on the admin dashboard.
