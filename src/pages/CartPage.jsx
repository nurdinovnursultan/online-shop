import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Cart from '../components/Cart/Cart';
import SimilarProducts from '../components/SimilarProducts/SimilarProducts';
import { getBestsellers } from '../redux/productsActions';

const CartPage = () => {
    const dispatch = useDispatch()
    const cart = useSelector(state => {
        const { productsReducer } = state
        return productsReducer.cart
    })

    const bestsellers = useSelector(state => {
        const { productsReducer } = state
        return productsReducer.bestsellers
    })

    useEffect(() => {
        dispatch(getBestsellers(5))
    }, [])

    return (
        <div>
            <div className="cards-block">
                <div className="container">
                    {
                        cart.length ?
                            <Cart products={cart} /> : <div>
                                <p className="search-error">У Вас пока нету товаров в корзине</p>
                                <h1 className="headers">Возможно Вас заинтересует</h1>
                                <SimilarProducts products={bestsellers} />
                            </div>
                    }
                </div>
            </div>
        </div>
    );
};

export default CartPage;