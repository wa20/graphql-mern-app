import Header from "./components/header/header";
import {ApolloProvider, ApolloClient, InMemoryCache} from '@apollo/client'


const client = new ApolloClient({
  uri: 'http://localhost:8000/graphql',
  cache: new InMemoryCache()
})

function App() {
  return (
    <> 
    <ApolloProvider client={client}>
    <Header/>

    <div className="App">
      <header className="App-header">
       
          hello React
  
      </header>
    </div>
    
    </ApolloProvider>
    </>
    
  );
}

export default App;
