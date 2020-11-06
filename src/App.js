import React from 'react';
import './App.css';
import { BrowserRouter} from 'react-router-dom';

import Navbar from './components/layout/Navbar.js';

import Navigation from './components/Navigation.js';

function App() {
  

  return (
    <div className="App">
    <BrowserRouter>
      <Navbar />
      <Navigation />

    </BrowserRouter>

    </div>
  );
}

export default App;
