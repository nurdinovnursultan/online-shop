import React, { useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import PersonIcon from '@mui/icons-material/Person';
import CallIcon from '@mui/icons-material/Call';
import { IconButton, InputAdornment, TextField } from '@mui/material';
import thank from '../../images/thank.png';

const Modal = (props) => {
    const [modalState, setModalState] = useState(true)
    return (
        <div className="modal">
            {
                modalState ? (
                    <div className="modal-container">
                        <div className="modal-close">
                            <IconButton onClick={() => props.modal(false)}>
                                <CloseIcon />
                            </IconButton>
                        </div>
                        <div className="modal-block">
                            <h3>Если у Вас остались вопросы</h3>
                            <p>Оставьте заявку и мы обязательно Вам перезвоним</p>
                            <div className="modal-form">
                                <TextField
                                    fullWidth
                                    id="outlined-basic"
                                    InputProps={{
                                        startAdornment: (
                                            <InputAdornment position="start">
                                                <PersonIcon />
                                            </InputAdornment>
                                        ),
                                    }}
                                    label="Как к Вам обращаться?"
                                    margin="normal"
                                    variant="outlined" />
                                <TextField
                                    fullWidth
                                    id="outlined-basic"
                                    InputProps={{
                                        startAdornment: (
                                            <InputAdornment position="start">
                                                <CallIcon />
                                            </InputAdornment>
                                        ),
                                    }}
                                    label="Номер телефона"
                                    margin="normal"
                                    variant="outlined" />
                                <button onClick={() => setModalState(false)}>Заказать звонок</button>
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
                                <button onClick={() => props.modal(false)}>Продолжить покупки</button>
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    );
};

export default Modal;