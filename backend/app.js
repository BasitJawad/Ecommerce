const express = require('express');
const dotenv = require('dotenv');
require("./DB/conn")
dotenv.config({path:'./config.env'})

// Normal packages import here
const bcrypt = require('bcrypt')
const nodemailer = require('nodemailer') 
const { v4: uuidv4 } = require('uuid');
const multer = require('multer')
const path = require('path')
const jwt = require('jsonwebtoken')
const cookieParser = require('cookie-parser')
// Packages import here ends

// Models import here
const SignUp = require('./model/SignUpSchema');
const { Product, Category } = require("./model/ProductSchema");

// Models import here ends

const app = express();
const Port = process.env.PORT
const EMAIL=process.env.EMAIL
const PASSWORD = process.env.PASSWORD


// Express json()
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(cookieParser())
app.use('/public/uploads', express.static(path.join(__dirname, 'public', 'uploads')));
// Picture Upload
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      return cb(null, "./public/uploads");
    },
    filename: function (req, file, cb) {
      return cb(null, file.fieldname + "_"+Date.now()+path.extname(file.originalname));
    },
  });
  const upload = multer({ storage: storage }).single("ProductImage");
  
// Picture Upload
app.get('/',(req, res)=>{
    res.send("Hompage")
})


// SignUp Route Starts

app.post("/api/SignUp", async (req, res) => {
  const { name, email, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 6);
  try {
      const oldUser = await SignUp.findOne({email: email });
      if (oldUser) {
          res.status(409).send("User already exists");
      } else {
        // const token = jwt.sign({_id},"MyNameIsAdmin123DatabaseShoppingWebsiteForEcommerce")
        const newUser = new SignUp({ name: name, email: email, password: hashedPassword});
          
          console.log(oldUser)
          const result = await newUser.save();
          res.status(200).send(result);
          console.log("User Signed Up:", result);
      }
  } catch (error) {
      console.log("Signed Up Error Occurred: " + error);
      res.status(500).send("Internal Server Error");
  }
});

// SignUp Route Ends


app.post("/api/Login", async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  try {
      const userEmail = await SignUp.findOne({ email: email });
      if (!userEmail) {
          // User not found
          console.log("User not found");
          res.status(401).send("Not An Authorized User");
          return;
      }
      const matchedPassword = await bcrypt.compare(password, userEmail.password);
      if (!matchedPassword) {
          // Incorrect password
          console.log("Incorrect password");
          return res.status(401).send("Incorrect password");
      }
      
      // If email and password match
      const token = jwt.sign({ _id: userEmail._id }, process.env.JWT_SECRET, { expiresIn: '10s' });
      res.cookie('token', token, { expires: new Date(Date.now() + 10000), httpOnly: true }); // Set token in cookie
      console.log("User Successfully Logged In", token );
      res.status(200).json({token,name:userEmail.name});
  } catch (error) { 
      console.log("Error is : " + error);
      res.status(500).send("Internal Server Error");
  }
});

// Password Reset Section

app.post("/api/reset", async (req, res) => {
    try {
        const email = req.body.email;
        console.log("Email : " + email);
        const ResetEmail = await SignUp.findOne({ email: email });
        const token = uuidv4(); // Generate a unique token using uuid
        console.log(token);
        ResetEmail.token= token;
        await ResetEmail.save();
        const resetLink = `http://localhost:5173/PasswordChange/${token}`;

        if (!ResetEmail) {
            console.log("User not found");
            res.status(401).send("Not An Authorized User");
            return;
        } else if (ResetEmail) {
            const transporter = nodemailer.createTransport({
                host: "smtp.gmail.com",
                port: 587,
                secure: false, // Use `true` for port 465, `false` for all other ports
                auth: {
                    user: EMAIL,
                    pass: PASSWORD,
                },
            });
            const info = await transporter.sendMail({
                from: "muhbasit235@gmail.com", // sender address
                to: `${ResetEmail.email}`, // list of receivers
                subject: `PASSWORD RESET FOR ${email}`, // Subject line
                text: `Hi! ${ResetEmail.name} 🎇`, // plain text body
                html: `    <h1 style="text-align: center;" >EXCLUSIVE <br><br>We received your query for <u><b><i>Password Reset</i></b></u></h1></br>
                           <h4 style="text-align:center">👍 To Reset your password 👍<br> Please click on the button</h4>
                           <div class="button" style="display: flex; justify-content: center;">
                           <a href="${resetLink}" style="text-decoration: none; color: black;"> <button style="cursor: pointer; background-color: rgb(173, 212, 199);" ><h2> Reset Password</h2></button></a> </div>                                            
                `, // html body
            });

            console.log("Message sent: %s", info.messageId);
            res.status(200).json({ token }); // Send the token as JSON response      
          } else {
            console.log("No");
        }

    } catch (error) {
        console.log("Error is : " + error);
        res.status(500).send("Internal Server Error");
    }
});


