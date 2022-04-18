import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AboutUsPage from './pages/AboutUsPage';
import CartPage from './pages/CartPage';
import CollectionPage from './pages/CollectionPage';
import CollectionProductsPage from './pages/CollectionProductsPage';
import FavoritesPage from './pages/FavoritesPage';
import FloatingButton from './components/FloatingButton/FloatingButton';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import HelpPage from './pages/HelpPage';
import MainPage from './pages/MainPage';
import NewsPage from './pages/NewsPage';
import ProductDetailsPage from './pages/ProductDetailsPage';
import PublicOfferPage from './pages/PublicOfferPage';
import SearchPage from './pages/SearchPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <FloatingButton />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="about" element={<AboutUsPage />} />
          <Route path="cart" element={<CartPage />} />
          <Route path="collection" element={<CollectionPage />} />
          <Route path="collection/:id" element={<CollectionProductsPage />} />
          <Route path="details/:id" element={<ProductDetailsPage />} />
          <Route path="favorites" element={<FavoritesPage />} />
          <Route path="help" element={<HelpPage />} />
          <Route path="news" element={<NewsPage />} />
          <Route path="offer" element={<PublicOfferPage />} />
          <Route path="search" element={<SearchPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;