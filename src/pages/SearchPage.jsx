import React, { useEffect, useState } from 'react';
import Card from '../components/Card/Card';
import Pagination from '../components/Pagination/Pagination';
import SimilarProducts from '../components/SimilarProducts/SimilarProducts';
import { useDispatch, useSelector } from 'react-redux';
import { getBestsellers } from '../redux/productsActions';

const SearchPage = ({ searchValue }) => {
    const dispatch = useDispatch()
    const searchProducts = useSelector(state => {
        const { productsReducer } = state
        return productsReducer.searchProducts
    })

    const bestsellers = useSelector(state => {
        const { productsReducer } = state
        return productsReducer.bestsellers
    })

    useEffect(() => {
        dispatch(getBestsellers(5))
    }, [])

    const [currentPage, setCurrentPage] = useState(1)
    const [limit, setLimit] = useState(12)
    const indexOfLastPost = currentPage * limit
    const indexOfFirstPost = indexOfLastPost - limit
    const products = searchProducts.slice(indexOfFirstPost, indexOfLastPost)

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
                <h1 className="headers">Результаты поиска по запросу: {searchValue}</h1>
                {
                    searchValue && searchProducts.length ?
                        <div className="cards-mobile">
                            {
                                products.map(item => (
                                    <Card product={item} key={item.id} />
                                ))
                            }
                            <Pagination posts={searchProducts.length} postsPerPage={limit} setCurrentPage={setCurrentPage} />
                        </div>
                        :
                        <div>
                            <p className="search-error">По вашему запросу ничего не найдено</p>
                            <h1 className="headers">Возможно Вас заинтересует</h1>
                            <SimilarProducts products={bestsellers} />
                        </div>
                }
            </div>
        </div>
    );
};

export default SearchPage;