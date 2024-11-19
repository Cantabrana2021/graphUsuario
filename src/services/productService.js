const Product = require('../models/productModel'); 

module.exports = {
    getAllProducts: async () => { 
       return await Product.find(); 
    },

    createProduct: async (name, description, price, category, brand, stock, imgs) => { // Parámetros específicos de un producto
       const product = new Product({ name, description, price, category, brand, stock, imgs }); // Creación de un producto con sus atributos
       return await product.save(); // Guardar el producto
    },

    updateProduct: async (id, name, description, price, category, brand, stock, imgs) => { // Actualización de producto
        return await Product.findByIdAndUpdate(id, { name, description, price, category, brand, stock, imgs }, { new: true }); 
    },

    deleteProduct: async (id) => { 
        return await Product.findByIdAndDelete(id); // Eliminar el producto por su ID
    }
};
