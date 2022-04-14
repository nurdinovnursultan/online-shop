import React, { useState } from 'react';

const Pagination = ({ posts, postsPerPage, setCurrentPage }) => {
    const pages = []
    for (let i = 1; i <= Math.ceil(posts / postsPerPage); i++) {
        pages.push(i)
    }

    const [btn, setBtn] = useState(1)

    return (
        <div className="pagination">
            {
                pages.map(item => (
                    <button className={btn === item ? 'active' : ''} key={item} onClick={() => {
                        setCurrentPage(item)
                        setBtn(item)
                        window.scrollTo(0, 0)
                    }}>{item}</button>
                ))
            }
        </div>
    );
};

export default Pagination;