app.post('/api/v1/resetPassword/:token', async (req, res) => {
    const token = req.params.token; // Corrected to access token from URL parameters
    const newPassword = req.body.NewPassword;
    const confirmPassword = req.body.ConfirmPassword;
    
    const hashedPassword = await bcrypt.hash(newPassword,6);
    if (newPassword === confirmPassword ) {
            try{
            const User =await SignUp.findOneAndUpdate({ token: token}, {$set: {password: hashedPassword}, $unset:{token:1}},{new:true})
            if(User){
                res.status(201).send("Password updated successfully")
            }else{
              res.status(404).send("User not found")
            }
      
          } catch (error) {
            console.log("Error resetting password:", error);
            res.status(500).send("Internal Server Error");
        }
        
        }else{
            res.status(400).send("Passwords do not match");
        }   

});

// Password Reset Section

// Category creation here 
// const createCategory = async () => {
//   try {
//       // Check if the category already exists
//       const existingCategory = await Category.findOne({ categoryName: 'ELECTRONICS' });
//       if (!existingCategory) {
//           // Create a new category instance
//           const newCategory = new Category({ categoryName: 'ELECTRONICS' });

//           // Save the category to the database
//           const savedCategory = await newCategory.save();
//           console.log('Category saved successfully:', savedCategory);
//       } else {
//           console.log('Category already exists:', existingCategory);
//       }
//   } catch (error) {
//       console.error('Error creating category:', error);
//   }
// };
// createCategory();
// category creation here

// Product Upload Section 

// Product Upload Section 
app.post("/api/ProductUpload", upload, async (req, res) => {
  console.log(req.body)
  try {
    const {
      ProductName,
      ProductBrand,
      ProductPrice,
      ProductAmount,
      ProductDescription,
      category // Assuming this is the category name
    } = req.body;

    // Ensure ProductDescription is provided
    if (!ProductDescription) {
      return res.status(400).send('Product Description is required');
    }

    // Find the category document by name
    const existingCategory = await Category.findOne({ categoryName: category });

    if (!existingCategory) {
      console.error("Category not found:", category);
      return res.status(404).send("Category not found");
    }

    // Get the uploaded file
    const file = req.file;

    if (!file) {
      return res.status(400).send('No file uploaded');
    }

    // Create ProductPicture object
    const productPicture = {
      image: file.filename // Assuming filename is the path to the uploaded image
    };

    const newProduct = new Product({
      productName: ProductName,
      productBrand: ProductBrand,
      productPrice: ProductPrice,
      productAmount: ProductAmount,
      productDescription: ProductDescription,
      productPictures: [productPicture], // Since it's an array in the schema
      category: existingCategory._id, // Use the ObjectId of the existing category
    });

    const result = await newProduct.save();
    console.log(result);
    res.status(200).send("Product Uploaded Successfully");
  } catch (error) {
    console.log("Could not upload product: ", error);
    res.status(500).send("Internal Server Error");
  }
});


// Product Upload Section


// Product Get Section

app.get('/api/ProductRetrieve', async (req, res) => {
  try {
    const products = await Product.find()
    .select({ 
      productName: 1,
      productBrand: 1,
      productPrice: 1,
      productAmount: 1,
      productDescription: 1,
      productPictures: 1, // Include ProductPicture field
      category: 1,
      _id: 1,
    })
    .sort({ productPrice: 1 })
    .populate("category", "categoryName")
    .populate("productPictures", "image");
    
    if (products.length > 0 ) {
      setTimeout(() => {
        res.status(200).json({products});
      }, 500);
    } else {
      res.status(204).send("No Products Available");
    }
  } catch (error) {
    console.error("Error retrieving products:", error);
    res.status(500).send("Internal Server Error");
  }
});

