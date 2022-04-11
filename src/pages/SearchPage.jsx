import React from 'react';
import Card from '../components/Card/Card';
import { useSelector } from 'react-redux';

const SearchPage = ({ searchValue }) => {
    const searchProducts = useSelector(state => {
        const { productsReducer } = state
        return productsReducer.searchProducts
    })
    return (
        <div className="cards-block">
            <div className="container">
                <h1 className="headers">Результаты поиска по запросу: {searchValue}</h1>
                <div className="cards">
                    {
                        searchProducts.map(item => (
                            <Card product={item} key={item.id} />
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default SearchPage;