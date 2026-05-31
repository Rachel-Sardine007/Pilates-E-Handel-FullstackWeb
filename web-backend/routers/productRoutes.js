const express = require('express');
const router = express.Router();
const {getProducts, 
    createProduct, 
    getProduct, 
    updateProduct, 
    deleteProduct} = require('../controllers/productController');
// const validateToken = require('../middleware/validateTokenHandler');

// router.use(validateToken);

//GET all products
router.route('/').get(getProducts);

//POST product
router.route('/').post(createProduct);

//GET product
router.route('/:id').get(getProduct);

//PUT product
router.route('/:id').put(updateProduct);

//DELETE product
router.route('/:id').delete(deleteProduct);

module.exports = router;
