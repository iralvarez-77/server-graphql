import { ApolloServer } from '@apollo/server';
import  { startStandaloneServer } from '@apollo/server/standalone';

const typeDefs = `#graphql
  
  type Coin {
    coinType : String
    description : String
    salePrice: Int
    purchasePrice: Int
  }

  type Query {
    coins: [Coin]
  }
`;

const coins = [
  {
    coinType: 'USD',
    description: 'dolar',
    purchasePrice: 308,
    salePrice: 312
  },
  {
    coinType: 'EUR',
    description: 'euro',
    purchasePrice: 309,
    salePrice: 313
  },
  {
    coinType: 'CNY',
    description: 'yuan',
    purchasePrice: 310,
    salePrice: 314
  },
  {
    coinType: 'UYU',
    description: 'peso uruguayo',
    purchasePrice: 308,
    salePrice: 312
  },
  {
    coinType: 'BRL',
    description: 'real brasileño',
    purchasePrice: 308,
    salePrice: 312
  },
  {
    coinType: 'CLP',
    description: 'peso chileno',
    purchasePrice: 308,
    salePrice: 312
  },
];

const resolvers = {
  Query: {
    coins: () => coins,
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