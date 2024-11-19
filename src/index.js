// src/index.js
const { ApolloServer } = require('apollo-server');
const connectDB = require('./db/mongo');

const productTypeDefs = require('./schemas/ProductSchema');
const productResolvers = require('./resolvers/ProductResolver');
const clientTypeDefs = require('./schemas/clientSchema');
const clientResolvers = require('./resolvers/clientResolver');

const startServer = async () => {
  await connectDB(); // Conectar a MongoDB
  const typeDefs = [productTypeDefs, clientTypeDefs];
  const resolvers = [productResolvers, clientResolvers];

  const server = new ApolloServer({ typeDefs, resolvers });

  server.listen({ port: 4000 }).then(({ url }) => {
    console.log(`Servidor corriendo en ${url}`);
  });
};

startServer();
