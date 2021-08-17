import React from 'react';
import './globalStyles.css';
import Arrecadation from './components/Arrecadation/index';
import Product from './components/product/Product';
import Hero from './components/hero';
import { Main } from './components/UI';
import About from './components/about';

function App() {
  return (
    <>
      <Hero />
      <Main>
        <Product />
        <Arrecadation />
        <About />
      </Main>
    </>
  );
}

export default App;
