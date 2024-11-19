const productService = require('../services/productService'); 

const resolvers = {
   Query: {
       products: () => { 
           return productService.getAllProducts(); // Servicio para obtener todos los productos
       }
   },
   Mutation: {
       CreateProduct: (_, { name, description, price, category, brand, stock, imgs }) => { // Parámetros para un producto
           return productService.createProduct(name, description, price, category, brand, stock, imgs); 
       },
       UpdateProduct: (_, { id, name, description, price, category, brand, stock, imgs }) => { // Parámetros para la actualización de productos
           return productService.updateProduct(id, name, description, price, category, brand, stock, imgs); 
       },
       DeleteProduct: (_, { id }) => { // Eliminar producto
           return productService.deleteProduct(id); // deleteProduct
       }
   }
};

module.exports = resolvers;
