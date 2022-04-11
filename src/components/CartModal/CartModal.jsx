import { Button, Checkbox, createTheme, FormControl, FormControlLabel, FormHelperText, IconButton, OutlinedInput, ThemeProvider } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import React from 'react';
import { Link } from 'react-router-dom';

const theme = createTheme({
    palette: {
        primary: {
            main: "#1d1d1b",
        }
    }
})

const CartModal = ({ setCartModal }) => {
    return (
        <div className="cart-modal">
            <div className="cart-modal-container">
                <div className="cart-modal-header">
                    <h1>Оформление заказа</h1>
                    <IconButton onClick={() => setCartModal(false)}>
                        <CloseIcon />
                    </IconButton>
                </div>
                <div className="cart-modal-body">
                    <FormControl variant="outlined">
                        <FormHelperText id="outlined-weight-helper-text">Ваше имя</FormHelperText>
                        <OutlinedInput
                            id="outlined-adornment-weight"
                            aria-describedby="outlined-weight-helper-text"
                            inputProps={{
                                'aria-label': 'weight',
                            }}
                            placeholder="Например Иван"
                        />
                    </FormControl>
                    <FormControl variant="outlined">
                        <FormHelperText id="outlined-weight-helper-text">Ваша фамилия</FormHelperText>
                        <OutlinedInput
                            id="outlined-adornment-weight"
                            aria-describedby="outlined-weight-helper-text"
                            inputProps={{
                                'aria-label': 'weight',
                            }}
                            placeholder="Например Иванов"
                        />
                    </FormControl>
                    <FormControl variant="outlined">
                        <FormHelperText id="outlined-weight-helper-text">Электронная почта</FormHelperText>
                        <OutlinedInput
                            id="outlined-adornment-weight"
                            aria-describedby="outlined-weight-helper-text"
                            inputProps={{
                                'aria-label': 'weight',
                            }}
                            placeholder="example@mail.com"
                        />
                    </FormControl>
                    <FormControl variant="outlined">
                        <FormHelperText id="outlined-weight-helper-text">Ваш номер телефона</FormHelperText>
                        <OutlinedInput
                            id="outlined-adornment-weight"
                            aria-describedby="outlined-weight-helper-text"
                            inputProps={{
                                'aria-label': 'weight',
                            }}
                            placeholder="Введите номер телефона"
                        />
                    </FormControl>
                    <FormControl variant="outlined">
                        <FormHelperText id="outlined-weight-helper-text">Страна</FormHelperText>
                        <OutlinedInput
                            id="outlined-adornment-weight"
                            aria-describedby="outlined-weight-helper-text"
                            inputProps={{
                                'aria-label': 'weight',
                            }}
                            placeholder="Введите страну"
                        />
                    </FormControl>
                    <FormControl variant="outlined">
                        <FormHelperText id="outlined-weight-helper-text">Город</FormHelperText>
                        <OutlinedInput
                            id="outlined-adornment-weight"
                            aria-describedby="outlined-weight-helper-text"
                            inputProps={{
                                'aria-label': 'weight',
                            }}
                            placeholder="Введите город"
                        />
                    </FormControl>
                </div>
                <div className="cart-modal-checkbox">
                    <ThemeProvider theme={theme}>
                        <FormControlLabel control={<Checkbox color="primary" />} label="Согласен с условиями" />
                        <Link to="/offer">публичной оферты</Link>
                        <Button variant="contained" color="primary" >Заказать</Button>
                    </ThemeProvider>
                </div>
            </div>
        </div>
    );
};

export default CartModal;