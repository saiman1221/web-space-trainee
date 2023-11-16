import React from 'react';
import s from './Carousel-card.module.scss'
import {ICarouselCardProps} from "@/types/types";

const CarouselCard = (props: ICarouselCardProps) => {
    return (
        <div className={s.card}>
            <div className={s.content}>
                <span className={s.score}>{props.cardData.score}</span>
                <span className={s.score_text}>{props.cardData.scoreText}</span>
                <div className={s.text_part}>
                    <h2 className={s.title}>{props.cardData.title}</h2>
                    <p className={s.text}>{props.cardData.text}</p>
                </div>
            </div>
        </div>
    );
};

export default CarouselCard;