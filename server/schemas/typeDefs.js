const { gql } = require('apollo-server');

const typeDefs = gql`
    type User {
      _id: ID!
      username: String!
      email: String!
      password: String!
      yourPlayer: [Player]
    }

    type Player {
      _id: ID!
      name: String!
      photoUrl: String!
      votes: Int!
    }
      
    type AuthPayload {
    token: String!
    user: User!
  }

    type Query {
      user: User!
      players: [Player]
      voteCount: [Player] # Add this line to define the voteCount query
      playerImg: [Player]
    }

    type Mutation {
      updateVote(id: ID!, voteCount: Int!): Player
      register(username: String!, password: String!): AuthPayload
      login(username: String!, password: String!): AuthPayload
    }
`;

module.exports = typeDefs;
