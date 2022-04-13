import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addAndDeleteProductInCart, addAndDeleteProductInFavorites } from '../../utils';
import { getCart, getFavorites } from '../../redux/productsActions';

const ProductDetails = ({ product }) => {
    const dispatch = useDispatch()
    const cart = useSelector(state => {
        const { productsReducer } = state
        return productsReducer.cart
    })

    const favorites = useSelector(state => {
        const { productsReducer } = state
        return productsReducer.favorites
    })

    let checkInCart = cart.some(item => item.product.id === product.id)
    let checkInFavorites = favorites.some(item => item.product.id === product.id)

    const navigate = useNavigate()
    const goToCart = () => {
        navigate("/cart")
    }

    const [btn, setBtn] = useState(0)
    return (
        <div className="product-details">
            <div className="product-details-pictures">
                {
                    product.images ? product.images.map((item, index) => (
                        <div key={index}>
                            <img src={item} alt="" />
                        </div>
                    )) : null
                }
            </div>
            <div className="product-details-description">
                <h1>{product.title}</h1>
                <p>Артикул: <span>{product.article}</span></p>
                {
                    product.color ? (
                        <p>Цвет: {product.color.map((item, index) => (
                            <button className={btn === index ? 'active' : ''} key={index} onClick={() => setBtn(index)}>
                                <div style={{ background: item }}></div>
                            </button>
                        ))}</p>
                    ) : null
                }
                <h2>{product.newPrice} &#8381;<span>{product.oldPrice} &#8381;</span></h2>
                <div className="product-description">
                    <p>О товаре:</p>
                    <span>{product.description}</span>
                </div>
                <div className="product-info">
                    <div>
                        <p>Размерный ряд: <span>{product.size}</span></p>
                        <p>Количество в линейке: <span>{product.number}</span></p>
                    </div>
                    <div>
                        <p>Состав ткани: <span>{product.composition}</span></p>
                        <p>Материал: <span>{product.material}</span></p>
                    </div>
                </div>
                <div className="product-buttons">
                    {
                        checkInCart ? <button onClick={() => goToCart()}>Перейти в корзину</button> : (
                            <button onClick={() => {
                                addAndDeleteProductInCart(product, btn)
                                dispatch(getCart())
                            }}>
                                <ShoppingBagOutlinedIcon /> Добавить в корзину
                            </button>
                        )
                    }
                    <button onClick={() => {
                        addAndDeleteProductInFavorites(product)
                        dispatch(getFavorites())
                    }}>
                        {
                            checkInFavorites ? <FavoriteIcon /> : <FavoriteBorderIcon />
                        }
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;