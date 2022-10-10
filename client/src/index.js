import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { createStore } from './store/createStore';

const root = ReactDOM.createRoot(document.getElementById('root'));

const store = createStore()
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);