
const express = require('express');
const AsyncHandler = require('express-async-handler');
const Product = require('../models/Product');

const productRoute = express.Router();

productRoute.get('/', AsyncHandler(async (req, res) => {
    const products = await Product.find({})
    res.json(products)
}))

productRoute.get('/:id', AsyncHandler(async (req, res) => {
    const product = await Product.findById({ _id: req.params.id })
    if (product) {
        res.json(product)
    } else {
        res.status(404)
        throw new Error("Product Not Found!")
    }
}))


module.exports = productRoute;