import React, { useState } from 'react';

const News = ({ news }) => {
    const [newsMore, setNewsMore] = useState(true)
    return (
        <div className="news">
            <div className="news-photo">
                <img src={news.photo} alt="" />
            </div>
            <div className={newsMore ? "news-title" : "news-active"}>
                <h1>{news.title}</h1>
                <p>{news.text}</p>
            </div>
            <div className="news-more">
                <button onClick={() => setNewsMore(!newsMore)}>
                    {newsMore ? 'Читать полностью' : 'Скрыть'}
                </button>
            </div>
        </div>
    );
};

export default News;