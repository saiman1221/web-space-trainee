import React from 'react';
import s from './Instagram-card.module.scss'
import {IInstagramCardProps} from "@/types/types";

const InstagramCard = (props: IInstagramCardProps) => {
    return (
        <div className={s.card}>
            {props.cardData.text}
        </div>
    );
};

export default InstagramCard;