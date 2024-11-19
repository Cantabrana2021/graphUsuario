const { gql } = require('apollo-server');

const typeDefs = gql`
      type Product {
           id: ID!
           name: String!
           description: String!
           price: Float!
           category: String!
           brand: String!
           stock: Int!
           createAt: String!
           imgs: [String!]
      }
           
      type Query {
            products: [Product]!
      }
            
      type Mutation {
            CreateProduct(
              name: String!, 
              description: String!, 
              price: Float!, 
              category: String!, 
              brand: String!, 
              stock: Int!, 
              imgs: [String!]
            ): Product!
            
            UpdateProduct(
              id: ID!, 
              name: String, 
              description: String, 
              price: Float, 
              category: String, 
              brand: String, 
              stock: Int, 
              imgs: [String]
            ): Product!
            
            DeleteProduct(id: ID!): Product!
      }
`;

module.exports = typeDefs;
