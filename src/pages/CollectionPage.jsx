import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCollections } from '../redux/collectionsActions';
import CollectionCard from '../components/CollectionCard/CollectionCard';
import Pagination from '../components/Pagination/Pagination';

const CollectionPage = () => {
    const dispatch = useDispatch()
    const [currentPage, setCurrentPage] = useState(1)
    const [limit, setLimit] = useState(8)
    const collections = useSelector(state => {
        const { collectionsReducer } = state
        return collectionsReducer.collections
    })

    useEffect(() => {
        dispatch(getCollections(currentPage, limit))
    }, [currentPage, limit])

    const [width, setWidth] = useState(window.innerWidth)
    const changeWidth = () => {
        setWidth(window.innerWidth)
    }

    useEffect(() => {
        window.addEventListener('resize', changeWidth)
        return function () {
            window.removeEventListener('resize', changeWidth)
        }
    }, [])

    const mobile = width < 769

    useEffect(() => {
        if (mobile) {
            setLimit(4)
        } else {
            setLimit(8)
        }
    }, [mobile])

    return (
        <div>
            <div className="cards-block">
                <div className="container">
                    <h1 className="headers">Коллекции</h1>
                    <div className="cards-mobile">
                        {
                            collections.map(item => (
                                <CollectionCard collection={item} key={item.id} />
                            ))
                        }
                    </div>
                    <Pagination posts={11} postsPerPage={limit} setCurrentPage={setCurrentPage} />
                </div>
            </div>
        </div>
    );
};

export default CollectionPage;