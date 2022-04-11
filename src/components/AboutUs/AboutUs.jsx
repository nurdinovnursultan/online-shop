import React from 'react';

const AboutUs = ({ about }) => {
    return (
        <div className="about-us">
            <div className="container">
                <div className="about-us-left">
                    <div>
                        <img src={about.photo1} alt="photo1" />
                        <img src={about.photo2} alt="photo2" />
                    </div>
                    <div>
                        <img src={about.photo3} alt="photo3" />
                    </div>
                </div>
                <div className="about-us-right">
                    <h2>{about.title}</h2>
                    <p>{about.text}</p>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;