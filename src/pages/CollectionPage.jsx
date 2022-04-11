import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCollections } from '../redux/collectionsActions';
import CollectionCard from '../components/CollectionCard/CollectionCard';
import Pagination from '../components/Pagination/Pagination';

const CollectionPage = () => {
    const dispatch = useDispatch()
    const collections = useSelector(state => {
        const { collectionsReducer } = state
        return collectionsReducer.collections
    })

    useEffect(() => {
        dispatch(getCollections())
    }, [])

    const [currentPage, setCurrentPage] = useState(1)
    const postsPerPage = 8
    const indexOfLastPost = currentPage * postsPerPage
    const indexOfFirstPost = indexOfLastPost - postsPerPage
    const collectionsArray = collections.slice(indexOfFirstPost, indexOfLastPost)

    return (
        <div>
            <div className="cards-block">
                <div className="container">
                    <h1 className="headers">Коллекции</h1>
                    <div className="cards">
                        {
                            collectionsArray.map(item => (
                                <CollectionCard collection={item} key={item.id} />
                            ))
                        }
                    </div>
                    <Pagination posts={collections} postsPerPage={postsPerPage} setCurrentPage={setCurrentPage} />
                </div>
            </div>
        </div>
    );
};

export default CollectionPage;