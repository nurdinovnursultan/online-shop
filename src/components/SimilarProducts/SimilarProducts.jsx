import React from 'react';
import Card from '../../components/Card/Card';

const SimilarProducts = ({ products }) => {
    return (
        <div className="cards-similar">
            {
                products.map(item => (
                    <Card product={item} key={item.id} />
                ))
            }
        </div>
    );
};

export default SimilarProducts;