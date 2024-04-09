import React from "react";
import MyAboutImg from "../assets/attractive-woman.png";
import "./AboutUs.css";

const AboutPageBody = () => {
  document.title='About Us';
  return (
    <>
      <main className="min-vh-100">
        <section className="py-3 py-md-5 py-xl-8">
          <div className="container">
            <div className="row gy-3 gy-md-4 gy-lg-0 align-items-lg-center">
              <div className="col-12 col-lg-6 order-lg-2" >
                <img className="img-fluid rounded " loading="lazy" src={MyAboutImg} alt="Attractive Woman"  />
              </div>
              <div className="col-12 col-lg-6 order-lg-1">
                <div className="row justify-content-xl-center">
                  <div className="col-12 col-xl-10" >
                    <h2 className="h1 mb-3">Why Choose Us?</h2>
                    <p className="lead fs-4 mb-3 mb-xl-5" >
                      With 2 years of experience and deep industry knowledge, we are your reliable Professional MERN Developers. We excel in both frontend and backend development, utilizing the latest technologies to craft robust and scalable web applications. Our team is constantly pushing the boundaries to stay ahead of the curve in the ever-evolving IT landscape.
                    </p>
                    <div className="d-flex align-items-center mb-3">
                      <div className="me-3 text-primary">
                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" className="bi bi-check-circle-fill" viewBox="0 0 16 16">
                          <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                        </svg>
                      </div>
                      <div>
                        <p className="fs-5 m-0">Our evolution procedure is driven by cutting-edge technologies and best practices in the industry.</p>
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
                        <p className="fs-5 m-0">Choose us to turn your objectives into reality and experience the difference firsthand.</p>
                      </div>
                    </div>
                    <button type="button" className="btn bsb-btn-2xl btn-outline-primary rounded-pill">
                         <a href="mailto:muhbasit235@gmail.com" className="text-dark text-decoration-none ">Connect Now</a>
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