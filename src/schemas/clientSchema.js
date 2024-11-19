const { gql } = require('apollo-server');

const typeDefs = gql`
  type Client {
    id: ID!
    nombreCompleto: String!
    email: String!
    password: String! # Hashed
    direccion: String!
    telefono: String!
    fechaRegistro: String!
    tipoUsuario: String!
    metodoPagoPreferido: [String!]!
  }

  type Query {
    clients: [Client]!
  }

  type Mutation {
    CreateClient(
      nombreCompleto: String!,
      email: String!,
      password: String!,
      direccion: String!,
      telefono: String!,
      tipoUsuario: String!,
      metodoPagoPreferido: [String!]!
    ): Client!

    UpdateClient(
      id: ID!,
      nombreCompleto: String,
      email: String,
      password: String,
      direccion: String,
      telefono: String,
      tipoUsuario: String,
      metodoPagoPreferido: [String]
    ): Client!

    DeleteClient(id: ID!): Client!
  }
`;

module.exports = typeDefs;
