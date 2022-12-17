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

      const instance = axios.create({
        baseURL: 'https://pbtvgb65xd-vpce-03c2b0c84a5da002a.execute-api.us-east-1.amazonaws.com/predev/v1',
        headers: {'x-api-key': 'predevtestApiKeyPreBoletos003'}
      });

      const { data } = await instance.get('/coins');
      return data;
      
      // conectando con mi api fake(pseudo)
      // const { data } = await axios.get('http://localhost:4001/');
      // return data;
      
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