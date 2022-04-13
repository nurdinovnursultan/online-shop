import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../../redux/productsActions';
import Pagination from '../Pagination/Pagination';
import SimilarProducts from '../SimilarProducts/SimilarProducts';

const CollectionProducts = ({ collection }) => {
    const dispatch = useDispatch()
    const products = useSelector(state => {
        const { productsReducer } = state
        return productsReducer.products
    })

    useEffect(() => {
        dispatch(getProducts())
    }, [])

    const collectionProducts = products.filter(item => item.collection === collection.title)

    const [currentPage, setCurrentPage] = useState(1)
    const postsPerPage = 12
    const indexOfLastPost = currentPage * postsPerPage
    const indexOfFirstPost = indexOfLastPost - postsPerPage
    const newProducts = collectionProducts.slice(indexOfFirstPost, indexOfLastPost)

    const latest = products.filter(item => item.latest === true)
    const latestProducts = latest.slice(0, 5)

    return (
        <div className="cards-block">
            <div className="container">
                <h1 className="headers">{collection.title}</h1>
                <div className="cards">
                    {
                        newProducts.map(product => (
                            <Card product={product} key={product.id} />
                        ))
                    }
                </div>
                <Pagination posts={collectionProducts} postsPerPage={postsPerPage} setCurrentPage={setCurrentPage} />
                <h1 className="headers">Новинки</h1>
                <div className="cards">
                    <SimilarProducts products={latestProducts} />
                </div>
            </div>
        </div>
    );
};

export default CollectionProducts;