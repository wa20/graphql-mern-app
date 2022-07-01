import Header from "./components/header/header";
import Clients from "./components/clients/clients";
import {ApolloProvider, ApolloClient, InMemoryCache} from '@apollo/client'


const client = new ApolloClient({
  uri: 'http://localhost:8000/graphql',
  cache: new InMemoryCache()
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
