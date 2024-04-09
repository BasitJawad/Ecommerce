import React, { useState } from 'react';
import Mobile from '../assets/Mobile.png';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import axios from "axios";
import { useNavigate } from 'react-router-dom';

const LoginBody = () => {
    const navigate = useNavigate();
    const [login, setLogin] = useState({
        email: "",
        password: ""
    });

    const handleInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setLogin(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const SubmitLogin = (e) => {
        e.preventDefault();
        axios.post("/api/Login", login)
            .then((res) => {
                if (res.status === 200 && res.data.token) {
                    const token = res.data.token;
                    console.log("Token:", token);
                    // Set token in cookie with expiration time of 1 hour
                    // Set token in sessionStorage
                    sessionStorage.setItem('token', token);
                    navigate('/ProtectedRoute',{
                        state: {
                            name:res.data.name
                        }
                    })
                    alert("Logged In");
                } else {
                    console.log("Token not found in response");
                    alert("Not an authorized user");
                }
            })
            .catch((err) => {
                console.log("Error with code: ", err);
                alert("Not an authorized user");
            });
    };

    document.title = 'Login';
    const buttonColor = {
        background: '#DB4444',
        width: '50%'
    };

    return (
        <>
            <div className="container-fluid ">
                <div className="row">
                    <div className="col-lg-5 d-grid justify-content-center mb-lg-5">
                        <img src={Mobile} className="w-100" alt="" />
                    </div>
                    <div className="col-lg-7 d-lg-flex justify-content-lg-center mt-lg-3 mb-md-3">
                        <div className="LogInForm">
                            <form onSubmit={SubmitLogin}>
                                <div className="heading">
                                    <h2>Login to Exclusive</h2>
                                    <span><small>Enter your details below</small></span>
                                </div>
                                <div className="inputBoxes">
                                    <TextField id="standard-basic-1" onChange={handleInput} fullWidth type='email' placeholder='Enter your email' name='email' label="Email" variant="standard" autoComplete='off' /><br />
                                    <TextField id="standard-basic-2" onChange={handleInput} fullWidth type='password' placeholder='Enter your password' name='password' label="Password" variant="standard" autoComplete='off' /><br />
                                    <br />
                                    <Button variant="contained" type='submit' style={buttonColor} >Login</Button>
                                </div>
                            </form>
                            <br />
                            <span><small>Forgot password? <a href="ResetPage" className='text-decoration-underline text-black'>Reset Here</a></small> </span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default LoginBody;
