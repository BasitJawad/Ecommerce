---

# 🛍️ MERN Stack E-Commerce Platform

A full-featured e-commerce application built with the **MERN stack**, featuring secure user authentication, email-based order processing, and a dynamic admin panel for managing products.

---

## 🚀 Key Features

### 🔐 User Authentication (Login/Signup)
- Users can securely sign up and log in.
- Authentication is handled using **JSON Web Tokens (JWT)**.

### 🛒 Product Listings
- Products are displayed with **name**, **description**, and **price**.
- Public access: Anyone can browse products without logging in.

### 🛍️ Shopping Cart
- Users can add products to a shopping cart.
- The cart retains items until checkout, even if the session ends.

### 📧 Order Placement via Email (Nodemailer)
- Instead of using a payment gateway, orders are processed via **email**.
- On checkout, order details are sent using **Nodemailer**.
- Customers receive a confirmation email with purchase information.

### 🛠️ Admin Panel
- Admins can **add**, **edit**, and **delete** products.
- Admin privileges also include managing users and viewing orders.

---

## 🧰 Technology Stack

| Layer       | Tech Used                          |
|-------------|------------------------------------|
| **Frontend** | React.js                           |
| **Backend**  | Node.js, Express.js                |
| **Database** | MongoDB                            |
| **Authentication** | JSON Web Tokens (JWT)         |
| **Email**     | Nodemailer                        |

---

## 🔄 Workflow Overview

### 👥 User Interaction
- Browse product listings.
- Add desired items to the cart.
- Proceed to checkout and trigger email-based order placement.

### 🔐 Authentication
- Users register and log in with credentials.
- JWT ensures secure sessions and API access.

### 🛒 Cart Management
- Items in the cart are stored server-side.
- Linked to the authenticated user session.

### 📦 Order Processing
- Checkout triggers an email via **Nodemailer** with full order details.
- Email acts as a communication channel for confirming and managing orders.

### ⚙️ Admin Operations
- Admins can manage:
  - Product listings
  - User accounts
  - Orders

---

## 🌟 Future Enhancement

### 📌 Display Admin's Uploaded Products on Admin Page
Currently, the admin dashboard shows **all products**. We plan to enhance it by:
- Filtering and showing only the **products uploaded by the currently logged-in admin**.
- Improving product management and dashboard personalization.

---

## 🙌 Stay Connected

Check out more of my projects and updates:

<a href="https://app.daily.dev/basitjawad">
  <img src="https://api.daily.dev/devcards/v2/C2lHFtX2SEwDQ2IUdOsst.png?type=default&r=w0z" width="356" alt="Basit Jawad's Dev Card"/>
</a>

---
