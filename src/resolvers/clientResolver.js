const clientService = require('../services/clientService');

const resolvers = {
  Query: {
    clients: () => {
      return clientService.getAllClients();
    },
  },
  Mutation: {
    CreateClient: (_, { nombreCompleto, email, password, direccion, telefono, tipoUsuario, metodoPagoPreferido }) => {
      return clientService.createClient(nombreCompleto, email, password, direccion, telefono, tipoUsuario, metodoPagoPreferido);
    },
    UpdateClient: (_, { id, nombreCompleto, email, password, direccion, telefono, tipoUsuario, metodoPagoPreferido }) => {
      return clientService.updateClient(id, nombreCompleto, email, password, direccion, telefono, tipoUsuario, metodoPagoPreferido);
    },
    DeleteClient: (_, { id }) => {
      return clientService.deleteClient(id);
    },
  },
};

module.exports = resolvers;
