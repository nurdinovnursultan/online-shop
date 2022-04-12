import React, { useEffect, useState } from 'react';
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

    const [newsPerPage, setNewsPerPage] = useState(8)
    const [fetch, setFetch] = useState(false)

    if (fetch && newsPerPage <= news.length) {
        setNewsPerPage(prevState => prevState + prevState)
    }

    useEffect(() => {
        document.addEventListener('scroll', scrollHandler)
        return function () {
            document.removeEventListener('scroll', scrollHandler)
        }
    }, [])

    const scrollHandler = (e) => {
        if (e.target.documentElement.scrollHeight - (e.target.documentElement.scrollTop + window.innerHeight) < 150) {
            setFetch(true)
            console.log(fetch);
        }
    }

    const newsArray = news.slice(0, newsPerPage)

    return (
        <div>
            <div className="cards-block">
                <div className="container">
                    <h1 className="headers">Новости</h1>
                    {
                        news ? (
                            newsArray.map(item => (
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