import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { Badge, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useSelector } from 'react-redux';

const Header = ({ description, cart, favorites, handleChange, searchValue }) => {
    const location = useLocation()

    useEffect(() => {
        window.scrollTo(0, 0);
        setOpenMenu(false)
    }, [location.pathname])

    const navigate = useNavigate()
    const searchProducts = useSelector(state => {
        const { productsReducer } = state
        return productsReducer.searchProducts
    })

    const [openMenu, setOpenMenu] = useState(false)
    const [openSearch, setOpenSearch] = useState(false)

    return (
        <>
            <div className="navbar">
                <div className="container">
                    <div className="navbar-up">
                        <div>
                            <ul>
                                <li>
                                    <Link to="/about">О нас</Link>
                                </li>
                                <li>
                                    <Link to="/collection">Коллекции</Link>
                                </li>
                                <li>
                                    <Link to="/news">Новости</Link>
                                </li>
                            </ul>
                        </div>
                        <div>Тел:
                            <a href={`tel:+${description.phone1}`}>{description.phone1}</a>
                        </div>
                    </div>
                    <div className="navbar-down">
                        <div className="navbar-logo">
                            <Link to="/">
                                <img src={description.logo} alt="logo" />
                            </Link>
                        </div>
                        <div className="navbar-search">
                            <input placeholder="Поиск"
                                onChange={(e) => handleChange(e.target.value)} />
                            <IconButton onClick={() => navigate("/search")}>
                                <SearchIcon />
                            </IconButton>
                            {
                                searchValue ? (
                                    <div className="navbar-search-results">
                                        {
                                            searchProducts ? searchProducts.map(item => (
                                                <div key={item.id}>{item.title}</div>
                                            )) : null
                                        }
                                    </div>
                                ) : null
                            }
                        </div>
                        <div className="navbar-favor">
                            <Badge badgeContent={favorites ? favorites.length : 0} color="error">
                                <FavoriteBorderOutlinedIcon />
                            </Badge>
                            <Link to="/favorites">Избранное</Link>
                        </div>
                        <div className="navbar-cart">
                            <Badge badgeContent={cart ? cart.length : 0} color="error">
                                <ShoppingBagOutlinedIcon />
                            </Badge>
                            <Link to="/cart">Корзина</Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="navbar-mobile">
                <div className="container">
                    <div className="navbar-mobile-header">
                        <IconButton onClick={() => setOpenMenu(true)}>
                            <MenuIcon />
                        </IconButton>
                        <div className="navbar-mobile-logo">
                            <Link to="/">
                                <img src={description.logo} alt="logo" />
                            </Link>
                        </div>
                        <IconButton onClick={() => setOpenSearch(!openSearch)}>
                            {openSearch ? <CloseIcon /> : <SearchIcon />}
                        </IconButton>
                    </div>
                    {
                        openMenu ? (
                            <div className="navbar-mobile-menu">
                                <div className="menu-container">
                                    <div className="menu-header">
                                        <h1>Меню</h1>
                                        <IconButton onClick={() => setOpenMenu(false)}>
                                            <CloseIcon />
                                        </IconButton>
                                    </div>
                                    <div className="menu-body">
                                        <Link to="/about">О нас</Link>
                                        <Link to="/news">Новости</Link>
                                        <Link to="/collection">Коллекции</Link>
                                        <div className="menu-body-icons">
                                            <div>
                                                <FavoriteBorderOutlinedIcon />
                                                <Link to="/favorites">Избранное</Link>
                                            </div>
                                            <div>
                                                <ShoppingBagOutlinedIcon />
                                                <Link to="/cart">Корзина</Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="menu-footer">
                                        <p>Свяжитесь с нами:</p>
                                        <span>Тел: {description.phone1}</span>
                                    </div>
                                </div>
                            </div>
                        ) : null
                    }
                    {
                        openSearch ? (
                            <div className="mobile-search">
                                <input placeholder="Поиск" onChange={(e) => handleChange(e.target.value)} />
                                <IconButton>
                                    <SearchIcon />
                                </IconButton>
                                {
                                    searchValue ? (
                                        <div className="mobile-search-results">
                                            {
                                                searchProducts ? searchProducts.map(item => (
                                                    <div key={item.id}>{item.title}</div>
                                                )) : null
                                            }
                                        </div>
                                    ) : null
                                }
                            </div>
                        ) : null
                    }
                </div>
            </div>
        </>
    );
};

export default Header;