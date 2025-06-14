import {
  ApolloClient, //
  InMemoryCache, // this is where we are going to store our data from our queries
  ApolloProvider, // this a component useful for managing GraphQL mutations and queries; connecting our react components to graphQL server
  createHttpLink,
} from '@apollo/client';
//
import {setContext} from '@apollo/client/link/context';
//
import {Outlet} from 'react-router-dom';
//constructing API endpoint
const httpLink = createHttpLink({
  uri: 'https://vote4goat.onrender.com/graphql',
});
//Constructing request middleware which allow json web token to be attached when authorizing
const authLink = setContext((_,{headers})=>{
  const token = localStorage.getItem('id_token');
  return{
    headers:{
      ...headers,
      authorization: token ? `Bearer ${token}`:'',
    },
  }
});
//connecting with Apollo client 
const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
})
//starting app
function App(){
  return(<ApolloProvider client={client}>
    <div className='App'>
    <div className='Container'>
      <Outlet/>
    </div>
    </div>
  </ApolloProvider>)
};
//exporting our react application to our main.jsx 
export default App;