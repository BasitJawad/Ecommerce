// Routing.jsx
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from '../Pages/HomePage';
import About from '../Pages/About';
import NotSupported from '../Pages/404';
import SignUp from '../Pages/SignUp';
import Login from '../Pages/Login';
import ResetPage from '../Pages/ResetPage';
import Products from '../Pages/Products';
import ProductDetail from '../Pages/ProductDetail';
import PasswordChange from "../Components/ResetPassword/PasswordChange";
import ProtectedRoute from './ProtectedRoute';
import ManageProducts from './ManageProducts';
import Protected from './Protected';
import Checkout from '../Pages/Checkout'
const Routing = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='/About' element={<About />} />
                <Route path='/SignUp' element={<SignUp />} />
                <Route path='/Login' element={<Login />} />
                <Route path='/ResetPage' element={<ResetPage />} />
                <Route path='/Products' element={<Products />} />
                <Route path='/ProductDetail' element={<ProductDetail />} />
                <Route path='/PasswordChange/:token' element={<PasswordChange />} />
                <Route path='/ProtectedRoute' element={<ProtectedRoute />} />
                <Route path='/ManageProducts' element={<Protected Component={ManageProducts} />} />
                <Route path='/Checkout' element={<Checkout />} />
                <Route path='/*' element={<NotSupported />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Routing;
