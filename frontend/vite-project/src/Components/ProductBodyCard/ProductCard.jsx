import React from 'react';
import TextField from "@mui/material/TextField";
import Button from '@mui/material/Button';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ProductCard = (props) => {
  const navigate = useNavigate(); 
  console.log(props)
  const newPrice = props.price || 0; // Default price to 0 if not provided
  const [amount, setAmount] = useState(1);

  const handleAmountChange = (e) => {
    const val = parseInt(e.target.value);
    const maxAmount = props.amount ; // Use props.amount as the maximum allowed value
    console.log(maxAmount)
    if (!isNaN(val) && val > 0 && val <= maxAmount) {
      setAmount(val);
    } else if (val > maxAmount) {
      setAmount(maxAmount); // Limit the amount to props.amount if it exceeds
    } else {
      setAmount(1); // Reset to 1 for invalid or negative values
    }
  };
  
  const handleAddToCart = () => {
    navigate("/ProductDetail", {
      state: {
        id: props.id,
        img: ImageURL, // Update from props.imgscr to props.picture
        name: props.name,
        brand: props.brand,
        price: newPrice * amount,
        amount: amount,
        description: props.desc,
        email: props.email
      }
    });
    console.log("Product ID : ", props.id)
  };

  const ImageURL = `http://localhost:3000/uploads/${props.URL}`;
  return (
    <div className="container p-5">
      <div className="card shadow" style={{ width: '18rem' }}>
        <img src={ImageURL} className="card-img-top p-1" alt="Product" loading='lazy' style={{ width: '100%', height: 'auto' }}/>
        <div className="card-body">
          <div className="row">
            <div className="col-10">
              <input type="hidden" name="" value={props.id} />
              <h4 className="card-title">{props.name}</h4>
              <h5 className="card-title text-center text-danger ms-5">{props.brand}</h5>
            </div>
          </div>
          <div className="row">
            <div className="col-4">
              <TextField
                type="number"
                label="Quantity"
                variant="outlined"
                size="small"
                value={amount}
                onChange={handleAmountChange}
                sx={{ mt: 0, mb: 2, mx: 1, width: '80px' }} // custom styles for TextField
              />
            </div>
            <div className="col-8">
              <h5 className='ms-3 mt-1 text-danger'> Rs {newPrice * amount}</h5>
            </div>
          </div>
          <div className="row">
            <div className="col-8 d-flex justify-content-center ms-4">
              <Button variant="contained" style={{ background: 'green' }} onClick={handleAddToCart} className='mb-3'>Buy Now</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
