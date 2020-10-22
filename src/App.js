import React from 'react';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Card from './components/Card/Card';


import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Footer />
      <Card name="Fruits" price="10"/>
    </div>
  );
}

export default App;
