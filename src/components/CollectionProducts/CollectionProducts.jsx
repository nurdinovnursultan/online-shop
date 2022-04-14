import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';
import { useDispatch, useSelector } from 'react-redux';
import { getCollectionProducts } from '../../redux/collectionsActions';
import Pagination from '../Pagination/Pagination';
import SimilarProducts from '../SimilarProducts/SimilarProducts';
import { getLatest } from '../../redux/productsActions';

const CollectionProducts = ({ collection }) => {
    const dispatch = useDispatch()
    const [currentPage, setCurrentPage] = useState(1)
    const products = useSelector(state => {
        const { collectionsReducer } = state
        return collectionsReducer.collectionProducts
    })

    const latest = useSelector(state => {
        const { productsReducer } = state
        return productsReducer.latest
    })

    useEffect(() => {
        dispatch(getCollectionProducts(collection.title, currentPage, 12))
    }, [collection, currentPage])

    useEffect(() => {
        dispatch(getLatest(5))
    }, [])

    return (
        <div className="cards-block">
            <div className="container">
                <h1 className="headers">{collection.title}</h1>
                <div className="cards">
                    {
                        products.map(product => (
                            <Card product={product} key={product.id} />
                        ))
                    }
                </div>
                <Pagination posts={collection.count} postsPerPage={12} setCurrentPage={setCurrentPage} />
                <h1 className="headers">Новинки</h1>
                <div className="cards">
                    <SimilarProducts products={latest} />
                </div>
            </div>
        </div>
    );
};

export default CollectionProducts;