import React, { useState } from 'react';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import MessageIcon from '@mui/icons-material/Message';
import CloseIcon from '@mui/icons-material/Close';
import CallIcon from '@mui/icons-material/Call';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import TelegramIcon from '@mui/icons-material/Telegram';
import { IconButton } from '@mui/material';
import Modal from '../Modal/Modal';

const FloatingButton = ({ links }) => {
    const goUp = () => {
        window.scrollTo(0, 0);
    }

    const [state, setState] = useState(true)
    const [modal, setModal] = useState(false)
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
                    <IconButton onClick={() => goUp()}>
                        <KeyboardArrowUpIcon fontSize="large" />
                    </IconButton>
                    <IconButton onClick={() => setState(!state)}>
                        {state ? <MessageIcon fontSize="large" /> : <CloseIcon fontSize="large" />}
                    </IconButton>
                </div>
            </div>
        </>
    );
};

export default FloatingButton;