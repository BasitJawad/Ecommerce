import React, { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Header from '../Header';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const PasswordChange = () => {
    const { token } = useParams();
    const [newPassword, setNewPassword] = useState({
        NewPassword: '',
        ConfirmPassword: ''
    });
    useEffect(() => {
        // Verify token and fetch user data
        try {
            axios.get(`http://localhost:5173/PasswordChange/${token}`).then((res)=>{
                if(res.status === 200){
                    console.log(res.status)
                    console.log(res.data.token)
                }else{
                    console.log("Token fetch failed")
                }
            })
        } catch (error) {
            console.log("Networking error: " + error)
        }
    }, [token]); // Include token in the dependency array
    

    const handleInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setNewPassword((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    const Submit = (e) => {
        e.preventDefault();
        try {
            axios.post(`/api/v1/resetPassword/${token}`, newPassword).then((res) => {
                if (res.status === 201) {
                    alert(res.data);
                } else {
                    alert('Could not Reset Password');
                }
            });
        } catch (error) {
            alert('Password Reset Failed or : ' + error.message);
        }
    };

    const buttonColor = {
        background: '#DB4444',
        width: '50%'
    };

    return (
        <>
            <Header />
            <div className="container-fuild">
                <div className="row d-flex justify-content-center mt-5 pt-5 ">
                    <div className="col-5 col-sm-5 mt-5 text-center shadow p-5 ">
                        <form onSubmit={Submit}>
                            <header>
                                <h2>Password Reset </h2>
                            </header>
                            <TextField
                                id="standard-basic-2"
                                className="text-center"
                                onChange={handleInput}
                                fullWidth
                                type="password"
                                name="NewPassword"
                                label="New Password"
                                variant="standard"
                            />
                            <br />
                            <TextField
                                id="standard-basic-3"
                                className="text-center"
                                onChange={handleInput}
                                fullWidth
                                type="password"
                                name="ConfirmPassword"
                                label="Confirm Password"
                                variant="standard"
                            />
                            <br />
                            <br />
                            <Button variant="contained" type="submit" style={buttonColor} className="">
                                Submit
                            </Button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PasswordChange;
