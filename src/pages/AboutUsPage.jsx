import React from 'react';
import AboutUs from '../components/AboutUs/AboutUs';

const AboutUsPage = ({ about }) => {
    return (
        <div>
            <AboutUs about={about} />
        </div>
    );
};

export default AboutUsPage;