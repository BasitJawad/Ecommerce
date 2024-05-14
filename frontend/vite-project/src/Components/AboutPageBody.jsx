import React from "react";
import MyAboutImg from "../assets/OIP.jpg";
import "./AboutUs.css";
import toast, { Toaster } from 'react-hot-toast';
import audioref from "../assets/mixkit-digital-quick-tone-2866.wav"
const AboutPageBody = () => {

  const audioRef = new Audio(audioref);
  const handleConnect = (event)=>{
    // event.preventDefault();
    if(event.target){
      toast.success("Followed",{icon: "👍"})
      audioRef.play()
      console.log("clicked")
    }else{
      console.log("Couldnt connect")
    }
  }
  document.title='About Us';
  return (
    <>
    <Toaster />
      <main className="min-vh-100">
        <section className="py-3 py-md-5 py-xl-8">
          <div className="container">
            <div className="row gy-3 gy-md-4 gy-lg-0 align-items-lg-center">
              <div className="col-12 col-lg-6 order-lg-2" >
                <img className="img-fluid rounded w-100 " src={MyAboutImg} alt="shopping"  />
              </div>
              <div className="col-12 col-lg-6 order-lg-1">
                <div className="row justify-content-xl-center">
                  <div className="col-12 col-xl-10" >
                    <h2 className="h1 mb-3">Why Choose Us?</h2>
                    <p className="lead fs-4 mb-3 mb-xl-5" >
                      With 2 years of experience and deep industry knowledge, we are your reliable partners in ecommerce development. We specialize in crafting seamless shopping experiences, from frontend design to backend optimization. Our team stays ahead of the curve, utilizing cutting-edge ecommerce technologies to drive growth and success for your online store.
                    </p>
                    <div className="d-flex align-items-center mb-3">
                      <div className="me-3 text-primary">
                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" className="bi bi-check-circle-fill" viewBox="0 0 16 16">
                          <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                        </svg>
                      </div>
                      <div>
                        <p className="fs-5 m-0">Our evolution procedure is driven by cutting-edge technologies and best practices in the ecommerce industry.</p>
                      </div>
                    </div>
                    <div className="d-flex align-items-center mb-3">
                      <div className="me-3 text-primary">
                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" className="bi bi-check-circle-fill" viewBox="0 0 16 16">
                          <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                        </svg>
                      </div>
                      <div>
                        <p className="fs-5 m-0">We consistently deliver services that exceed expectations, ensuring client satisfaction and project success.</p>
                      </div>
                    </div>
                    <div className="d-flex align-items-center mb-4 mb-xl-5">
                      <div className="me-3 text-primary">
                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" className="bi bi-check-circle-fill" viewBox="0 0 16 16">
                          <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                        </svg>
                      </div>
                      <div>
                        <p className="fs-5 m-0">Choose us to turn your ecommerce goals into reality and experience the difference firsthand.</p>
                      </div>
                    </div>
                    <button type="button" className="btn bsb-btn-2xl btn-outline-primary rounded-pill" onClick={handleConnect}>
                         <a href="https://linkedin.com/comm/mynetwork/discovery-see-all?usecase=PEOPLE_FOLLOWS&followMember=basit-jawad-734130272" target="_blank" className="text-dark text-decoration-none " >Connect with Us</a>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default AboutPageBody;
