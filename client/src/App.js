import Header from "./components/header/header";
import Clients from "./components/clients/clients";
import {ApolloProvider, ApolloClient, InMemoryCache} from '@apollo/client'

const cache = new InMemoryCache({
  typePolicies: {
      Query: {
          fields: {
              clients: {
                  merge(exisitng, incoming) {
                      return incoming
                  }
              },

              projects: {
                merge(exisitng, incoming) {
                    return incoming
                 }
              }
      }
    }
  }
})


const client = new ApolloClient({
  uri: 'http://localhost:8000/graphql',
  cache,
  // cache: new InMemoryCache()
})

function App() {
  return (
    <> 
    <ApolloProvider client={client}>

    <Header />

      <div className="container my-5">
       
      <Clients />
  
      </div>
   
    
    </ApolloProvider>
    </>
    
  );
}

export default App;
