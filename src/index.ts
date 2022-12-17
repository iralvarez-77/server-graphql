import { ApolloServer } from '@apollo/server';
import  { startStandaloneServer } from '@apollo/server/standalone';
import axios from 'axios';

const typeDefs = `#graphql
  
  type Coin {
    coinType : String!
    description : String!
    salePrice: Int!
    purchasePrice: Int!
  }

  type Query {
    coins: [Coin]
  }
`;

const resolvers = {
  Query: {
    coins: async () => {
      
      const { data } = await axios.get('http://localhost:4001/');
      return data;
    }
  }
}

const server = new ApolloServer({
  typeDefs,
  resolvers
})

const {url} = await startStandaloneServer(server, { 
  listen: { port: 4000 }
})

console.log( `Server ready at: ${url}` );