import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Textarea from "@mui/joy/Textarea";
import { useState } from "react";
import axios from "axios"; // Import Axios
import { useNavigate } from "react-router-dom"; 
import toast, { Toaster } from 'react-hot-toast';

const AdminPageBody = () => {
  const [amount, setAmount] = useState("");
  const [priceOfProduct, setPrice] = useState("");
  const [ElectronicForm, setElecFormType] = useState(false);
  const [ClothesForm, setClothesFormType] = useState(false);
  const [ShoesForm, setShoesFormType] = useState(false);
  const [category, setCat] = useState("");
  const [file,setFile] = useState()  
  const [image,setImage]= useState()
  const navigate = useNavigate()
  // Title
  document.title = "Admin Page";

  // Function to send data to backend
  const sendDataToBackend = (formData) => {
    axios.post("/api/ProductUpload", formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
    .then(response => {
          setImage(response.data);
          toast.success(response.data)
      // Optionally, handle success response
    })
    .catch(error => {
      console.error("Error uploading product:", error);
      // Optionally, handle error
    });
  };
  
  // Arrow Functions Starts here

  const handleElectronicForm = () => {
    setElecFormType(!ElectronicForm);
    setCat("ELECTRONICS");
    setClothesFormType(false);
    setShoesFormType(false);
  };

  const handleShoesForm = () => {
    setShoesFormType(!ShoesForm);
    setCat("SHOES");
    setElecFormType(false);
    setClothesFormType(false);
  };

  const handleClothesForm = () => {
    setClothesFormType(!ClothesForm);
    setCat("CLOTHES");
    setElecFormType(false);
    setShoesFormType(false);
  };
 const handleProducts=()=>{
  navigate('/ManageProducts');
 }



  const buttonColor = {
    background: "#DB4444",
  };

  const handleAmount = (e) => {
    const val = e.target.value;

    if (val > 0) {
      setAmount(val);
    } else {
      setAmount(0);
    }
  };

  const handlePrice = (e) => {
    const price = e.target.value;

    if (price > 0) {
      setPrice(price);
    } else {
      setPrice(0);
    }
  };
  // Arrow Functions Ends Here

  return (
    <>
    <Toaster/>
      {/* Admin Page Header  Starts*/}
      <div className="container min-vh-100 shadow">
        <div className="row">
          <div className="col-12">
            <header className="text-center mt-2">
              <h2 className="text-bg-primary rounded rounded-3">Admin Dashboard</h2>
              {/* On Successfully Login Name Appear */}
           
              {/* On Successfully Login Name Appear*/}
            </header>
          </div>
          {/* Admin Page Header Ends */}

          {/* Products Selection Buttons Starts  */}
          <div className="row">
            <div className="col-12">
              <nav className="navbar navbar-expand-sm bg-light">
                <div className="container-fluid d-flex justify-content-center">
                  <ul className="navbar-nav gap-5">
                    <li className="nav-item">
                      <Button variant="contained" fullWidth style={buttonColor} onClick={handleElectronicForm}>
                        Electronics
                      </Button>
                    </li>
                    <li className="nav-item">
                      <Button variant="contained" fullWidth style={buttonColor} onClick={handleShoesForm}>
                        Shoes
                      </Button>
                    </li>
                    <li className="nav-item">
                      <Button variant="contained" fullWidth style={buttonColor} onClick={handleClothesForm}>
                        Clothes
                      </Button>
                    </li>
                    <li className="nav-item">
                      <Button variant="contained" fullWidth style={buttonColor} onClick={handleProducts}>
                        Manage Products
                      </Button>
                    </li>

                  </ul>
                </div>
              </nav>
            </div>
          </div>

          {/* Products Selection Buttons Ends  */}

          {/* Forms Section */}

          {/* Product Electronic Details Here Start */}
          {ElectronicForm ? (
            <div className="row">
              <div className="col-12 d-flex row-cols-2  justify-content-center mt-5 mb-5">
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    const formData = new FormData(e.target); // Declare formData first
                    const selectedBrand = formData.get("brand"); // Get selected brand
                    formData.set("ProductBrand", selectedBrand); // Set brand in formData
                    formData.set('ProductImage',file)
                    sendDataToBackend(formData);
                  }}
                >
                  <div className="heading">
                    <h2 className="text-center">{category}</h2>
                    <input type="hidden" name="category" value={category} />
                    <span className="d-flex justify-content-center">
                      <small>Enter Product details below</small>
                    </span>
                  </div>

                  <div className="inputBoxes">
                    <TextField id="standard-basic" fullWidth type="text" label="Product Name" variant="standard" autoComplete="off" name="ProductName" />
                    <br />
                    <label htmlFor=""><b>Select Brand </b></label>
                    <select name="brand" className="ms-1 mt-3" id="">
                      <option value="">------Select------</option>
                      <option value="DELL">DELL</option>
                      <option value="LENOVO">LENOVO</option>
                      <option value="APPLE">APPLE</option>
                      <option value="HP">HP</option>
                      <option value="ACER">ACER</option>
                      <option value="TOSHIBA">TOSHIBA</option>
                    </select>
                    <br />
                    <Textarea className="mt-3" placeholder="Enter Product Description......" required name="ProductDescription" minRows={3} sx={{ mb: 1 }} />
                    <i className="fas fa-dollar-sign mt-4 text-danger"></i>{" "}
                    <TextField type="number" label="Product Price" variant="standard" onChange={handlePrice} value={priceOfProduct} name="ProductPrice" />
                    <br />
                    <i className="fa fa-database mt-4 text-danger" aria-hidden="true"></i>{" "}
                    <TextField id="standard-basic" type="number" label="Product Amount" variant="standard" onChange={handleAmount} value={amount} name="ProductAmount" />
                    <br />
                    <TextField id="standard-basic" fullWidth type="file" variant="standard" onChange={e => setFile(e.target.files[0])} accept="/image/*" autoComplete="off" name="ProductImage" />
                    <br />
                    <br />
                    <Button type="submit" variant="contained" fullWidth style={buttonColor}>
                      Upload Product
                    </Button>
                  </div>
                </form>
                <br />
              </div>
            </div>
          ) : (
            ""
          )}

          {/* Product Electronic Details Here Ends */}

          {/* {Product Clothes here starts} */}
          {ClothesForm ? (
            <div className="row">
            <div className="col-12 d-flex row-cols-2  justify-content-center mt-5 mb-5">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  const formData = new FormData(e.target); // Declare formData first
                  const selectedBrand = formData.get("brand"); // Get selected brand
                  formData.set("ProductBrand", selectedBrand); // Set brand in formData
                  formData.set('ProductImage',file)
                  sendDataToBackend(formData);
                }}
              >
                <div className="heading">
                  <h2 className="text-center">{category}</h2>
                  <input type="hidden" name="category" value={category} />
                  <span className="d-flex justify-content-center">
                    <small>Enter Product details below</small>
                  </span>
                </div>

                <div className="inputBoxes">
                  <TextField id="standard-basic" fullWidth type="text" label="Product Name" variant="standard" autoComplete="off" name="ProductName" />
                  <br />
                  <label htmlFor=""><b>Select Brand </b></label>
                  <select name="brand" className="ms-1 mt-3" id="">
                    <option value="">------Select------</option>
                    <option value="KHAADI">KHAADI</option>
                    <option value="GUL-AHMAD">GUL-AHMAD</option>
                    <option value="JUNAID-JAMSHAID">JUNAID-JAMSHAID</option>
                    <option value="BAREEZ">BAREEZ</option>
                    <option value="SANA-SAFINAZ">SANA-SAFINAZ</option>
                  </select>
                  <br />
                  <Textarea className="mt-3" placeholder="Enter Product Description......" required name="ProductDescription" minRows={3} sx={{ mb: 1 }} />
                  <i className="fas fa-dollar-sign mt-4 text-danger"></i>{" "}
                  <TextField type="number" label="Product Price" variant="standard" onChange={handlePrice} value={priceOfProduct} name="ProductPrice" />
                  <br />
                  <i className="fa fa-database mt-4 text-danger" aria-hidden="true"></i>{" "}
                  <TextField id="standard-basic" type="number" label="Product Amount" variant="standard" onChange={handleAmount} value={amount} name="ProductAmount" />
                  <br />
                  <TextField id="standard-basic" fullWidth type="file" variant="standard" onChange={e => setFile(e.target.files[0])} accept="/image/*" autoComplete="off" name="ProductImage" />
                  <br />
                  <br />
                  <Button type="submit" variant="contained" fullWidth style={buttonColor}>
                    Upload Product
                  </Button>
                </div>
              </form>
              <br />
            </div>
          </div>
        ) : (
            ""
          )}

          {/* {Product Clothes here ends} */}

          {/* {Product Shoes Here Starts} */}

          {ShoesForm ? (
            <div className="row">
            <div className="col-12 d-flex row-cols-2  justify-content-center mt-5 mb-5">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  const formData = new FormData(e.target); // Declare formData first
                  const selectedBrand = formData.get("brand"); // Get selected brand
                  formData.set("ProductBrand", selectedBrand); // Set brand in formData
                  formData.set('ProductImage',file)
                  sendDataToBackend(formData);
                }}
              >
                <div className="heading">
                  <h2 className="text-center">{category}</h2>
                  <input type="hidden" name="category" value={category} />
                  <span className="d-flex justify-content-center">
                    <small>Enter Product details below</small>
                  </span>
                </div>

                <div className="inputBoxes">
                  <TextField id="standard-basic" fullWidth type="text" label="Product Name" variant="standard" autoComplete="off" name="ProductName" />
                  <br />
                  <label htmlFor=""><b>Select Brand </b></label>
                  <select name="brand" className="ms-1 mt-3" id="">
                    <option value="">------Select------</option>
                    <option value="BATA">BATA</option>
                    <option value="NIKES">NIKES</option>
                    <option value="SETVIS">SETVIS</option>
                    <option value="POWER">POWER</option>
                    <option value="REEBOK">REEBOK</option>
                    <option value="SPORTS">SPORTS</option>
                    <option value="PUMA">PUMA</option>
                  </select>
                  <br />
                  <Textarea className="mt-3" placeholder="Enter Product Description......" required name="ProductDescription" minRows={3} sx={{ mb: 1 }} />
                  <i className="fas fa-dollar-sign mt-4 text-danger"></i>{" "}
                  <TextField type="number" label="Product Price" variant="standard" onChange={handlePrice} value={priceOfProduct} name="ProductPrice" />
                  <br />
                  <i className="fa fa-database mt-4 text-danger" aria-hidden="true"></i>{" "}
                  <TextField id="standard-basic" type="number" label="Product Amount" variant="standard" onChange={handleAmount} value={amount} name="ProductAmount" />
                  <br />
                  <TextField id="standard-basic" fullWidth type="file" variant="standard" onChange={e => setFile(e.target.files[0])} accept="/image/*" autoComplete="off" name="ProductImage" />
                  <br />
                  <br />
                  <Button type="submit" variant="contained" fullWidth style={buttonColor}>
                    Upload Product
                  </Button>
                </div>
              </form>
              <br />
            </div>
          </div>
      ) : (
            ""
          )}

          {/* {Product Shoes here ends} */}
        </div>
      </div>
    </>
  );
};

export default AdminPageBody;
