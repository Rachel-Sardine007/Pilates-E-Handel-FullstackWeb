const asyncHandler = require("express-async-handler");
const Product = require("../models/productModel");

// @desc    Get all products
// @route   GET /api/products
// @access  Public
const getProducts = asyncHandler(async(req, res) => {
  const products = await Product.find();
  res.status(200).json(products);
});

// @desc    Get single product by ID
// @route   GET /api/products/:id
// @access  Public
const getProduct = asyncHandler(async(req, res) => {
  const product = await Product.findById(req.params.id);
  if (!product){
    res.status(404);
    throw new Error("Product not found");
  }
  res.status(200).json(product);
});

// @desc    Create a new product
// @route   POST /api/products
// @access  private
const createProduct = asyncHandler(async(req, res) => {
  console.log("The request body is ", req.body); 
  const {name, price, category, image, description, color} = req.body;
  if (!name || !price || !category){
    res.status(400);
    throw new Error("Please fill all the fields");
  }
  const product = await Product.create({
    name,
    price,
    category,
    image,
    description,
    color
  });

  res.status(201).json(product);
});

// @desc    Update a product
// @route   PUT /api/products/:id
// @access  private
const updateProduct = asyncHandler(async(req, res) => {
  const product = await Product.findById(req.params.id);
  if(!product){
    res.status(404);
    throw new Error("Product not found");
  }

  const updatedProduct = await Product.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true}
  );

  res.status(200).json(updatedProduct);
});

// @desc    Delete a product
// @route   DELETE /api/products/:id
// @access  private
const deleteProduct = asyncHandler(async(req, res) => {
  const product = await Product.findById(req.params.id);
  if(!product){
    res.status(404);
    throw new Error("Product not found");
  }

  await Product.deleteOne({_id: req.params.id});
  res.status(200).json(product);
  });

module.exports = {
  getProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
};