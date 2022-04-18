import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AboutUs from '../components/AboutUs/AboutUs';
import { getAboutUsPage } from '../redux/companyActions';

const AboutUsPage = () => {
    const dispatch = useDispatch()
    const about = useSelector(state => {
        const { companyReducer } = state
        return companyReducer.aboutUs
    })

    useEffect(() => {
        dispatch(getAboutUsPage())
    }, [])

    return (
        <div>
            <AboutUs about={about} />
        </div>
    );
};

export default AboutUsPage;