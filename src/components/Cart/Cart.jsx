import React, { useState } from 'react';
import { sumOldPrice, sumTotalCount, sumTotalPrice } from '../../utils';
import CartModal from '../CartModal/CartModal';
import CartProduct from '../CartProduct/CartProduct';

const Cart = ({ products }) => {
    const [cartModal, setCartModal] = useState(false)
    const [orderInfo, setorderInfo] = useState(false)
    const totalPrice = sumTotalPrice(products)
    const totalCount = sumTotalCount(products)
    const oldTotalPrice = sumOldPrice(products)
    const sale = oldTotalPrice - totalPrice
    return (
        <div className="cart">
            <div className="cart-products">
                {
                    products.map(item => (
                        <CartProduct product={item} key={item.product.id} />
                    ))
                }
            </div>
            <div className="cart-total">
                <h3>Сумма заказа</h3>
                <div>Количество линеек: <p>{products.length} шт</p></div>
                <div>Количество товаров: <p>{totalCount} шт</p></div>
                <div>Стоимость: <p>{oldTotalPrice} &#8381;</p></div>
                <div>Скидка: <p>{sale} &#8381;</p></div>
                <div className="total-price">Итого к оплате: <p>{totalPrice} &#8381;</p></div>
                <button onClick={() => setCartModal(true)}>Оформить заказ</button>
            </div>
            <div className="cart-total-mobile">
                {
                    orderInfo ? (
                        <>
                            <h3>Сумма заказа</h3>
                            <div>Общее количество: <p>{products.length} линеек ({totalCount} шт)</p></div>
                            <div>Стоимость: <p>{oldTotalPrice} &#8381;</p></div>
                        </>
                    ) : null
                }
                <div className="total-price">Итого к оплате: <p>{totalPrice} &#8381;</p></div>
                <button onClick={() => setorderInfo(!orderInfo)}>Информация о заказе</button>
                <button onClick={() => setCartModal(true)}>Оформить заказ</button>
            </div>
            {cartModal ? <CartModal setCartModal={setCartModal} /> : null}
        </div>
    );
};

export default Cart;