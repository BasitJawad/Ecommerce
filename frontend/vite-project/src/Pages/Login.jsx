import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import LoginBody from '../Components/LoginBody'
const Login = () => {
  
  return (
    <>
    <Header/>
    <div className="main mt-5">
    <LoginBody />
    </div>
    <div className="footer mt-5">
    <Footer/>

    </div>
    </>
  )
}

export default Login
