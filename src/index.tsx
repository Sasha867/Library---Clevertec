import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { HashRouter, Navigate, Route, Routes } from 'react-router-dom';

import { Footer } from './components/footer/footer';
import { Header } from './components/header/header';
import { BookPage } from './pages/book';
import { MainPage } from './pages/main';
import { OfferPage } from './pages/offer-agreement';
import { store } from './redux/store';

import './index.scss';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <div className='wrapper'>
        <Header />
        <HashRouter>
          <Routes>
            <Route path='/docs/:id' element={<OfferPage />} />
            <Route path='/books/:category/:id' element={<BookPage />} />
            <Route path='/' element={<Navigate to='/books/all' />} />
            <Route path='/books/:category' element={<MainPage />} />
            <Route path='*' element={<Navigate replace={true} to='/' />} />
          </Routes>
        </HashRouter>
        <Footer />
      </div>
    </Provider>
  </React.StrictMode>
);
