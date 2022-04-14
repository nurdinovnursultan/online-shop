import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Advantages from '../components/Advantages/Advantages';
import Card from '../components/Card/Card';
import CollectionCard from '../components/CollectionCard/CollectionCard';
import Slider from '../components/Slider/Slider';
import { getCollections } from '../redux/collectionsActions';
import { getBestsellers, getLatest } from '../redux/productsActions';

const MainPage = () => {
    const dispatch = useDispatch()
    const [bestsellersLimit, setBestsellersLimit] = useState(8)
    const bestsellers = useSelector(state => {
        const { productsReducer } = state
        return productsReducer.bestsellers
    })

    const [latestLimit, setLatestLimit] = useState(4)
    const latest = useSelector(state => {
        const { productsReducer } = state
        return productsReducer.latest
    })

    const [collectionsLimit, setCollectionsLimit] = useState(4)
    const collections = useSelector(state => {
        const { collectionsReducer } = state
        return collectionsReducer.collections
    })

    useEffect(() => {
        dispatch(getBestsellers(bestsellersLimit))
    }, [bestsellersLimit])

    useEffect(() => {
        dispatch(getLatest(latestLimit))
    }, [latestLimit])

    useEffect(() => {
        dispatch(getCollections(1, collectionsLimit))
    }, [collectionsLimit])

    return (
        <div>
            <div className="cards-block">
                <div className="container">
                    <Slider />
                    <h1 className="headers-main">Хит продаж</h1>
                    <div className="cards">
                        {
                            bestsellers.map(item => (
                                <Card product={item} key={item.id} />
                            ))
                        }
                    </div>
                    <div className="btn-more">
                        <button className="btn" onClick={() => setBestsellersLimit(prevState => prevState + prevState)}>Ещё</button>
                    </div>
                    <h1 className="headers-main">Новинки</h1>
                    <div className="cards">
                        {
                            latest.map(item => (
                                <Card product={item} key={item.id} />
                            ))
                        }
                    </div>
                    <div className="btn-more">
                        <button className="btn" onClick={() => setLatestLimit(prevState => prevState + prevState)}>Ещё</button>
                    </div>
                    <h1 className="headers-main">Коллекция</h1>
                    <div className="cards">
                        {
                            collections.map(item => (
                                <CollectionCard collection={item} key={item.id} />
                            ))
                        }
                    </div>
                    <div className="btn-more">
                        <button className="btn" onClick={() => setCollectionsLimit(prevState => prevState + prevState)}>Ещё</button>
                    </div>
                    <h1 className="headers-main">Наши преимущества</h1>
                    <Advantages />
                </div>
            </div>
        </div>
    );
};

export default MainPage;