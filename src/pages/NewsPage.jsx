import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import News from '../components/News/News';
import { getNews } from '../redux/newsActions';

const NewsPage = () => {
    const dispatch = useDispatch()
    const news = useSelector(state => {
        const { newsReducer } = state
        return newsReducer.news
    })

    useEffect(() => {
        dispatch(getNews())
    }, [])
    return (
        <div>
            <div className="cards-block">
                <div className="container">
                    <h1 className="headers">Новости</h1>
                    {
                        news ? (
                            news.map(item => (
                                <News news={item} key={item.id} />
                            ))
                        ) : null
                    }
                </div>
            </div>
        </div>
    );
};

export default NewsPage;