import React,{useState,useEffect} from 'react'
import Mobile from '../assets/Mobile.png'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import {useNavigate} from 'react-router-dom';
import axios from "axios"

const SignUpBody = () => {
    const navigate = useNavigate();
    const [signUp, setSignUp] = useState({
        name : "",
        email: "",
        password:""
    })
    const handleInput =(e) => {
        const value = e.target.value
        const name = e.target.name
        setSignUp((prev)=>{
            return {...prev, [name]: value}
        })
        console.log(signUp)
    }

    const Submit = (e) => {
        e.preventDefault();
        axios.post("/api/SignUp", signUp)
            .then((res) => {
                console.log("Successfully sent the data to the server: " + JSON.stringify(res.data));
                alert("Successfully Signed Up!");
                navigate("/Login");
            })
            .catch((error) => {
                if (error.response.status === 409) {
                    alert("User already signed up");
                } else {
                    console.log("Error with code: " + error);
                }
            });
    };
       
    const gotoLogin =()=>{
        navigate('/Login');
    }
    document.title = 'SignUp'
    const buttonColor={
        background:'#DB4444'
    };
  return (
    
    <>
    <div className="container-fluid ">
        <div className="row">

            <div className="col-lg-5 d-grid  justify-content-center mb-lg-5">
                <img src={Mobile} className="w-100"  alt="" />
            </div>
            
            <div className="col-lg-7 d-lg-flex justify-content-lg-center mt-lg-3 mb-md-3">
                <div className="SignUpForm ">

                    <form onSubmit={Submit} >
                        <div className="heading ">
                            <h2>Create an Account</h2>
                            <span><small>Enter your details below</small></span>
                        </div>
                        
                        <div className="inputBoxes">
                        <TextField id="standard-basic-1"  fullWidth type='text'     onChange={handleInput} name="name" label="Name" variant="standard" autoComplete='off'         /><br />
                        <TextField id="standard-basic-2"  fullWidth type='email'    onChange={handleInput} name="email" label="Email" variant="standard" autoComplete='off'        /><br />
                        <TextField id="standard-basic-3"  fullWidth type='password' onChange={handleInput} name="password" label="Password" variant="standard" autoComplete='off'  /><br />
                        <br />
                        <Button variant="contained" fullWidth style={buttonColor} type='submit'>Create Account</Button>
                        </div>
                    </form><br />
                    <span><small>Already have an account? <a href="Login" className='text-decoration-underline text-black'><span onClick={gotoLogin}>Login</span></a></small> </span>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default SignUpBody