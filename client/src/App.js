import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Goodlist from './components/GoodsList/GoodList';
import Layout from './components/Layout/Layout';
import NotFound from './components/NotFound/NotFound'
import Cart from './components/Cart/Cart';
import ProtectedRoute from './components/ProtecdetRoute/ProtectedRoute';
import GoodsLayout from './Layouts/GoodsLayout/GoodsLayout';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path='/cart' element={<Cart />} />
        <Route path='*' element={<NotFound />} />

        <Route path='/' element={<ProtectedRoute redirect={'/auth/login'} element={<GoodsLayout />} />}>
          <Route index element={<Goodlist />} />
        </Route>
      </Routes>
    </Layout>
  );
}

export default App;
