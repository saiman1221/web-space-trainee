'use client'
import React, {useEffect, useState} from 'react';
import s from './Instagram.module.scss';

import InstagramCard from "@/components/Instagram/Instagram-card";

const Instagram = () => {
    const [instData, setInstData] = useState(null);

    const fetchData = () => {
        fetch("https://feeds.behold.so/TgjkUzmTLWujXDfkBMef")
            .then(response => {
                return response.json()
            })
            .then(data => {
                setInstData(data)
            })
    }

    useEffect(() => {
        fetchData()
    }, [instData])

    const instagramCardsRender = (instData) => {
        return instData.map((el, id) => <InstagramCard cardData={{image: el.mediaUrl, text: el.caption, width: el.dimensions.width, height: el.dimensions.height, url: el.permalink}} key={id}/>)
    }

    return (
        <div className={s.content}>
            <h2 className={s.title}>Instagram</h2>
            <div className={s.cards}>
                {instData && instagramCardsRender(instData)}
            </div>
        </div>
    );
};

export default Instagram;