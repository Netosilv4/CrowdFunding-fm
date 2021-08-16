import React from 'react';
import './globalStyles.css';
import Arrecadation from './components/Arrecadation/index';
import Product from './components/product/Product';
import Hero from './components/hero';
import { Main } from './components/UI';

function App() {
  return (
    <>
      <Hero />
      <Main>
        <Product />
        <Arrecadation />
      </Main>
    </>
  );
}

export default App;