app.get('/api/ProductRetrieve/:price', async (req, res) => {
  try {
    const price = parseInt(req.params.price); // Parse price as a number
    if (price) {
      const products = await Product.find({ productPrice: { $lte: price } })
        .select({ 
          productName: 1,
          productBrand: 1,
          productPrice: 1,
          productAmount: 1,
          productDescription: 1,
          productPictures: 1, // Include ProductPicture field
          category: 1,
          _id: 1,
        })
        .sort({ productName: 1 }) // Corrected sorting field name
        .populate("category", "categoryName")
        .populate("productPictures", "image");
      res.status(200).json({ products });
    } else {
      res.send("No products found");
    }
  } catch (error) {
    console.error('Error retrieving products:', error);
    res.status(500).send('Internal Server Error');
  }
});// Product Get Section

// Product Delete Section

app.delete('/api/productsDelete/:id', async (req, res) => {
  const productId = req.params.id;
  console.log(productId)
  try {
      const product = await Product.findByIdAndDelete(productId);
      if (!product) {
          return res.status(404).send("Product not found");
      }
      res.status(200).send("Product deleted successfully");
  } catch (error) {
      console.error(error)
      res.status(500).send("Internal Server Error")
  }
});
// Product Delete Section
app.post('/api/SendToMail', async (req, res) => {
  const { firstName, lastName, emailAddress, homeAddress, phoneNumber, product } = req.body;

  try {
    // Validate required fields
    if (!firstName || !lastName || !emailAddress || !homeAddress || !phoneNumber || !product || !product.id) {
      return res.status(400).json({ error: "Missing or invalid required fields" });
    }

    // Find the product by its ID
    const foundProduct = await Product.findById(product.id);

    if (!foundProduct) {
      return res.status(404).json({ error: 'Product not found' });
    }

    // Calculate new amount after checkout
    const newAmount = foundProduct.productAmount - product.amount;

    // Update productAmount in the database
    await Product.findByIdAndUpdate(product.id, { $set: { productAmount: newAmount } });

    // Check if productAmount is zero and delete the product
    if (newAmount === 0) {
      await Product.findByIdAndDelete(product.id);
      console.log(`Product '${product.name}' with ID '${product.id}' deleted`);
    }

    // Create nodemailer transporter
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false, // Use `true` for port 465, `false` for other ports
      auth: {
        user: EMAIL,
        pass: PASSWORD,
      },
    });

    const toEmails = `${emailAddress}, muhbasit235@gmail.com`;
    const info = await transporter.sendMail({
      from: "muhbasit235@gmail.com",
      to: toEmails,
      subject: `Your Product Shipping Detail`,
      html: `
        <h1 style="text-align: center;">EXCLUSIVE</h1>
        <h2 style="text-align: center;">Your Product Shipping Detail</h2>
        <div>
          <label>Customer Name: <strong>${firstName} ${lastName}</strong></label><br>
          <label>Customer Address: <strong>${homeAddress}</strong></label><br>
          <label>Customer Phone Number: <strong>${phoneNumber}</strong></label><br>
          <h3>Product Information:</h3>
          <ul>
          <li><strong>Product Id:</strong> ${product.id}</li>
            <li><strong>Product Name:</strong> ${product.name}</li>
            <li><strong>Product Brand:</strong> ${product.brand}</li>
            <li><strong>Product Description:</strong> ${product.description}</li>
            <li><strong>Product Amount:</strong> ${product.amount}</li>
            <li><strong>Product Price:</strong> ${product.price}</li>
          </ul>
        </div>
      `,
    });

    console.log("Message sent: %s", info.messageId);
    res.status(200).json({ message: "Check your Gmail for the Information, an email has been sent to you" });
  } catch (error) {
    console.error("Error processing SendToMail:", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
});


app.listen(Port,()=>{
    console.log(`Server listening on port ${Port}`)
})

