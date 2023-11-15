import React from 'react';
import s from './Footer.module.scss';
import {IFooterCards} from "@/types/types";

import FooterCard from "@/components/Footer/Footer-card";

const Footer = () => {
    const footerCardsData: IFooterCards[] = [
        {
            title: 'Выполнил',
            text: 'Вячеслав Парубцев'
        },
        {
            title: 'Телефон',
            text: '+375 (33) 636-12-27',
            url: 'tel:+375336361227'
        }
    ]

    const cardsRender = (footerCardsData: IFooterCards[]) => {
        return footerCardsData.map((el, id) => <FooterCard cardData={el} key={id}/>)
    }

    return (
        <footer className={s.layout}>
            <div className={'container'}>
                <div className={s.content}>
                    {cardsRender(footerCardsData)}
                </div>
            </div>
        </footer>
    );
};

export default Footer;