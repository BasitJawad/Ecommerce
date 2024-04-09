import React from 'react';
import ImageError from '../assets/3737258.jpg';
import Footer from '../Components/Footer'
import Header from '../Components/Header';
const NotSupported = () => {
  return (
    <>
    <Header/>
    <div className="container-fluid FullPage">
      <div className="row justify-content-center align-items-center">
        <div className="col-lg-6 col-md-8 col-sm-10 text-center">
          <img src={ImageError} className='error img-fluid' alt="Error" style={{ maxWidth: '100%', height: 'auto' }} />
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
}

export default NotSupported;
