const Client = require('../models/clientModel');

module.exports = {
  getAllClients: async () => {
    return await Client.find();
  },

  createClient: async (nombreCompleto, email, password, direccion, telefono, tipoUsuario, metodoPagoPreferido) => {
    const client = new Client({ 
      nombreCompleto, 
      email, 
      password, 
      direccion, 
      telefono, 
      tipoUsuario, 
      metodoPagoPreferido 
    });
    return await client.save();
  },

  updateClient: async (id, nombreCompleto, email, password, direccion, telefono, tipoUsuario, metodoPagoPreferido) => {
    return await Client.findByIdAndUpdate(id, { 
      nombreCompleto, 
      email, 
      password, 
      direccion, 
      telefono, 
      tipoUsuario, 
      metodoPagoPreferido 
    }, { new: true });
  },

  deleteClient: async (id) => {
    return await Client.findByIdAndDelete(id);
  },
};
