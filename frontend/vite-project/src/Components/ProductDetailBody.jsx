import React from 'react';
import Button from '@mui/material/Button';
import { useLocation ,useNavigate } from 'react-router-dom';
// import "./ProductDetailPage.css"

const ProductDetailBody = () => {
  const location  = useLocation();
  const navigate = useNavigate();
  const { id, img, name, brand, description, amount, price } = location.state || {};

  const handleTransfer = ()=>{
    navigate('/Checkout',{
      state:{
        id:          id,
        img:         img, // Update from props.imgscr to props.picture
        name:        name,
        brand:       brand,
        price:        price * amount,
        amount:      amount,
        description: description
   
      }
    })
    console.log("Product ID : " ,id)
  }
  return (
    <div className="body ">
      <div className="container mt-5 ">
        <div className="row mt-5">
          <div className="col-lg-5 col-md-6 d-flex justify-content-center " style={{ scrollSnapAlign: 'start' }}>
            <img src={img} alt="Product" loading='lazy'  style={{ width: '100%', maxWidth: '300px' }} />
          </div>
          <div className="col-lg-7 col-md-6 d-flex justify-content-center align-items-start flex-column gap-3 shadow "style={{ scrollBehavior: 'smooth',scrollSnapAlign: 'start' }}>
            <div className="name"><h2>{name}</h2></div>
            <div className="id"><strong>Product ID : </strong><h6>{id}</h6></div>
            <div className="brand"><strong>Brand:</strong> {brand}</div>
            <div className="description text-center"><strong>Description:</strong> {description}</div>
            <div className="amount"><strong>Amount:</strong> {amount} items</div>
            <div className="price"><strong>Price:</strong> RS. {price}</div>
            <Button variant="contained" style={{ background: '#DB4444' }} className='mt-3 mb-2' onClick={handleTransfer}>
              <i className='fas fa-shopping-cart me-2'></i> Checkout
            </Button>
          </div>
        </div>
      </div>
    </div>
  );};

export default ProductDetailBody;
