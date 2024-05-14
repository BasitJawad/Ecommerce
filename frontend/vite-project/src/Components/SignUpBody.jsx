import React,{useState,useEffect} from 'react'
import Mobile from '../assets/Mobile.png'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import {useNavigate} from 'react-router-dom';
import axios from "axios"
import toast, { Toaster } from 'react-hot-toast';

const SignUpBody = () => {
    const navigate = useNavigate();
    const [signUp, setSignUp] = useState({
        name : "",
        email: "",
        password:""
    })

    const [errors, setErrors] = useState({});

    const handleInput =(e) => {
        const { name, value } = e.target;
        setSignUp((prev)=>{
            return {...prev, [name]: value}
        });
        setErrors((prev) => ({
            ...prev,
            [name]: '',
        }));
    }

    const validateForm = () => {
        let isValid = true;
        const newErrors = { ...errors };

        if (!signUp.name.trim()) {
            newErrors.name = 'Name is required';
            isValid = false;
        } else if (/\d/.test(signUp.name)) {
            newErrors.name = 'Name cannot contain numbers';
            isValid = false;
        }

        const gmailPattern = /^[a-zA-Z]+(\.[a-zA-Z]+)*[0-9]{0,9}@gmail\.com$/;
        if (!signUp.email.trim() || !gmailPattern.test(signUp.email)) {
            newErrors.email = 'Email must be a valid @gmail.com address';
            isValid = false;
        }

        if (!signUp.password.trim()) {
            newErrors.password = 'Password is required';
            isValid = false;
        }

        setErrors(newErrors);
        return isValid;
    };

    const Submit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            axios.post("/api/SignUp", signUp)
                .then((res) => {
                    console.log("Successfully sent the data to the server: " + JSON.stringify(res.data));
                    toast.success("Successfully Signed Up!");
                    navigate("/Login");
                })
                .catch((error) => {
                    if (error.response.status === 409) {
                        toast.error("User already signed up");
                    } else {
                        console.log("Error with code: " + error);
                    }
                });
        }
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
            <Toaster/>
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
                                    <TextField id="standard-basic-1"  fullWidth type='text' onChange={handleInput} name="name" label="Name" variant="standard" autoComplete='off' error={!!errors.name} helperText={errors.name} /><br />
                                    <TextField id="standard-basic-2"  fullWidth type='email' onChange={handleInput} name="email" label="Email" variant="standard" autoComplete='off' error={!!errors.email} helperText={errors.email} /><br />
                                    <TextField id="standard-basic-3"  fullWidth type='password' onChange={handleInput} name="password" label="Password" variant="standard" autoComplete='off' error={!!errors.password} helperText={errors.password} /><br />
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

export default SignUpBody;
