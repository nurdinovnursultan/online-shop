import React, { useEffect } from 'react';
import ProductDetails from '../components/ProductDetails/ProductDetails';
import { useDispatch, useSelector } from 'react-redux';
import { getProductDetails } from '../redux/productsActions';
import { useParams } from 'react-router-dom';
import SimilarProducts from '../components/SimilarProducts/SimilarProducts';
import { getCollectionProducts } from '../redux/collectionsActions';

const ProductDetailsPage = () => {
    const dispatch = useDispatch()
    const productDetails = useSelector(state => {
        const { productsReducer } = state
        return productsReducer.productDetails
    })

    const similarProducts = useSelector(state => {
        const { collectionsReducer } = state
        return collectionsReducer.collectionProducts
    })

    const { id } = useParams()

    useEffect(() => {
        dispatch(getProductDetails(id))
    }, [])

    useEffect(() => {
        dispatch(getCollectionProducts(productDetails.collection, 1, 5))
    }, [productDetails])

    return (
        <div>
            <div className="cards-block">
                <div className="container">
                    <ProductDetails product={productDetails} />
                    <h1 className="headers">Похожие товары</h1>
                    <SimilarProducts products={similarProducts} />
                </div>
            </div>
        </div>
    );
};

export default ProductDetailsPage;