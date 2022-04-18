import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAdvantages } from '../../redux/companyActions';

const Advantages = () => {
    const dispatch = useDispatch()
    const advantages = useSelector(state => {
        const { companyReducer } = state
        return companyReducer.advantages
    })

    useEffect(() => {
        dispatch(getAdvantages())
    }, [])

    return (
        <div className="advantages">
            {
                advantages ? advantages.map(item => (
                    <div className="advantages-cards">
                        <div className="advantages-cards-picture">
                            <img src={item.icon} alt="" />
                        </div>
                        <div className="advantages-cards-text">
                            <h3>{item.title}</h3>
                            <span>{item.text}</span>
                        </div>
                    </div>
                )) : null
            }
        </div>
    );
};

export default Advantages;