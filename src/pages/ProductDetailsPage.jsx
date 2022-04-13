import React, { useEffect } from 'react';
import ProductDetails from '../components/ProductDetails/ProductDetails';
import { useDispatch, useSelector } from 'react-redux';
import { getProductDetails } from '../redux/productsActions';
import { useParams } from 'react-router-dom';
import SimilarProducts from '../components/SimilarProducts/SimilarProducts';

const ProductDetailsPage = () => {
    const dispatch = useDispatch()
    const products = useSelector(state => {
        const { productsReducer } = state
        return productsReducer.products
    })

    const productDetails = useSelector(state => {
        const { productsReducer } = state
        return productsReducer.productDetails
    })

    const { id } = useParams()

    useEffect(() => {
        dispatch(getProductDetails(id))
    }, [])

    const similar = products.filter(item => item.collection === productDetails.collection)
    const similarProducts = similar.slice(0, 5)

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