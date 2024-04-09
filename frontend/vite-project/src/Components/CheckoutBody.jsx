import React, { useState } from 'react';
import axios from 'axios';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useLocation, useNavigate } from 'react-router-dom';

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

  const { id, img, name, brand, description, amount, price } = location.state || {};

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleClick = () => {
    const formData = {
      ...form,
      product: {
        id,
        img: img,
        name: name,
        brand: brand,
        description: description,
        amount: amount,
        price: price
      }
    };

    axios
      .post('/api/SendToMail', formData)
      .then((res) => {
        console.log('Data sent successfully', res.data);
        alert(res.data.message);

        // Navigate to ProductPage after 2 seconds
        setTimeout(() => {
          navigate('/Products');
        }, 2000);
      })
      .catch((err) => {
        console.log('Data send failed', err);
        alert(err.data.message);
      });
  };

  const buttonColor = {
    background: '#DB4444'
  };

  return (
    <>
      <div className="container">
        <div className="row min-vh-100">
          <div className="col-12 d-flex justify-content-center align-items-center">
            <div className="col-6">
              <ul className="list-unstyled">
                <li>
                  <img src={img} className="w-50" alt="Product" />
                </li>
                <li>
                  <h2>
                    Product ID: <strong style={{ color: 'red' }}>{id}</strong>{' '}
                  </h2>{' '}
                </li>
                <li>
                  <h2>
                    Product Name: <strong style={{ color: 'red' }}>{name}</strong>{' '}
                  </h2>{' '}
                </li>
                <li>
                  <h2>
                    Product Brand: <strong style={{ color: 'red' }}>{brand}</strong>{' '}
                  </h2>{' '}
                </li>
                <li>
                  <h2>
                    Product Description: <strong style={{ color: 'red' }}>{description}</strong>{' '}
                  </h2>{' '}
                </li>
                <li>
                  <h2>
                    Product Amount: <strong style={{ color: 'red' }}>{amount}</strong>{' '}
                  </h2>{' '}
                </li>
                <li>
                  <h2>
                    Product Price: <strong style={{ color: 'red' }}>{price}</strong>{' '}
                  </h2>{' '}
                </li>
              </ul>
            </div>
            <div className="col-6 form d-flex flex-column gap-3 shadow m-5 p-5">
              <TextField
                id="standard-basic-1"
                required
                fullWidth
                name="firstName"
                onChange={handleChange}
                label="Enter your First Name"
                variant="standard"
              />
              <TextField
                id="standard-basic-2"
                required
                fullWidth
                name="lastName"
                onChange={handleChange}
                label="Enter your Last Name"
                variant="standard"
              />
              <TextField
                id="standard-basic-3"
                required
                fullWidth
                name="emailAddress"
                onChange={handleChange}
                label="Enter your Email Address"
                variant="standard"
              />
              <TextField
                id="standard-basic-4"
                required
                fullWidth
                name="homeAddress"
                onChange={handleChange}
                label="Enter your Home Address with City and District"
                variant="standard"
              />
              <TextField
                id="standard-basic-5"
                required
                fullWidth
                name="phoneNumber"
                onChange={handleChange}
                label="Enter your Mobile Number"
                variant="standard"
              />

              <Button
                type="submit"
                variant="contained"
                fullWidth
                style={buttonColor}
                onClick={handleClick}
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
