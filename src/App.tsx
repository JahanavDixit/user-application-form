import React from 'react';
//import logo from './logo.svg';
import { ChakraProvider } from '@chakra-ui/react';
import Homepage from './pages/homepage/homepage'
import './App.css';


import { updatePage1 } from './app/store';

function App() {
  return (
    <ChakraProvider>
      <header className="App-header" />
      <Homepage name='' phone='' add='' mail='' updatePage1={updatePage1} />
    </ChakraProvider>
  );
}

export default App;
