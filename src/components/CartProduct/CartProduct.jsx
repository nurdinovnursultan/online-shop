import { IconButton } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addAndDeleteProductInCart, changeCountProduct } from '../../utils';
import { getCart } from '../../redux/productsActions';
import CloseIcon from '@mui/icons-material/Close';

const CartProduct = ({ product }) => {
    const dispatch = useDispatch()
    const [count, setCount] = useState(1)

    useEffect(() => {
        changeCountProduct(count, product.product.id)
        dispatch(getCart())
    }, [count])

    return (
        <div className="cart-product">
            <div className="cart-product-remove">
                <IconButton onClick={() => {
                    addAndDeleteProductInCart(product.product)
                    dispatch(getCart())
                }}>
                    <CloseIcon />
                </IconButton>
            </div>
            <div className="cart-product-picture">
                <img src={product.product.images[0]} alt="" />
            </div>
            <div className="cart-product-details">
                <h1>{product.product.title}</h1>
                <p>Размер: {product.product.size}</p>
                <p>Цвет: <button style={{ background: product.product.color[product.currentColor] }}>
                </button></p>
                {
                    product.newPrice ? (
                        <h2>{product.newPrice} &#8381; <span>{product.product.price} &#8381;</span></h2>
                    ) : (
                        <h2>{product.product.price} &#8381;</h2>
                    )
                }
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
        </div>);
};

export default CartProduct;