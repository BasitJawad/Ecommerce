import React, { useState } from 'react';
import axios from 'axios';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useLocation, useNavigate } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';

const CheckoutBody = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    emailAddress: '',
    homeAddress: '',
    phoneNumber: ''
  });

  const [errors, setErrors] = useState({});

  const { id, img, name, brand, description, amount, price,email } = location.state || {};

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const validateForm = () => {
    const newErrors = {};

    if (!form.firstName) {
      newErrors.firstName = 'First Name is required';
    }

    if (!form.lastName) {
      newErrors.lastName = 'Last Name is required';
    }

    const gmailPattern =  /^[a-zA-Z]+(\.[a-zA-Z]+)*[0-9]{0,9}@gmail\.com$/;;
    if (!form.emailAddress || !gmailPattern.test(form.emailAddress)) {
      newErrors.emailAddress = 'Email must be a valid @gmail.com address';
    }

    if (!form.homeAddress) {
      newErrors.homeAddress = 'Home Address is required';
    }

    const phoneRegex = /^\d{11}$/;
    if (!form.phoneNumber || !phoneRegex.test(form.phoneNumber) || form.phoneNumber.startsWith('+92')) {
      newErrors.phoneNumber = 'Valid 11-digit Phone Number is required and should not start with +92';
    }
    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleClick = () => {
    if (!validateForm()) {
      toast("Please fill all fields correctly", { icon: '🔌' });
      return;
    }

    const formData = {
      ...form,
      product: {
        id,
        img,
        name,
        brand,
        description,
        amount,
        price,
        email
      }
    };

    axios.post('/api/SendToMail', formData)
      .then((res) => {
        console.log('Data sent successfully', res.data);
        toast('Product Purchased!', { icon: '🎁' });
        setTimeout(() => navigate('/Products'), 2000);
      })
      .catch((err) => {
        console.log('Data send failed', err);
        toast("Failed to send data", { icon: '🔌' });
      });
  };

  const buttonColor = { background: '#DB4444' };

  return (
    <>
      <Toaster />
      <div className="container">
        <div className="row min-vh-100">
          <div className="col-12 col-md-6 d-flex justify-content-center align-items-center">
            <div className="col">
              <ul className="list-unstyled">
                <li><img src={img} style={{ aspectRatio: "3/4", width: "32%" }} alt="Product" /></li>
                <li className='pt-4' style={{ lineHeight: "20px" }}>
                  <h6 style={{ color: 'red' }}>Product ID: <small style={{ color: 'black' }}>{id}</small></h6>
                </li>
                <li><h6 style={{ color: 'red' }}>Product Name: <small style={{ color: 'black' }}>{name}</small></h6></li>
                <li><h6 style={{ color: 'red' }}>Product Brand: <small style={{ color: 'black' }}>{brand}</small></h6></li>
                <li><h6 style={{ color: 'red' }}>Product Amount: <small style={{ color: 'black' }}>{amount}</small></h6></li>
                <li><h6 style={{ color: 'red' }}>Product Price: <small style={{ color: 'red' }}>{price}</small></h6></li>
                <li><h6 style={{ color: 'red' }}>Product Description: <small style={{ color: 'black' }}>{description}</small></h6></li>
              </ul>
            </div>
          </div>
          <div className="col-12 col-md-6 d-flex justify-content-center align-items-center">
            <div className="col form shadow m-5 p-5">
              <TextField
                required fullWidth name="firstName" onChange={handleChange}
                label="Enter your First Name" variant="standard"
                error={!!errors.firstName} helperText={errors.firstName}
              />
              <TextField
                required fullWidth name="lastName" onChange={handleChange}
                label="Enter your Last Name" variant="standard"
                error={!!errors.lastName} helperText={errors.lastName}
              />
              <TextField
                required fullWidth name="emailAddress" onChange={handleChange}
                label="Enter your Email Address" variant="standard"
                error={!!errors.emailAddress} helperText={errors.emailAddress}
              />
              <TextField
                required fullWidth name="homeAddress" onChange={handleChange}
                label="Enter your Home Address with City and District" variant="standard"
                error={!!errors.homeAddress} helperText={errors.homeAddress}
              />
              <TextField
                required fullWidth name="phoneNumber" onChange={handleChange}
                label="Enter your Mobile Number" variant="standard"
                error={!!errors.phoneNumber} helperText={errors.phoneNumber}
              />
              <Button
                type="submit" variant="contained" fullWidth
                style={buttonColor} onClick={handleClick}
              >
                Checkout
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CheckoutBody;