import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// Importo bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import App from './App.tsx'

import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

// Create an Apollo Client instance
const client = new ApolloClient({
  uri: "https://localhost:4000/", // Replace with your GraphQL endpoint
  cache: new InMemoryCache(),
});

createRoot(document.getElementById('root')!).render(

  
  <StrictMode>
    <ApolloProvider client={client}>
    <App />
    </ApolloProvider>
  </StrictMode>,
)
