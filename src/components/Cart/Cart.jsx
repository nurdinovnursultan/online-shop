import React, { useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import { IconButton } from '@mui/material';
import photo from '../../images/photo4.png';
import { addAndDeleteProductInCart, sumOldPrice, sumTotalCount, sumTotalPrice } from '../../utils';
import CartModal from '../CartModal/CartModal';
import { useDispatch } from 'react-redux';
import { getCart } from '../../redux/productsActions';

const Cart = ({ products }) => {
    const dispatch = useDispatch()
    const [cartModal, setCartModal] = useState(false)
    const [orderInfo, setorderInfo] = useState(false)
    const [count, setCount] = useState(1)
    const totalPrice = sumTotalPrice(products)
    const totalCount = sumTotalCount(products)
    const oldTotalPrice = sumOldPrice(products)
    const sale = oldTotalPrice - totalPrice
    return (
        <div className="cart">
            <div className="cart-products">
                {
                    products.map(item => (
                        <div className="cart-product" key={item.product.id}>
                            <div className="cart-product-remove">
                                <IconButton onClick={() => {
                                    addAndDeleteProductInCart(item.product)
                                    dispatch(getCart())
                                }}>
                                    <CloseIcon />
                                </IconButton>
                            </div>
                            <div className="cart-product-picture">
                                <img src={photo} alt="" />
                            </div>
                            <div className="cart-product-details">
                                <h1>{item.product.title}</h1>
                                <p>Размер: {item.product.size}</p>
                                <p>Цвет: <button style={{ background: item.product.color[item.currentColor] }}>
                                </button></p>
                                <h2>{item.product.newPrice} &#8381; <span>{item.product.oldPrice} &#8381;</span></h2>
                                <div className="product-count">
                                    <button onClick={() => {
                                        if (count < 1) {
                                            return;
                                        } else {
                                            setCount(count - 1)
                                        }
                                    }}>-</button>
                                    <input value={count} onChange={(e) => setCount(e.target.value)} />
                                    <button onClick={() => setCount(count + 1)}>+</button>
                                </div>
                            </div>
                        </div>
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