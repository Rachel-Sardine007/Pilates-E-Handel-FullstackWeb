// controllers/productController.js

// @desc    Get all products
// @route   GET /api/products
// @access  Public
const getProducts = (req, res) => {
  res.status(200).json({ message: "Get all products" });
};

// @desc    Get single product by ID
// @route   GET /api/products/:id
// @access  Public
const getProduct = (req, res) => {
  res.status(200).json({ message: `Get product with ID ${req.params.id}` });
};

// @desc    Create a new product
// @route   POST /api/products
// @access  Public
const createProduct = (req, res) => {
  res.status(201).json({ message: "Create new product", body: req.body });
};

// @desc    Update a product
// @route   PUT /api/products/:id
// @access  Public
const updateProduct = (req, res) => {
  res.status(200).json({
    message: `Update product with ID ${req.params.id}`,
    body: req.body,
  });
};

// @desc    Delete a product
// @route   DELETE /api/products/:id
// @access  Public
const deleteProduct = (req, res) => {
  res.status(200).json({ message: `Delete product with ID ${req.params.id}` });
};

module.exports = {
  getProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
};