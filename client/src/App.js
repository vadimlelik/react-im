import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom';
import Goodlist from './components/GoodsList/GoodList';
import Layout from './components/Layout/Layout';
import NotFound from './components/NotFound/NotFound'
import Cart from './components/Cart/Cart';
import ProtectedRoute from './components/ProtecdetRoute/ProtectedRoute';
import GoodsLayout from './Layouts/GoodsLayout/GoodsLayout';
import GoodsPage from './page/GoodsPage/GoodsPage';
import AuthLayout from './Layouts/AuthLayout/AuthLayout';
import LoginPage from './page/LoginPage/LoginPage';
import SignUpPage from './page/SignUpPage/SignUpPage';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path='/cart' element={<Cart />} />
        <Route path='*' element={<NotFound />} />
        <Route path='/' element={<ProtectedRoute redirect={'/auth/login'} element={<GoodsLayout />} />}>
          <Route index element={<Goodlist />} />
          <Route path=':goodId' element={<GoodsPage />} />
          <Route path='edit' element={<h1>EditGoods</h1>} />
          <Route path='new-goods' element={<h1>NewGoods</h1>} />
        </Route>
        <Route path='auth' element={<AuthLayout />} >
          {/* <Route index element={<Navigate to={'auth/signUp'} />} /> */}
          <Route path='login' element={<LoginPage />} />
          {/* <Route path='signUp' element={<SignUpPage />} /> */}
          {/* <Route path='*' element={<Navigate to={'auth/signUp'} />} /> */}
        </Route >

      </Routes>
    </Layout>
  );
}

export default App;
