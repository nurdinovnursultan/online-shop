import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainPage from './pages/MainPage';
import AboutUsPage from './pages/AboutUsPage';
import CollectionPage from './pages/CollectionPage';
import NewsPage from './pages/NewsPage';
import HelpPage from './pages/HelpPage';
import ProductDetailsPage from './pages/ProductDetailsPage';
import CartPage from './pages/CartPage';
import FavoritesPage from './pages/FavoritesPage';
import CollectionProductsPage from './pages/CollectionProductsPage';
import { getCompanyInformation } from './redux/newsActions';
import { useDispatch, useSelector } from 'react-redux';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import PublicOfferPage from './pages/PublicOfferPage';
import SearchPage from './pages/SearchPage';
import Slider from './components/Slider/Slider';
import { getCart, getFavorites, searchProducts } from './redux/productsActions';
import FloatingButton from './components/FloatingButton/FloatingButton';

function App() {
  const dispatch = useDispatch()
  const company = useSelector(state => {
    const { newsReducer } = state
    return newsReducer.companyInformation
  })

  const cart = useSelector(state => {
    const { productsReducer } = state
    return productsReducer.cart
  })

  const favorites = useSelector(state => {
    const { productsReducer } = state
    return productsReducer.favorites
  })

  useEffect(() => {
    dispatch(getCompanyInformation())
    dispatch(getCart())
    dispatch(getFavorites())
  }, [])

  const [searchValue, setSearchValue] = useState('')

  const handleChange = (value) => {
    setSearchValue(value)
  }

  useEffect(() => {
    dispatch(searchProducts(searchValue))
  }, [searchValue])

  return (
    company ? company.map(item => (
      <div className="App" key={item.id}>
        <BrowserRouter>
          <Header description={item.info}
            cart={cart}
            favorites={favorites}
            handleChange={handleChange}
            searchValue={searchValue} />
          <FloatingButton links={item.info} />
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="about" element={<AboutUsPage about={item.about} />} />
            <Route path="cart" element={<CartPage cart={cart} />} />
            <Route path="collection" element={<CollectionPage />} />
            <Route path="collection/:id" element={<CollectionProductsPage />} />
            <Route path="details/:id" element={<ProductDetailsPage />} />
            <Route path="favorites" element={<FavoritesPage favorites={favorites} />} />
            <Route path="help" element={<HelpPage help={item.help} />} />
            <Route path="news" element={<NewsPage />} />
            <Route path="offer" element={<PublicOfferPage offer={item.offer} />} />
            <Route path="search" element={<SearchPage searchValue={searchValue} />} />
            <Route path="slider" element={<Slider />} />
          </Routes>
          <Footer description={item.info} />
        </BrowserRouter>
      </div>
    )) : null
  );
}

export default App;