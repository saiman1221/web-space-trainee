'use client'
import React, {useState} from 'react';
import s from './Carousel.module.scss';
import {ICarouselCard} from "@/types/types";
import classNames from "classnames";

import CarouselCard from "@/components/Carousel/Carousel-card";

const Carousel = () => {
    const carouselData: ICarouselCard[] = [
        {
            title: 'Сложность задания',
            text: 'Миссия с вертолетиком была легче..',
            score: '5',
            scoreText: 'звезд'
        },
        {
            title: 'Потребовалось на тестовое задание:',
            text: 'Справился быстро, забыл пообедать',
            score: '9',
            scoreText: 'часов'
        },
        {
            title: 'Оценка дизайнеру:',
            text: 'Не заслужил,  там криво, там непонятно',
            score: '3',
            scoreText: 'и не более'
        }
    ]

    const slidesRender = (carouselData: ICarouselCard[]) => {
        return carouselData.map((el, id) => <CarouselCard cardData={el} key={id}/>)
    }

    const markersRender = (carouselData: ICarouselCard[]) => {
        return carouselData.map((el, id) => {
            const buttonClassName = classNames([s.button as string], {
                [s.active as string]: id === position
            })

            return(
                <button className={buttonClassName} key={id} onClick={() => setPosition(id)}/>
            )
        })
    }

    const [position, setPosition] = useState<number>(0)

    return (
        <div className={s.carousel}>
            <div className={s.slides}>
                <div className={s.track} style={{transform: `translateY(-${position * 100}%)`}}>
                    {slidesRender(carouselData)}
                </div>
            </div>
            <div className={s.markers}>
                {markersRender(carouselData)}
            </div>
        </div>
    );
};

export default Carousel;