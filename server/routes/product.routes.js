const ProductController = require('../controllers/product.controller');

module.exports = function(app){
    app.post('/api/products', ProductController.createProduct);
    app.get('/api/products', ProductController.getProducts); // add route to get all products
    app.get('/api/products/:id', ProductController.getProduct); // get one
    app.patch('/api/products/:id', ProductController.updateProduct); //update
    app.delete('/api/products/:id', ProductController.deleteProduct);
}