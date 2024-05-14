// Header.jsx
import React, { useState } from 'react';
import { Navbar, Container, Nav, Form, FormControl, Button } from 'react-bootstrap';
import './Checkbox.css'; // Import CSS file for styling
import SearchIcon from '@mui/icons-material/Search';

const Header = ({onSearch,title}) => {
  const [isChecked, setIsChecked] = useState(false);
  const [searchResult, serSearchResult] = useState([]);

  const handleChange = (e) => {
    const searchQuery = e.target.value;
    onSearch(searchQuery);
  };  

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const handleLogout = () => {
    // Clear session token
    sessionStorage.removeItem('token');
    // Redirect to login page
    window.location.href = '/Login';
  };

  // console.log(props.product[0].productName)
  return (
    
    <Navbar bg="body-tertiary" className='shadow ' expand="lg">
      <Container >
        <Navbar.Brand href="#"><b>EXCLUSIVE</b></Navbar.Brand>
        <div>
          <input
            type="checkbox"
            id="checkbox"
            checked={isChecked}
            onChange={handleCheckboxChange}
          />
          <label htmlFor="checkbox" className="toggle">
            <div className="bars " id="bar1"></div>
            <div className="bars " id="bar2"></div>
            <div className="bars " id="bar3"></div>
          </label>
        </div>
        <Navbar.Collapse id="basic-navbar-nav" className={isChecked ? "show" : ""}>
          <Nav className="me-auto">
            {sessionStorage.getItem('token') ? (
              <Nav.Link variant="link" onClick={handleLogout} className='bg-danger rounded  rounded-4 logout-btn link-underline-opacity-10-hover'> <b className='text-light'> LogOut    </b></Nav.Link>
            ) : (
              <>
            <Nav.Link href="/" className="Same-btn rounded-4">        <b className='underline'> Home    </b> </Nav.Link>
            <Nav.Link href="/Products"className="Same-btn rounded-4"><b className='underline'> Products</b> </Nav.Link>
            <Nav.Link href="/About"className="Same-btn rounded-4">   <b className='underline'> About   </b> </Nav.Link>

              <Nav.Link href="/Login" className="Same-btn rounded-4 ">   <b className='underline'> Login  </b> </Nav.Link>
              <Nav.Link href="/SignUp" className="Same-btn rounded-4">   <b className='underline'> SignUp  </b> </Nav.Link>
              </>
            )}

          </Nav>

          {title === "ProductsPage" && (
            <Form className="d-flex">
              <FormControl type="search" placeholder="Search" className="me-2 border border-black " aria-label="Search" onChange={handleChange} />
            </Form>
          )}        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
