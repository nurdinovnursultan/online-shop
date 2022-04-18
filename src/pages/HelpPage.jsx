import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Help from '../components/Help/Help';
import { getHelpPage } from '../redux/companyActions';

const HelpPage = () => {
    const dispatch = useDispatch()
    const help = useSelector(state => {
        const { companyReducer } = state
        return companyReducer.help
    })

    useEffect(() => {
        dispatch(getHelpPage())
    }, [])

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