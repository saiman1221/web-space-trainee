'use client'
import React, {useEffect} from 'react';
import s from './Instagram.module.scss'
import {IInstagramCards} from "@/types/types";
// import Instafeed from 'instafeed.js'

import InstagramCard from "@/components/Instagram/Instagram-card";

const Instagram = () => {
    const instagramData: IInstagramCards[] = [
        {
            image: '',
            text: 'text'
        },
        {
            image: '',
            text: 'text'
        },
        {
            image: '',
            text: 'text'
        },
        {
            image: '',
            text: 'text'
        },
        {
            image: '',
            text: 'text'
        },
        {
            image: '',
            text: 'text'
        },
        {
            image: '',
            text: 'text'
        },
        {
            image: '',
            text: 'text'
        },
    ]

    const instagramCardsRender = (instagramData: IInstagramCards[]) => {
        return instagramData.map((el, id) => <InstagramCard cardData={el} key={id}/>)
    }

    // useEffect(() => {
    //     let feed = new Instafeed({
    //         accessToken: ''
    //     });
    //     feed.run();
    // })

    return (
        <div className={s.content}>
            <h2 className={s.title}>Instagram</h2>
            <div className={s.cards}>
                {instagramCardsRender(instagramData)}
            </div>
            <div id="instafeed"></div>
        </div>
    );
};

export default Instagram;