import React from 'react';
import Help from '../components/Help/Help';

const HelpPage = ({ help }) => {
    return (
        <div className="cards-block">
            <div className="container">
                <div className="help">
                    <div className="help-image">
                        <img src={help.image} alt="" />
                    </div>
                    <div className="help-items">
                        <h1 className="help-header">Помощь</h1>
                        {
                            help.helpItems ? help.helpItems.map(item => (
                                <Help help={item} key={item.id} />
                            )) : null
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HelpPage;