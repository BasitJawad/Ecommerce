import React from 'react';
import { useNavigate } from 'react-router-dom';
import Shoe1 from "../assets/pair-trainers.jpg";
import Shoe2 from "../assets/one-black-sneaker-shoe-isolated-white.jpg";
import Clothes from "../assets/online-fashion-1.jpg";
import watch from "../assets/watch.jpg"
import Play from "../assets/play.png"
import Safety from "../assets/Security.png"
import Delivery from "../assets/red-delivery.jpg"
import Services from "../assets/Services.png"

import '../Components/HomePage.css';
import './HomePageStyling.css';

const HomePageBody = () => {

  const navigate = useNavigate();  
  const Shop = () => {
    navigate("./Products");
  };
  
  const ServiceCard = ({ title, description, logo }) => (
    <div className="col-md-4 col-lg-4 mb-5">
      <div className="card h-100 border-0 shadow service-card">
        <img src={logo} className="card-img-top mx-auto mt-4" alt={title} style={{ width: '80px' }} />
        <div className="card-body text-center">
          <h5 className="card-title fw-bold">{title}</h5>
          <p className="card-text">{description}</p>
        </div>
      </div>
    </div>
  );
    return (
    <>


<div data-aos="fade-left"
     data-aos-anchor="#example-anchor"
     data-aos-offset="500"
     data-aos-duration="500">

       <section className='min-vh-100 pb-5 section-bg-1 mt-5 shadow border-dark' >
        <div className="container " >
          <div className="row mb-5 " style={{ height: "30rem" }}>
            <div className="col-lg-5 col-md-12 details d-flex flex-column gap-3 justify-content-center align-items-start">
              <div className="heading "><h1 className='fw-bold'>Special Offer Today <br />Men Best Shoes Collection</h1></div>
              <div className="content-description fs-5"><p>We drive new Collection and hot collection <br />from our factory to your doorstep</p></div>
              <div className="rating"><span className='fw-bold'>Our Rating</span><br />
                <i className='text-warning fas fa-star'></i>
                <i className='text-warning fas fa-star'></i>
                <i className='text-warning fas fa-star'></i>
                <i className='text-warning fas fa-star'></i>
                <i className="text-warning fas fa-star-half-alt"></i>
              </div>
              <div><button className='fw-bold fs-5 btnShop' onClick={Shop}>Shop Now</button></div>
            </div>
            <div className="col-lg-7 col-md-12" >
              <div id="shoesCarousel" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                  <div className="carousel-item active" data-bs-interval="2000">
                    <img src={Shoe1} className="d-block w-100 img" alt="..." loading='lazy'/>
                  </div>
                  <div className="carousel-item" data-bs-interval="2000">
                    <img src={Shoe2} className="d-block w-100 img" alt="..." loading='lazy'/>
                  </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#shoesCarousel" data-bs-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#shoesCarousel" data-bs-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      </div>

{/* 1st */}

<section className='fixedImage mt-5 pt-5 d-flex justify-content-center align-items-center'style={{height:"15rem"}}>
      <div className="backimg "><h2 className='display-1 fw-bold ' >Clothes</h2></div>
</section>

{/*  2nd  */}
    <div data-aos="fade-right">
      <section className='min-vh-100 pb-5 section-bg-3 shadow'>
        <div className="container">
          <div className="row mt-5 mb-5" style={{ height: "30rem" }}>
            <div className="col-lg-7 col-md-12 details d-flex flex-column gap-4 justify-content-center align-items-start">
            <div id="clothesCarousel" className="carousel slide " data-bs-ride="carousel">
            <div className="slider">
                <img src={Clothes} className='w-100 mt-5' alt="" loading='lazy' />
              </div>
              </div>

            </div>

            <div className="col-lg-5 col-md-12 ">
            <div className="heading ms-2 "><h1 className='fw-bold'>Special Offer Today <br />Best Garments Collection</h1></div>
                <div className="content-description fs-5 ms-2 mt-2"><p>We drive new Collection and hot collection <br />from our factory to your doorstep</p></div>
                <div className="rating ms-2 mt-2"><span className='fw-bold'>Our Rating</span><br />
                  <i className='text-warning fas fa-star ms-2'></i>
                  <i className='text-warning fas fa-star ms-2'></i>
                  <i className='text-warning fas fa-star ms-2'></i>
                  <i className='text-warning fas fa-star ms-2'></i>
                  <i className="text-warning fas fa-star-half-alt ms-2"></i>
                </div>
                <div><button className='fw-bold fs-5 btnShop ms-3 mt-4' onClick={Shop}>Shop Now</button></div>
            </div>
          </div>
        </div>
      </section>
      {/* 3rd */}
      <section className='fixedImage mt-5 pt-5  d-flex justify-content-center align-items-center' style={{height:"15rem"}}>
      <div className="backimg "><h2 className='display-1 fw-bold' >Electronics</h2></div>
</section>
</div>

    <div data-aos="zoom-out-up">
      <section className='min-vh-100 mb-5 pb-5 section-bg-5 mt-2 shadow'>
      <div className="container mt-5">
          <div className="row mt-5 mb-5" style={{ height: "30rem" }}>
            <div className="col-lg-5 col-md-12 details d-flex flex-column gap-3 justify-content-center align-items-start">
              <div className="heading "><h1 className='fw-bold'>Special Offer Today <br />High Quality Electronics</h1></div>
              <div className="content-description fs-5"><p>We drive new Collection and hot collection <br />from our factory to your doorstep</p></div>
              <div className="rating"><span className='fw-bold'>Our Rating</span><br />
                <i className='text-warning fas fa-star'></i>
                <i className='text-warning fas fa-star'></i>
                <i className='text-warning fas fa-star'></i>
                <i className='text-warning fas fa-star'></i>
                <i className="text-warning fas fa-star-half-alt"></i>
              </div>
              <div><button className='fw-bold fs-5 btnShop' onClick={Shop}>Shop Now</button></div>
            </div>
            <div className="col-lg-7 col-md-12 pt-3">
              <div id="ElectronicCarousel" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                  <div className="carousel-item active" data-bs-interval="2000">
                    <img src={watch} className="d-block w-100 img" alt="..." loading='lazy' />
                  </div>
                  <div className="carousel-item" data-bs-interval="2000">
                    <img src={Play} className="d-block w-100 img img1" alt="image" loading='lazy' />
                  </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#ElectronicCarousel" data-bs-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#ElectronicCarousel" data-bs-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </div>
          </div>
        </div>

      </section>
      </div>
{/* Our Services */}
<section className='fixedImage mt-5 pt-5  d-flex justify-content-center align-items-center'style={{height:"15rem"}}>
      <div className="backimg "><h2 className='display-1 fw-bold' >Our Services</h2></div>
</section>


<div data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine">

      
      <section className="section-bg-7 shadow">
      <div className="container py-5 ">
          <div className="row text-center mt-5">
            <ServiceCard
              title="Protection"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
              logo={Services} // Use imported image for Protection
            />
            <ServiceCard
              title="Reliability"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
              logo={Safety} // Use imported image for Reliability
            />
            <ServiceCard
              title="Delivery"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
              logo={Delivery} // Use imported image for Delivery
            />
          </div>
        </div>
      </section>
      </div>
    </>
  );
}

export default HomePageBody;











