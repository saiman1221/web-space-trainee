import React from 'react';
import s from './Carousel-card.module.scss'
import {ICarouselCardProps} from "@/types/types";

const CarouselCard = (props: ICarouselCardProps) => {
    return (
        <div className={s.card}>
            <div className={s.content}>
                <p>{props.cardData.title}</p>
                <p>{props.cardData.text}</p>
            </div>
        </div>
    );
};

export default CarouselCard;