import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getOfferPage } from '../redux/companyActions';

const PublicOfferPage = () => {
    const dispatch = useDispatch()
    const offer = useSelector(state => {
        const { companyReducer } = state
        return companyReducer.offer
    })

    useEffect(() => {
        dispatch(getOfferPage())
    }, [])

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