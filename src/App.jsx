import React, { useState } from 'react';
import './globalStyles.css';
import Arrecadation from './components/Arrecadation/index';
import Product from './components/product/Product';
import Hero from './components/hero';
import { Main } from './components/UI';
import About from './components/about';
import ProductModal from './components/productModal';

function App() {
  const [show, setShow] = useState('none');

  return (
    <>
      <Hero />
      <Main>
        <Product setShow={setShow} />
        <Arrecadation />
        <About />
      </Main>
      <ProductModal show={show} setShow={setShow} />
    </>
  );
}

export default App;
