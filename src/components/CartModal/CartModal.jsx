import { Checkbox, createTheme, IconButton, ThemeProvider } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { addOrder } from '../../utils';
import thank from '../../images/thank.png';

const theme = createTheme({
    palette: {
        primary: {
            main: "#1d1d1b",
        }
    }
})

const CartModal = ({ setCartModal }) => {
    const [orderSuccess, setOrderSuccess] = useState(true)
    const [code, setCode] = useState(0)
    const flags = [
        "https://img.icons8.com/color/2x/kyrgyzstan.png",
        "https://img.icons8.com/color/2x/russian-federation.png",
        "https://img.icons8.com/color/2x/uzbekistan.png",
        "https://img.icons8.com/color/2x/ukraine.png"
    ]

    const [order, setOrder] = useState({})
    const [checkbox, setCheckbox] = useState(false)
    const [button, setButton] = useState(false)

    const createOrder = (e) => {
        let newOrder = {
            ...order,
            [e.target.name]: e.target.value
        }
        setOrder(newOrder)
    }

    useEffect(() => {
        if (order.name && order.surname && order.mail && order.phoneNumber && order.country && order.city && checkbox) {
            setButton(true)
        }
    }, [createOrder])

    const newOrder = () => {
        if (!order.name || !order.surname || !order.mail || !order.phoneNumber || !order.country || !order.city || !checkbox) {
            alert('Заполните все поля!')
            return
        }
        addOrder(order)
        setOrder({})
        setOrderSuccess(false)
    }

    return (
        <div className="cart-modal">
            {
                orderSuccess ? (
                    <div className="cart-modal-container">
                        <div className="cart-modal-header">
                            <h1>Оформление заказа</h1>
                            <IconButton onClick={() => setCartModal(false)}>
                                <CloseIcon />
                            </IconButton>
                        </div>
                        <div className="cart-modal-body">
                            <div>
                                <p>Ваше имя</p>
                                <input name="name" onChange={createOrder} placeholder="Напимер Иван" />
                            </div>
                            <div>
                                <p>Ваша фамилия</p>
                                <input name="surname" onChange={createOrder} placeholder="Напимер Иванов" />
                            </div>
                            <div>
                                <p>Электронная почта</p>
                                <input name="mail" onChange={createOrder} placeholder="example@mail.com" />
                            </div>
                            <div className="phone-input">
                                <p>Ваш номер телефона</p>
                                <input name="phoneNumber" onChange={createOrder} placeholder="Введите номер телефона" />
                                <div className="select-number">
                                    <div className="select-image">
                                        <img src={flags[code]} alt="" />
                                    </div>
                                    <select name="phoneCode" onChange={(e) => {
                                        setCode(e.target.value)
                                        createOrder()
                                    }}>
                                        <option value={0}>+996</option>
                                        <option value={1}>+7</option>
                                        <option value={2}>+998</option>
                                        <option value={3}>+380</option>
                                    </select>
                                </div>
                            </div>
                            <div>
                                <p>Страна</p>
                                <input name="country" onChange={createOrder} placeholder="Введите страну" />
                            </div>
                            <div>
                                <p>Город</p>
                                <input name="city" onChange={createOrder} placeholder="Введите город" />
                            </div>
                        </div>
                        <div className="cart-modal-checkbox">
                            <div className="checkbox">
                                <ThemeProvider theme={theme}>
                                    <Checkbox color="primary" checked={checkbox} onClick={() => setCheckbox(true)} />
                                </ThemeProvider>
                                <span>Согласен с условиями <Link to="/offer">публичной оферты</Link></span>
                            </div>
                            <div className="checkbox-button">
                                <button className={button ? 'active' : 'disabled'} onClick={() => newOrder()}>Заказать</button>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="modal-container-success">
                        <div className="modal-header">
                            <img src={thank} alt="" />
                        </div>
                        <div className="modal-block">
                            <h3>Спасибо!</h3>
                            <p>Ваша заявка была принята ожидайте, скоро Вам перезвонят</p>
                            <div className="modal-form">
                                <button onClick={() => setCartModal(false)}>Продолжить покупки</button>
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    );
};

export default CartModal;