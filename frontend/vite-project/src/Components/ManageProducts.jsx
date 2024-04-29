import React, { useState, useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';
import axios from 'axios';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
const ManageProducts = () => {
    const [show, setShow] = useState(false);
    const [products, setProducts] = useState([]);
    const token = sessionStorage.getItem('token');
    const navigate = useNavigate()
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('/api/ProductRetrieve');
                if (response.status === 200) {
                    setProducts(response.data.products);
                    setShow(true); // Set show state after successful data retrieval
                } else if (response.status === 204) {
                    alert(response.data);
                } else {
                    console.log("Something else happened");
                }
            } catch (error) {
                alert(error.message);
            }
        };

        if (token) {
            fetchData();
        }else{
            navigate('/Login')
        }
    }, [token,products]); // Make sure to include token as a dependency

    const handleDelete = async (productId) => {
        try {
            const response = await axios.delete(`/api/productsDelete/${productId}`);
            // Handle response as needed
            if(response.status === 200) {
               toast.success(response.data)
                console.log(response);
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
            <Toaster/>
            {show ? (
                <>
                    <Header />
                    <div className="container min-vh-100 ">
                        <table className="table mt-5 " style={{maxWidth:'100em',overflowX:'hidden'}}>
                            <thead className=''>
                                <tr className=' border border-black'>
                                    <th className=''><h5>Product Picture</h5></th>
                                    <th className=''><h5>Product Name   </h5></th>
                                    <th className=''><h5>Product Brand  </h5></th>
                                    <th className=''><h5>Product Price  </h5></th>
                                    <th className=''><h5>Amount         </h5></th>
                                    <th className=''><h5>Action         </h5></th>
                                </tr>
                            </thead>
                            <tbody className='' >
                                {products.map((product, index) => (
                                    <tr key={index} className=''>
                                        <td>
                                            <img src={`http://localhost:3000/public/uploads/${product.productPictures[0].image}`} style={{ width: '100px' }} alt="Product" />
                                        </td>
                                        <td>{product.productName}</td>
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
                <p className='text-center position-absolute' style={{left:'44%',top:'45%'}} ><h1> Loading...</h1></p>
            )}
        </>
    );
}

export default ManageProducts;
