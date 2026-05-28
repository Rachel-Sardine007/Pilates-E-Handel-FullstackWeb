const asyncHandler = require("express-async-handler");

const Order = require("../models/orderModel");

// @desc    Get order by id
// @route   GET /api/orders/id
// @access  Private
const getOrder = asyncHandler(async(req,res) => {

    const orders = await Order.find({user: req.user.id});

    res.status(200).json(orders);

});


// @desc    Create a new order
// @route   POST /api/orders
// @access  Private
const createOrder = asyncHandler(async(req,res) => {
    
    const { items,totalPrice, paymentMethod } = req.body;

    //verify input
    if(!items || !totalPrice || !paymentMethod){
        res.status(400);
        throw new Error("Please fill in information!");
    }

    //create the order in database
    const order = await Order.create({
        user: req.user.id,
        items,
        totalPrice,
        paymentMethod,
    });

    //send order back
    if(order){
        res.status(201).json(order);
    } else{
        res.status(400);
        throw new Error("Something wrong with the order!");
    }

});

module.exports = {createOrder, getOrder};