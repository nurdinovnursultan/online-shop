import React, { useState, useEffect } from 'react';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import MessageIcon from '@mui/icons-material/Message';
import CloseIcon from '@mui/icons-material/Close';
import CallIcon from '@mui/icons-material/Call';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import TelegramIcon from '@mui/icons-material/Telegram';
import { createTheme, IconButton, ThemeProvider } from '@mui/material';
import Modal from '../Modal/Modal';
import { useSelector } from 'react-redux';

const theme = createTheme({
    palette: {
        primary: {
            main: "#1d1d1b"
        },
        secondary: {
            main: "#fff"
        }
    }
})

const FloatingButton = () => {
    const links = useSelector(state => {
        const { companyReducer } = state
        return companyReducer.footer
    })
    const [state, setState] = useState(true)
    const [modal, setModal] = useState(false)

    const [changeColor, setChangeColor] = useState(false)

    useEffect(() => {
        document.addEventListener('scroll', scrollHandler)
        return function () {
            document.removeEventListener('scroll', scrollHandler)
        }
    }, [])

    const scrollHandler = (e) => {
        if (e.target.documentElement.scrollHeight - (e.target.documentElement.scrollTop + window.innerHeight) < 200) {
            setChangeColor(true)
        } else {
            setChangeColor(false)
        }
    }

    return (
        <>
            {
                modal ? <Modal modal={setModal} /> : null
            }
            <div className="floating-block">
                {
                    state ? null : (
                        <div className="floating-block-unvisible">
                            <a target="_blank" rel="noopener noreferrer" href={links.telegram}>
                                <button>
                                    <TelegramIcon />
                                </button>
                            </a>
                            <a target="_blank" rel="noopener noreferrer" href={links.whatsapp}>
                                <button>
                                    <WhatsAppIcon />
                                </button>
                            </a>
                            <button onClick={() => setModal(true)}>
                                <CallIcon />
                            </button>
                        </div>
                    )
                }
                <div className="floating-block-visible">
                    <ThemeProvider theme={theme}>
                        <IconButton onClick={() => window.scrollTo(0, 0)}>
                            <KeyboardArrowUpIcon fontSize="large" color={changeColor ? "secondary" : "primary"} />
                        </IconButton>
                        <IconButton onClick={() => setState(!state)}>
                            {state ? (
                                <MessageIcon fontSize="large" color={changeColor ? "secondary" : "primary"} />
                            ) : (
                                <CloseIcon fontSize="large" color={changeColor ? "secondary" : "primary"} />
                            )}
                        </IconButton>
                    </ThemeProvider>
                </div>
            </div>
        </>
    );
};

export default FloatingButton;