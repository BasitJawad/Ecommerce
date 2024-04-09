import Header from '../Components/Header';
import HomePageBody from '../Components/HomePageBody';
import Footer from '../Components/Footer';
import Circles from "../assets/Circles-menu-3.gif";
import "../index.css"
import { useState,useEffect } from 'react';

const HomePage =()=>{
    const [Loading,setLoading] = useState(true)

    useEffect(()=>{
        const timer = setTimeout(()=>{
            setLoading(false)
        },2000)

        return ()=>{clearTimeout(timer)}
    },[])
    return(
        <>

        {Loading ?
         <section className='Loader d-flex justify-content-center align-items-center min-vh-100 '>
            <div className='fw-bold display-1' id='load'>
                <img src={Circles} alt="" />
                </div>
                </section> 
                :
                 <>
                 <div className='position-sticky sticky-top'>
                    <Header/>
                    </div>
                     <HomePageBody/>
                      <Footer />
                       </>}
     
     </>
    )

}

export default HomePage