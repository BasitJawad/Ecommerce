import React, { useState, useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';
import axios from 'axios';
import Button from '@mui/material/Button';
import { useLocation, useNavigate } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';

const ManageProducts = () => {
    const [show, setShow] = useState(false);
    const [products, setProducts] = useState([]);
    const token = sessionStorage.getItem('token');
    const navigate = useNavigate();
    const location = useLocation();
    const email = location.state?.email;

    useEffect(() => {
        const fetchData = async () => {
            try {
                if (!email) throw new Error("Email not found in location state");
                const response = await axios.get('/api/ProductRetrieve');
                if (response.status === 200) {
                    const fetchedProducts = response.data.products || [];
                    const userProducts = fetchedProducts.filter(product => product.UploaderEmail === email);
                    if(email==="muhbasit235@gmail.com"){
                        setProducts(fetchedProducts)
                    }else{
                        setProducts(userProducts);
                    }
                    setShow(true);
                } else if (response.status === 204) {
                    alert("No data was retrieved");
                } else {
                    console.log("Something else happened");
                }
            } catch (error) {
                alert(error.message);
            }
        };

        if (token) {
            fetchData();
        } else {
            navigate('/Login');
        }
    }, [token, email, navigate]);

    const handleDelete = async (productId) => {
        try {
            const response = await axios.delete(`/api/productsDelete/${productId}`);
            if (response.status === 200) {
                toast.success(response.data);
                setProducts(products.filter(product => product._id !== productId));
            }
        } catch (error) {
            alert(error.message);
        }
    };

    const buttonColor = {
        background: '#DB4444',
        width: '50%'
    };

    return (
        <>
            <Toaster />
            {show ? (
                <>
                    <Header />
                    <div className="container min-vh-100">
                        <table className="table mt-5" style={{ maxWidth: '100em', overflowX: 'hidden' }}>
                            <thead>
                                <tr className='border border-black'>
                                    <th><h5>Product Picture</h5></th>
                                    <th><h5>Product Name</h5></th>
                                    <th><h5>Product Owner</h5></th> 
                                    <th><h5>Product Brand</h5></th>
                                    <th><h5>Product Price</h5></th>
                                    <th><h5>Amount</h5></th>
                                    <th><h5>Action</h5></th>
                                </tr>
                            </thead>
                            <tbody>
                                {products.map((product, index) => (
                                    <tr key={index}>
                                        <td>
                                            <img src={`http://localhost:3000/uploads/${product.productPictures[0].image}`} style={{ width: '100px' }} alt="Product" />
                                        </td>
                                        <td>{product.productName}</td>
                                        <td>{product.UploaderEmail}</td>
                                        <td>{product.productBrand}</td>
                                        <td>{product.productPrice}</td>
                                        <td>{product.productAmount}</td>
                                        <td>
                                            <Button
                                                variant="contained"
                                                style={buttonColor}
                                                onClick={() => handleDelete(product._id)}
                                            >
                                                Delete
                                            </Button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <Footer />
                </>
            ) : (
                <p className='text-center position-absolute fs-1 fw-bold' style={{ left: '44%', top: '45%' }}>
                    Loading...
                </p>
            )}
        </>
    );
};

export default ManageProducts;
