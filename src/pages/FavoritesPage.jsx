import React from 'react';
import Card from '../components/Card/Card';

const FavoritesPage = ({ favorites }) => {
    return (
        <div>
            <div className="cards-block">
                <div className="container">
                    <h1 className="headers">Избранное</h1>
                    <div className="cards">
                        {
                            favorites.map(item => (
                                <Card product={item.product} key={item.product.id} />
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FavoritesPage;