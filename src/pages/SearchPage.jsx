import React, { useEffect } from 'react';
import Card from '../components/Card/Card';
import SimilarProducts from '../components/SimilarProducts/SimilarProducts';
import { useDispatch, useSelector } from 'react-redux';
import { getBestsellers } from '../redux/productsActions';

const SearchPage = ({ searchValue }) => {
    const dispatch = useDispatch()
    const searchProducts = useSelector(state => {
        const { productsReducer } = state
        return productsReducer.searchProducts
    })

    const bestsellers = useSelector(state => {
        const { productsReducer } = state
        return productsReducer.bestsellers
    })

    useEffect(() => {
        dispatch(getBestsellers(5))
    }, [])
    return (
        <div className="cards-block">
            <div className="container">
                <h1 className="headers">Результаты поиска по запросу: {searchValue}</h1>
                <div className="cards">
                    {
                        searchValue && searchProducts ?
                            searchProducts.map(item => (
                                <Card product={item} key={item.id} />
                            )) :
                            <div>
                                <p className="search-error">По вашему запросу ничего не найдено</p>
                                <h1 className="headers">Возможно Вас заинтересует</h1>
                                <SimilarProducts products={bestsellers} />
                            </div>
                    }
                </div>
            </div>
        </div>
    );
};

export default SearchPage;