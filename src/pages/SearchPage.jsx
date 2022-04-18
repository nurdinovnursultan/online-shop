import React, { useEffect, useState } from 'react';
import Card from '../components/Card/Card';
import Pagination from '../components/Pagination/Pagination';
import SimilarProducts from '../components/SimilarProducts/SimilarProducts';
import { useDispatch, useSelector } from 'react-redux';
import { getBestsellers } from '../redux/productsActions';
import axios from 'axios';
import { productsAPI } from '../redux/api';

const SearchPage = () => {
    const dispatch = useDispatch()
    const search = useSelector(state => {
        const { productsReducer } = state
        return productsReducer.searchProducts
    })

    const [searchResult, setSearchResult] = useState([])

    const searchFunction = async () => {
        const { data } = await axios(`${productsAPI}?title=${search}`)
        setSearchResult(data)
    }

    useEffect(() => {
        searchFunction()
    }, [search])

    const [page, setPage] = useState(1)
    const [limit, setLimit] = useState(12)
    const indexOfLastPost = page * limit
    const indexOfFirstPost = indexOfLastPost - limit
    const products = searchResult.slice(indexOfFirstPost, indexOfLastPost)

    const bestsellers = useSelector(state => {
        const { productsReducer } = state
        return productsReducer.bestsellers
    })

    useEffect(() => {
        dispatch(getBestsellers(5))
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
                <h1 className="headers">Результаты поиска по запросу: {search}</h1>
                {
                    search && searchResult.length ?
                        <div className="cards-mobile">
                            {
                                products.map(item => (
                                    <Card product={item} key={item.id} />
                                ))
                            }
                            <Pagination posts={searchResult.length} postsPerPage={limit} setCurrentPage={setPage} />
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