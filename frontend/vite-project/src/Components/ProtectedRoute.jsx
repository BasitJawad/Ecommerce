import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import AdminPage from '../Pages/AdminPage';
import Login from '../Pages/Login';

const ProtectedRoute = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const adminName = location.state?.name 
  const token = sessionStorage.getItem('token');
  useEffect(() => {
    const fetchToken = () => {
      if (token) {
        setLoggedIn(true);
        console.log("Admin Name: " + adminName);
      } else {
        sessionStorage.clear();
        setLoggedIn(false);
        navigate('/Login');
      }
    };

    fetchToken();
  }, [navigate, adminName]);

  return loggedIn ? <AdminPage   /> : <Login />;
};

export default ProtectedRoute;
