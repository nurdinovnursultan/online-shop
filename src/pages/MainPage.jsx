import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Advantages from '../components/Advantages/Advantages';
import Card from '../components/Card/Card';
import CollectionCard from '../components/CollectionCard/CollectionCard';
import { getCollections } from '../redux/collectionsActions';
import { getProducts } from '../redux/productsActions';

const MainPage = () => {
    const dispatch = useDispatch()
    const products = useSelector(state => {
        const { productsReducer } = state
        return productsReducer.products
    })

    const collections = useSelector(state => {
        const { collectionsReducer } = state
        return collectionsReducer.collections
    })

    useEffect(() => {
        dispatch(getProducts())
        dispatch(getCollections())
    }, [])

    const bestsellers = products.filter(product => product.bestseller === true)
    const newBestsellers = bestsellers.slice(0, 8)

    const latest = products.filter(product => product.latest === true)
    const newLatest = latest.slice(0, 4)

    const [collectionsLimit, setCollectionsLimit] = useState(4)
    const collectionsArray = collections.slice(0, collectionsLimit)

    const setLimit = () => {
        setCollectionsLimit(prevState => prevState + prevState)
    }
    return (
        <div>
            <div className="cards-block">
                <div className="container">
                    <h1 className="headers-main">Хит продаж</h1>
                    <div className="cards">
                        {
                            newBestsellers.map(item => (
                                <Card product={item} key={item.id} />
                            ))
                        }
                    </div>
                    <div className="btn-more">
                        <button className="btn">Ещё</button>
                    </div>
                    <h1 className="headers-main">Новинки</h1>
                    <div className="cards">
                        {
                            newLatest.map(item => (
                                <Card product={item} key={item.id} />
                            ))
                        }
                    </div>
                    <div className="btn-more">
                        <button className="btn">Ещё</button>
                    </div>
                    <h1 className="headers-main">Коллекция</h1>
                    <div className="cards">
                        {
                            collectionsArray.map(item => (
                                <CollectionCard collection={item} key={item.id} />
                            ))
                        }
                    </div>
                    <div className="btn-more">
                        <button className="btn" onClick={() => setLimit()}>Ещё</button>
                    </div>
                    <h1 className="headers-main">Наши преимущества</h1>
                    <Advantages />
                </div>
            </div>
        </div>
    );
};

export default MainPage;