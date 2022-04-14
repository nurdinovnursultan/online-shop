import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCollections } from '../redux/collectionsActions';
import CollectionCard from '../components/CollectionCard/CollectionCard';
import Pagination from '../components/Pagination/Pagination';

const CollectionPage = () => {
    const dispatch = useDispatch()
    const [currentPage, setCurrentPage] = useState(1)
    const collections = useSelector(state => {
        const { collectionsReducer } = state
        return collectionsReducer.collections
    })

    useEffect(() => {
        dispatch(getCollections(currentPage, 8))
    }, [currentPage])

    return (
        <div>
            <div className="cards-block">
                <div className="container">
                    <h1 className="headers">Коллекции</h1>
                    <div className="cards">
                        {
                            collections.map(item => (
                                <CollectionCard collection={item} key={item.id} />
                            ))
                        }
                    </div>
                    <Pagination posts={11} postsPerPage={8} setCurrentPage={setCurrentPage} />
                </div>
            </div>
        </div>
    );
};

export default CollectionPage;