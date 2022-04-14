import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import CollectionProducts from '../components/CollectionProducts/CollectionProducts';
import { getCollection } from '../redux/collectionsActions';

const CollectionProductsPage = () => {
    const dispatch = useDispatch()
    const collection = useSelector(state => {
        const { collectionsReducer } = state
        return collectionsReducer.collection
    })

    const { id } = useParams()

    useEffect(() => {
        dispatch(getCollection(id))
    }, [])
    return (
        <div>
            <CollectionProducts collection={collection} />
        </div>
    );
};

export default CollectionProductsPage;