import React, { useEffect, useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import CallOutlinedIcon from '@mui/icons-material/CallOutlined';
import { IconButton, ThemeProvider } from '@mui/material';
import thank from '../../images/thank.png';
import { createTheme } from '@mui/system';
import { addFeedback } from '../../utils';

const theme = createTheme({
    palette: {
        primary: {
            main: "#bebebe"
        }
    }
})

const Modal = ({ modal }) => {
    const [modalState, setModalState] = useState(true)
    const [user, setUser] = useState({})
    const [button, setButton] = useState(false)

    const handleChange = (e) => {
        let newUser = {
            ...user,
            [e.target.name]: e.target.value
        }
        setUser(newUser)
    }

    useEffect(() => {
        if (user.name && user.phone) {
            setButton(true)
        }
    }, [handleChange])

    const newFeedback = () => {
        if (!user.name || !user.phone) {
            alert('Заполните все поля!')
            return
        }
        addFeedback(user)
        setUser({})
        setModalState(false)
    }
    return (
        <div className="modal">
            {
                modalState ? (
                    <div className="modal-container">
                        <div className="modal-close">
                            <IconButton onClick={() => modal(false)}>
                                <CloseIcon />
                            </IconButton>
                        </div>
                        <div className="modal-block">
                            <h3>Если у Вас остались вопросы</h3>
                            <p>Оставьте заявку и мы обязательно Вам перезвоним</p>
                            <div className="modal-form">
                                <ThemeProvider theme={theme}>
                                    <div>
                                        <input onChange={handleChange} name="name" placeholder="Как к Вам обращаться?" />
                                        <div className="modal-form-icons"><PersonOutlineIcon color="primary" /></div>
                                    </div>
                                    <div>
                                        <input onChange={handleChange} name="phone" placeholder="Номер телефона" />
                                        <div className="modal-form-icons"><CallOutlinedIcon color="primary" /></div>
                                    </div>
                                </ThemeProvider>
                                <button className={button ? "active" : "disabled"} onClick={() => newFeedback()}>Заказать звонок</button>
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
                                <button onClick={() => modal(false)}>Продолжить покупки</button>
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    );
};

export default Modal;