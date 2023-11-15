import React from 'react';
import s from './Footer-card.module.scss'
import {IFooterCardProps} from "@/types/types";

const FooterCard = (props: IFooterCardProps) => {
    return (
        <div className={s.card}>
            <h2 className={s.title}>{props.cardData.title}</h2>
            {props.cardData.url ? <a href={props.cardData.url} className={s.text}>{props.cardData.text}</a> : <p className={s.text}>{props.cardData.text}</p>}
        </div>
    );
};

export default FooterCard;