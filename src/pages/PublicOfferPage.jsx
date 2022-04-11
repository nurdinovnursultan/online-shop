import React from 'react';

const PublicOfferPage = ({ offer }) => {
    return (
        <div className="cards-block">
            <div className="container">
                <h1 className="headers">{offer.title}</h1>
                <div className="text">
                    <p>{offer.text}</p>
                </div>
            </div>
        </div>
    );
};

export default PublicOfferPage;