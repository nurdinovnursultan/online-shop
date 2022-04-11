import { IconButton } from '@mui/material';
import React, { useState } from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';

const Help = ({ help }) => {
    const [helpOpen, setHelpOpen] = useState(false)
    return (
        <div className="help-item-title">
            <h2>{help.title}</h2>
            <IconButton onClick={() => setHelpOpen(!helpOpen)}>
                {helpOpen ? <ExpandLessIcon /> : <ExpandMoreIcon />}
            </IconButton>
            {
                helpOpen ? (
                    <div className="help-item-text">
                        <p>{help.text}</p>
                    </div>
                ) : null
            }
        </div>
    );
};

export default Help;