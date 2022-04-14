import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Card from '../components/Card/Card';
import SimilarProducts from '../components/SimilarProducts/SimilarProducts';
import { getLatest } from '../redux/productsActions';

const FavoritesPage = ({ favorites }) => {
    const dispatch = useDispatch()
    const latest = useSelector(state => {
        const { productsReducer } = state
        return productsReducer.latest
    })

    useEffect(() => {
        dispatch(getLatest(5))
    }, [])
    return (
        <div>
            <div className="cards-block">
                <div className="container">
                    <h1 className="headers">Избранное</h1>
                    <div className="cards">
                        {
                            favorites.length ?
                                favorites.map(item => (
                                    <Card product={item.product} key={item.product.id} />
                                )) :
                                <div>
                                    <p className="search-error">У Вас пока нету избранных товаров</p>
                                    <h1 className="headers">Возможно Вас заинтересует</h1>
                                    <SimilarProducts products={latest} />
                                </div>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FavoritesPage;