export interface ICarouselCardProps {
    cardData: ICarouselCard
}

export interface ICarouselCard {
    title: string,
    text: string,
    score: string,
    scoreText: string
}

export interface IInstagramCardProps {
    cardData: IInstagramCards
}

export interface IInstagramCards {
    image: string,
    text: string,
    width: number,
    height: number,
    url: string
}

export interface IFooterCardProps {
    cardData: IFooterCards
}

export interface IFooterCards {
    title: string,
    text: string,
    url?: string,
}