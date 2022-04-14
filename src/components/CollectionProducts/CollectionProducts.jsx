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
    const [limit, setLimit] = useState(12)
    const products = useSelector(state => {
        const { collectionsReducer } = state
        return collectionsReducer.collectionProducts
    })

    const latest = useSelector(state => {
        const { productsReducer } = state
        return productsReducer.latest
    })

    useEffect(() => {
        dispatch(getCollectionProducts(collection.title, currentPage, limit))
    }, [collection, currentPage, limit])

    useEffect(() => {
        dispatch(getLatest(5))
    }, [])

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
            setLimit(12)
        }
    }, [mobile])

    return (
        <div className="cards-block">
            <div className="container">
                <h1 className="headers">{collection.title}</h1>
                <div className="cards-mobile">
                    {
                        products.map(product => (
                            <Card product={product} key={product.id} />
                        ))
                    }
                </div>
                <Pagination posts={collection.count} postsPerPage={limit} setCurrentPage={setCurrentPage} />
                <h1 className="headers">Новинки</h1>
                <div className="cards">
                    <SimilarProducts products={latest} />
                </div>
            </div>
        </div>
    );
};

export default CollectionProducts;