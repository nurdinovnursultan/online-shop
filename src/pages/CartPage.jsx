import React from 'react';
import Cart from '../components/Cart/Cart';

const CartPage = ({ cart }) => {
    return (
        <div>
            <div className="cards-block">
                <div className="container">
                    <Cart products={cart} />
                </div>
            </div>
        </div>
    );
};

export default CartPage;