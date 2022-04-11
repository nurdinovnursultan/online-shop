import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import CollectionProducts from '../components/CollectionProducts/CollectionProducts';
import { getCollectionProducts } from '../redux/collectionsActions';

const CollectionProductsPage = () => {
    const dispatch = useDispatch()
    const collection = useSelector(state => {
        const { collectionsReducer } = state
        return collectionsReducer.collectionProducts
    })

    const { id } = useParams()

    useEffect(() => {
        dispatch(getCollectionProducts(id))
    }, [])
    return (
        <div>
            <CollectionProducts collection={collection} />
        </div>
    );
};

export default CollectionProductsPage;