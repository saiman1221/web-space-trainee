import React from "react";
import s from './page.module.css';

import Header from "@/components/Header/Header";
import Carousel from "@/components/Carousel/Carousel";
import Instagram from "@/components/Instagram/Instagram";
import Footer from "@/components/Footer/Footer";

const Home = () => {
    return (
        <div className={'home'}>
            <Header/>
            <Carousel/>
            <div className={'container'}>
                <Instagram/>
            </div>
            <Footer/>
        </div>
    )
}

export default Home;