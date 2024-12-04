const express = require("express");
const mongoose = require("mongoose");
// const Product = require("./models/product.model.js");
const productRoute = require("./routes/product.route.js");
const orderRoute = require("./routes/order.route.js");
const app = express();
// const cors = require('cors');
// app.use(cors());


// middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));


// routes
// products 
app.use("/api/products", productRoute);

// buyers Detalse
app.use("/api/orders", orderRoute);




app.get("/", (req, res) => {
  res.send("Hello from Node API Server Updated");
});


mongoose
  .connect(
    "mongodb+srv://maruf84210cse:OgrBCtALnAhJOhEd@eshopdb.om3zz.mongodb.net/?retryWrites=true&w=majority&appName=eshopDB"
  )
  .then(() => {
    console.log("Connected to database!");
    app.listen(5000, () => {
      console.log("Server is running on port 5000");
    });
  })
  .catch(() => {
    console.log("Connection failed!");
  });

// Define a route
// app.get('/api/products', async (req, res) => {
//     try{
//         const products = await Product.find({})
//         res.status(200).json(products)
//     } catch(error){
//         res.status(500).json({message: error.message})
//     }
// });

// app.get('/api/products/:id', async (req, res) => {
//     try{
//         const { id } = req.params;
//         const product = await Product.findById(id)
//         res.status(200).json(product)
//     } catch(error){
//         res.status(500).json({message: error.message})
//     }
// });

// app.post('/api/products', async (req, res) => {
//     try {
//         const product = new Product(req.body);
//         await product.save();
//         res.status(201).send(product);
//     } catch (error) {
//         console.error(error); // Log the error for debugging
//         res.status(400).send({ error: error.message });
//     }
// });

// app.put('/api/products/:id', async (req, res) => {
//     try {
//         const { id } = req.params;
//         const product = await Product.findByIdAndUpdate(id, req.body)

//         if(!product) {
//             return res.status(404).json({message: "Product not found!"})
//         }

//         const updatedProduct = await Product.findById(id)

//         res.status(200).json(updatedProduct)

//     } catch (error) {
//         res.status(400).json({ message: error.message });
//     }
// });

// app.delete('/api/products/:id', async (req, res) => {
//     try{
//         const { id } = req.params;
//         const product = await Product.findByIdAndDelete(id)
//         if(!product){
//             return res.status(404).json({message: 'product not found!'})
//         }
//     } catch(error){
//         res.status(500).json({message: error.message})
//     }
// })