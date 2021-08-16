import React from 'react';
import './globalStyles.css';
import Arrecadation from './components/Arrecadation/index';
import Product from './components/product/Product';
import Hero from './components/hero';
import Button from './components/UI/Button';

function App() {
  return (
    <>
      <Hero />
      <Arrecadation />
      <Product />
      <Button value="OIEEE" primary />
    </>
  );
}

export default App;
