import React, { useState,useEffect } from 'react'
import '../Components/Sidebar.css'
// import categoryList from "./categoryList"
const SideBar = ({onPriceChange,onBrandChange}) => {

    // useStates 
const [price , setPrice]= useState(0);
const [category, setCategory] = useState(false)
const [Electronics,setElectronics] = useState(false)
const [Clothes,setClothes] = useState(false)
const [Shoes,setShoes] = useState(false)

const [brandSelection,setBrandSelection] = useState("")
    // useStates End  
    const handleBrand =(e)=>{
        const selectedBrand = e.target.value;
        onBrandChange(selectedBrand);
    }
//  Events Start

    const handleCat =()=>{
        setCategory(!category)
    }


    const handlePriceChange =(event)=>{
        const newPrice = event.target.value
        setPrice(newPrice);
        onPriceChange(newPrice)
    }
    
    const handleElectronics =()=>{
        setElectronics(!Electronics)

        setClothes(false)
        setShoes(false)
    }

    const handleClothes =()=>{
        setClothes(!Clothes)
        
        setElectronics(false)
        setShoes(false)
    }

    const handleShoes =()=>{
        setShoes(!Shoes)

        setElectronics(false)
        setClothes(false)
    }
// Events End


  return (
<>
   <div className="container-fluid sticky-top  sidebar bg-light-subtle  w-md-50  d-flex justify-content-center"> 

    <div className="content d-inline-flex justify-content-center mt-3">
    <ul className="list-group list-unstyled mt-3">
    <li className='list-item text-center fw-semibold category' onClick={handleCat}>Categories </li>    
      
      {category ?       <ul className="subList mt-2 ">
        <li className="list-item list-unstyled mt-1"><button type="button" className="btn " data-toggle="button" aria-pressed="false"  onClick={handleElectronics} >Electronics</button> </li>
        <li className="list-item list-unstyled mt-1"><button type="button" className="btn " data-toggle="button" aria-pressed="false"  onClick={handleShoes}>Shoes</button></li>
        <li className="list-item list-unstyled mt-1"><button type="button" className="btn " data-toggle="button" aria-pressed="false"  onClick={handleClothes}>Clothes</button></li>
    </ul>
 : " "  }
      
        <hr />
    <li className="list-item text-center fw-semibold mt-4">Price</li>
        <div className="priceRange">
        <input type="range" name="productPriceRange" id="" value={price} onChange={handlePriceChange} min={0} max={1000000} /><br />
        <span>Rs : {price}</span>    
        </div>
    <hr />
        <li className='list-item text-center fw-semibold mt-2'>Brand</li>
           
           {Electronics ?  <ul className="subBrandElect mt-1">
            <li className="list-item list-unstyled mt-1"><button type="button" className="btn " data-toggle="button" aria-pressed="false" value="DELL"   onClick={handleBrand} >DELL</button> </li>
            <li className="list-item list-unstyled mt-1"><button type="button" className="btn " data-toggle="button" aria-pressed="false" value="HP"     onClick={handleBrand} >HP</button></li>
            <li className="list-item list-unstyled mt-1"><button type="button" className="btn " data-toggle="button" aria-pressed="false" value="APPLE"  onClick={handleBrand} >APPLE</button></li>
            <li className="list-item list-unstyled mt-1"><button type="button" className="btn " data-toggle="button" aria-pressed="false" value="TOSHIBA"onClick={handleBrand} >TOSHIBA</button> </li>
            <li className="list-item list-unstyled mt-1"><button type="button" className="btn " data-toggle="button" aria-pressed="false" value="ACER"   onClick={handleBrand} >ACER</button></li>
            <li className="list-item list-unstyled mt-1"><button type="button" className="btn " data-toggle="button" aria-pressed="false" value="LENOVO" onClick={handleBrand} >LENOVO</button></li>
            <li className="list-item list-unstyled mt-1"><button type="button" className="btn " data-toggle="button" aria-pressed="false" value="IPHONE"   onClick={handleBrand} >IPHONE</button></li>
            <li className="list-item list-unstyled mt-1"><button type="button" className="btn " data-toggle="button" aria-pressed="false" value="REDMI" onClick={handleBrand} >REDMI</button></li>
            <li className="list-item list-unstyled mt-1"><button type="button" className="btn " data-toggle="button" aria-pressed="false" value="OPPO"   onClick={handleBrand} >OPPO</button></li>
            <li className="list-item list-unstyled mt-1"><button type="button" className="btn " data-toggle="button" aria-pressed="false" value="HUAWEI" onClick={handleBrand} >HUAWEI</button></li>
            <li className="list-item list-unstyled mt-1"><button type="button" className="btn " data-toggle="button" aria-pressed="false" value="TECNO"   onClick={handleBrand} >TECNO</button></li>
            <li className="list-item list-unstyled mt-1"><button type="button" className="btn " data-toggle="button" aria-pressed="false" value="NOKIA" onClick={handleBrand} >NOKIA</button></li>


            </ul>    
 : " " }

            {Shoes ?             <ul className="subBrandShoes">      
            <li className="list-item list-unstyled mt-1"><button type="button" className="btn " data-toggle="button" aria-pressed="false" value="BATA"   onClick={handleBrand}>BATA</button> </li>
            <li className="list-item list-unstyled mt-1"><button type="button" className="btn " data-toggle="button" aria-pressed="false" value="NIKES"  onClick={handleBrand}>NIKES</button></li>
            <li className="list-item list-unstyled mt-1"><button type="button" className="btn " data-toggle="button" aria-pressed="false" value="SETVIS" onClick={handleBrand}>SETVIS</button></li>
            <li className="list-item list-unstyled mt-1"><button type="button" className="btn " data-toggle="button" aria-pressed="false" value="POWER"  onClick={handleBrand}>POWER</button></li>
            <li className="list-item list-unstyled mt-1"><button type="button" className="btn " data-toggle="button" aria-pressed="false" value="SPORTS" onClick={handleBrand}>SPORTS</button></li>
            <li className="list-item list-unstyled mt-1"><button type="button" className="btn " data-toggle="button" aria-pressed="false" value="REEBOK" onClick={handleBrand}>REEBOK</button></li>
            <li className="list-item list-unstyled mt-1"><button type="button" className="btn " data-toggle="button" aria-pressed="false" value="PUMA" onClick={handleBrand}>PUMA</button></li>


            </ul>
 : " "}


        {Clothes ?            <ul className="subBrandClothes ">
            <li className="list-item list-unstyled mt-1"><button type="button" className="btn " data-toggle="button" aria-pressed="false" value="KHAADI"         onClick={handleBrand} >KHAADI</button> </li>
            <li className="list-item list-unstyled mt-1"><button type="button" className="btn " data-toggle="button" aria-pressed="false" value="GUL-AHMAD"      onClick={handleBrand} >GUL-AHMAD</button></li>
            <li className="list-item list-unstyled mt-1"><button type="button" className="btn " data-toggle="button" aria-pressed="false" value="Bonanza"        onClick={handleBrand} >BONANZA</button></li>
            <li className="list-item list-unstyled mt-1"><button type="button" className="btn " data-toggle="button" aria-pressed="false" value="BAREEZ"         onClick={handleBrand} >BAREEZ</button></li>
            <li className="list-item list-unstyled mt-1"><button type="button" className="btn " data-toggle="button" aria-pressed="false" value="SANA-SAFINAZ"   onClick={handleBrand} >SANA-SAFINAZ</button></li>

            </ul>
 : " "}

    <hr />
    </ul>
    </div>
   </div>

</> 
 
    )
}

export default SideBar
