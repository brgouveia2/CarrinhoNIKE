import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProductList from './ProductList';
import Checkout from './Checkout';

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/checkout/:id" element={<Checkout />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}


export default App;
