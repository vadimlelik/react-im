import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Goodlist from './components/GoodsList/GoodList';
import Layout from './components/Layout/Layout';
import NotFound from './components/NotFound/NotFound'
import Cart from './components/Cart/Cart';

function App() {
  return (
    <Layout>
      <Routes>
        <Route index element={<Goodlist />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </Layout>
  );
}

export default App;
