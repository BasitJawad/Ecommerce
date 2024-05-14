// Products.jsx

import React, { useEffect, useState, useCallback } from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import SideBar from '../Components/SideBar';
import ProductCard from '../Components/ProductBodyCard/ProductCard';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import axios from "axios";
import toast, { Toaster } from 'react-hot-toast';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedPrice, setSelectedPrice] = useState(100000);
  const [brands, setBrands] = useState("");
  const [currentPage, setCurrentPage] = useState(1); // Initialize to 1
  const [itemsPerPage] = useState(9);
  const [searchQuery, setSearchQuery] = useState(""); // State for search query

  const handlePriceChange = useCallback((price) => {
    setSelectedPrice(price);
  }, []);

  const handleBrandSelection = useCallback((brand) => {
    setBrands(brand);
  }, []);

  useEffect(() => {
    axios.get('/api/ProductRetrieve')
      .then((res) => {
        if (res.status === 200) {
          setProducts(res.data.products);
        } else if (res.status === 204) {
          toast.error("No products available",{
            icon:"🛒"
          });
        } else {
          console.log("Something else happened");
        }
      })
      .catch((error) => {
        alert(error.message);
      });
  }, []);

  useEffect(() => {
    const filteredByPrice = products.filter(product => product.productPrice <= selectedPrice);
    const filteredByBrand = brands ? filteredByPrice.filter(product => product.productBrand === brands) : filteredByPrice;
    const filteredBySearch = searchQuery ? filteredByBrand.filter(product => product.productName.toLowerCase().includes(searchQuery.toLowerCase())) : filteredByBrand; // Filter by search query
    setFilteredProducts(filteredBySearch);
    
  }, [selectedPrice, brands, searchQuery, products]);

  const totalProductsCount = filteredProducts.length;
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredProducts.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };
  document.title = "ProductsPage"
  const titleOfPage = document.title

  return (
    <>
    <Toaster />
    <Header onSearch={setSearchQuery} title={titleOfPage} />
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-2 col-md-2">
            <SideBar onPriceChange={handlePriceChange} onBrandChange={handleBrandSelection} />
          </div>
          <div className="col-lg-10 col-md-10 pro min-vh-100">
            {currentItems.length > 0  ? (
              currentItems.map((product, id) => (
                <div key={id} className="content col-lg-3 col-md-3 d-inline-flex ms-5 mt-4">
                  <ProductCard
                    URL={product.productPictures[0].image}
                    id={product._id}
                    name={product.productName}
                    brand={product.productBrand}
                    desc={product.productDescription}
                    price={product.productPrice}
                    amount={product.productAmount}
                    email={product.UploaderEmail}
                  />
                </div>
              ))
            ) : (
              <div className="content col-lg-12 col-md-12 text-center mt-4">
                <h2 className='text-center mt-5'>No Product Found</h2>
              </div>
            )}
          </div>
        </div>
      </div>
      <Stack spacing={2}>
        <Pagination count={Math.ceil(totalProductsCount / itemsPerPage)} shape="rounded" className='d-flex justify-content-center mb-2' onChange={handlePageChange} />
      </Stack>

      <div className="footer mt-5 pt-5">
        <Footer />
      </div>
    </>
  );
};

export default Products;
