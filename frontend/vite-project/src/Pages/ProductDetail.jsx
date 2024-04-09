import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import ProductDetailBody from '../Components/ProductDetailBody'
const ProductDetail = () => {
  return (
<>
<Header/>
<div className="spacing pb-5">
<ProductDetailBody/>
</div>
<div className="spacing mt-5 pt-5">
<Footer/>
</div>
</>

    )
}

export default ProductDetail