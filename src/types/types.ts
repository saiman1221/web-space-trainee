import {StaticImageData} from "next/image";

export interface ICarouselCard {
    title: string,
    text: string
}

export interface ICarouselCardProps {
    cardData: ICarouselCard
}

export interface IInstagramCardProps {
    cardData: IInstagramCards
}

export interface IInstagramCards {
    image: string,
    text: string
}

export interface IFooterCardProps {
    cardData: IFooterCards
}

export interface IFooterCards {
    title: string,
    text: string,
    url?: string,
}