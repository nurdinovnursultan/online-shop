import React from 'react';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Link } from 'react-router-dom';

const CollectionCard = ({ collection }) => {
    return (
        <div className="collection-card">
            <Link to={`/collection/${collection.id}`}>
                <div className="collection-photo">
                    <img src={collection.photo} alt="" />
                    <div className="collection-title">
                        {collection.title}
                    </div>
                </div>
                <div className="collection-button">
                    <span>Смотреть все</span>
                    <ArrowForwardIosIcon fontSize='small' />
                </div>
            </Link>
        </div>
    );
};

export default CollectionCard;