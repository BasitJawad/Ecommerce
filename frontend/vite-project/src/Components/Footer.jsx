import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <>
      <footer className='container-fluid row bg-dark m-auto overflow-x-hidden '>
        <div className="col-12 d-md-flex d-sm-flex m-4">
          <div className="col-md-3 col-sm-6 text-white text-wrap">
            <ul className='list-unstyled'>
              <li><h4>EXCLUSIVE</h4></li>
              <li><h6>SUBSCRIBE</h6></li>
              <li><small>Get 10% off of <br />your first order</small></li>
            </ul>
          </div>
          <div className="col-md-3 col-sm-6 text-white text-wrap">
            <ul className='list-unstyled'>
              <li><h4>Support</h4></li>
              <li><span><small>KPK Mardan AWKUM</small></span></li>
              <li><small>muhbasit235@gmail.com</small></li>
              <li><small className='text-white-50'>+92 3035243493</small></li>
            </ul>
          </div>
          <div className="col-md-3 col-sm-6 text-white text-wrap">
            <ul className='list-unstyled'>
              <li><h4>Quick Links</h4></li>
              <li><span><small>Privacy Policy</small></span></li>
              <li><small>Terms of use</small></li>
              <li><small>FAQS</small></li>
              <li><small>Contact</small></li>
            </ul>
          </div>
          <div className="col-md-3 col-sm-6 text-white">
            <ul className='list-unstyled'>
              <li><h4>Social Media</h4></li>
              <li><FontAwesomeIcon icon={faFacebookF} /><span className="ms-2">Facebook</span></li>
              <li><FontAwesomeIcon icon={faInstagram} /><span className="ms-2">Instagram</span></li>
              <li><FontAwesomeIcon icon={faLinkedinIn} /><span className="ms-2">Linkedln</span></li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer;
