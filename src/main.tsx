import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from './store';

// pages
import HomePage from './pages/HomePage/HomePage';
import LoginPage from './pages/LoginPage/LoginPage';
import RegisterPage from './pages/RegisterPage/RegisterPage';
import SearchPage from './pages/SearchPage/SearchPage';
import UserPage from './pages/UserPage/UserPage';
import CartPage from './pages/CartPage/CartPage';

import Layout from './components/Layout/Layout';
import Account from './components/Personal/ChildComponents/Account/Account';
import Settings from './components/Personal/ChildComponents/Settings/Settings';
import Order from './components/Personal/ChildComponents/Order/Order';

import './index.scss';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <BrowserRouter>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="login" element={<LoginPage />} />
            <Route path="register" element={<RegisterPage />} />
            <Route path="search" element={<SearchPage />} />
            <Route path="user" element={<UserPage />}>
              <Route index element={<Order />} />
              <Route path="account" element={<Account />} />
              <Route path="settings" element={<Settings />} />
            </Route>
            <Route path="cart" element={<CartPage />}>
              {/* <Route path='favourites' element{} /> */}
            </Route>
          </Route>
        </Routes>
      </PersistGate>
    </Provider>
  </BrowserRouter>
);
