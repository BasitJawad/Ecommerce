import React,{useState} from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import axios from "axios"
import toast, { Toaster } from 'react-hot-toast';
export const ResetBody = () => {

    const [reset,setReset] = useState("");

  document.title = 'Password Reset';
  const buttonColor={
    background:'#DB4444'
};

const handleInput = (e) => {
  const name = e.target.name
  const value = e.target.value 

  setReset(prev => ({
    ...prev,
    [name]: value
}));
}

const onSubmits = (e) => {
  e.preventDefault()
  axios.post('/api/reset',reset).then((res)=>{
    if(res.status ===200){
      toast('Request Submitted!', {
        icon: '📩',
      });
      navigate("/NewPasswordPage")
    }
  }).catch((err)=>{
    if(err.status ===401){
      toast('Record Not Found', {
        icon: '🪹',
      });
    }
    
  })


}

  return (
   <>
   <Toaster/>
   <div className="container min-vh-100 ">
    <div className="row vh-100">
      <div className="col d-lg-grid d-sm-grid align-content-lg-center m-auto align-content-sm-center justify-content-lg-center justify-content-sm-center">
          <form onSubmit={onSubmits}>
          <TextField id="standard-basic" fullWidth type='email' name='email' label="Email" onChange={handleInput} variant="standard" autoComplete='off'/>
          <br />
          <br />
          <Button type='submit' variant="contained" fullWidth style={buttonColor} >Reset Password</Button>
          </form>
          <br />
          <p>Remember password? <a href="Login" className='text-black'>Login</a> </p>
      </div>
    </div>
   </div>
   </>
  )
}
