import React from 'react';
import advantagesMoney from '../../images/money.png';
import advantagesTruck from '../../images/truck.png';
import advantagesSupport from '../../images/support.png';
import advantagesShop from '../../images/shop.png';

const Advantages = () => {
    return (
        <div className="advantages">
            <div className="advantages-cards">
                <div className="advantages-cards-picture">
                    <img src={advantagesMoney} alt="" />
                </div>
                <div className="advantages-cards-text">
                    <h3>Удобные способы оплаты</h3>
                    <span>Мы предлагаем возможность безналичной оплаты</span>
                </div>
            </div>
            <div className="advantages-cards">
                <div className="advantages-cards-picture">
                    <img src={advantagesTruck} alt="" />
                </div>
                <div className="advantages-cards-text">
                    <h3>Cвоевремнная доставка</h3>
                    <span>100% гарантия возврата товара - 14 дней на возврат, без скандалов и истерик.</span>
                </div>
            </div>
            <div className="advantages-cards">
                <div className="advantages-cards-picture">
                    <img src={advantagesSupport} alt="" />
                </div>
                <div className="advantages-cards-text">
                    <h3>Профессиональная консультация</h3>
                    <span>Мы проконсультируем и индивидуально подойдем к Вашему заказу </span>
                </div>
            </div>
            <div className="advantages-cards">
                <div className="advantages-cards-picture">
                    <img src={advantagesShop} alt="" />
                </div>
                <div className="advantages-cards-text">
                    <h3>Акции и бонусы для покупателей</h3>
                    <span>Промокоды со скидками для постоянных клиентов, акции на новые позиции</span>
                </div>
            </div>
        </div>
    );
};

export default Advantages;