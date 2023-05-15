const { Product } = require('../models/product.model');
const {res} = require("express");


// The method below is new
module.exports.createProduct = (req, res) => {
    const { title, description, price } = req.body;
    Product.create({
        title,
        description,
        price
    })
        .then(product => res.json(product))
        .catch(err => res.json(err));
}
// add in list and detail
module.exports.getProducts = (req, res) => {
    Product.find({})
        .then(products => res.json(products))
        .catch(err => res.json(err))
}

module.exports.getProduct = (req, res) => {
    Product.findOne({_id:req.params.id})
        .then(product => res.json(product))
        .catch(err => res.json(err))
}

module.exports.updateProduct = (request, response) => {
    Product.findOneAndUpdate({_id: request.params.id}, request.body, {new:true})
        .then(updatedProduct => response.json(updatedProduct))
        .catch(err => response.json(err))
}

module.exports.deleteProduct = (request, response) => {
    Product.deleteOne({ _id: request.params.id })
        .then(deleteConfirmation =>response.json(deleteConfirmation))
        .catch(err =>response.json(err))
}