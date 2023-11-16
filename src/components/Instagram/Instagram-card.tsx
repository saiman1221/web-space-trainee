import React from 'react';
import s from './Instagram-card.module.scss'
import {IInstagramCardProps} from "@/types/types";

const InstagramCard = (props: IInstagramCardProps) => {
    return (
        <a href={props.cardData.url} className={s.card}>
            <img src={props.cardData.image} alt={'Post photo'}/>
            <div className={s.content}>
                <p>{props.cardData.text}</p>
            </div>
        </a>
    );
};

export default InstagramCard;