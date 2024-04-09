import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import SignUpBody from '../Components/SignUpBody'
const SignUp = () => {
  return (
    <>
    <Header/>
    <div className="main mt-5">
    <SignUpBody/>
    </div>
    <div className="footer mt-5">
    <Footer/>
    </div>
    </>
  )
}

export default SignUp