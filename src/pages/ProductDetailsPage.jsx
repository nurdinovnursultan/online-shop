import React, { useEffect } from 'react';
import ProductDetails from '../components/ProductDetails/ProductDetails';
import { useDispatch, useSelector } from 'react-redux';
import { getProductDetails } from '../redux/productsActions';
import { useParams } from 'react-router-dom';

const ProductDetailsPage = () => {
    const dispatch = useDispatch()
    const productDetails = useSelector(state => {
        const { productsReducer } = state
        return productsReducer.productDetails
    })

    const { id } = useParams()

    useEffect(() => {
        dispatch(getProductDetails(id))
    }, [])
    return (
        <div>
            <div className="cards-block">
                <div className="container">
                    <ProductDetails product={productDetails} />
                </div>
            </div>
        </div>
    );
};

export default ProductDetailsPage;