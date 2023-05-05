import React from 'react';
//import logo from './logo.svg';
import Homepage from './pages/homepage/homepage'
import './App.css';

import { updatePage1 } from './app/store';

function App() {
  return (
    <div className="App">
      <header className="App-header" />
      <Homepage name='' phone='' add='' mail='' updatePage1={updatePage1} />
    </div>
  );
}

export default App;
