import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Breadcrumbs = () => {
    const location = useLocation()
    const breadcrumbs = [
        {
            path: '/about',
            name: 'О нас'
        },
        {
            path: '/cart',
            name: 'Корзина'
        },
        {
            path: '/collection',
            name: 'Коллекции'
        },
        {
            path: '/favorites',
            name: 'Избранное'
        },
        {
            path: '/help',
            name: 'Помощь'
        },
        {
            path: '/news',
            name: 'Новости'
        },
        {
            path: '/offer',
            name: 'Публичная оферта'
        },
        {
            path: '/search',
            name: 'Результаты поиска'
        }
    ]

    const breadcrumb = breadcrumbs.filter(item => item.path === location.pathname)
    return (

        breadcrumb ? (
            <div className="breadcrumbs">
                <Link to="/">Главная</Link>
                {
                    breadcrumb.map(item => (
                        <Link to={item.path}> / {item.name}</Link>
                    ))
                }
            </div>
        ) : null
    );
};

export default Breadcrumbs;