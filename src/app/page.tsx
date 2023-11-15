import React from "react";
import s from './page.module.css';

import Header from "@/components/Header/Header";
import Carousel from "@/components/Carousel/Carousel";
import Instagram from "@/components/Instagram/Instagram";
import Footer from "@/components/Footer/Footer";
import Feedback from "@/components/Feedback/Feedback";

const Home = () => {
    return (
        <div className={'home'}>
            <Header/>
            <Carousel/>
            <div className={'container'}>
                <Instagram/>
            </div>
            <Feedback/>
            <Footer/>
        </div>
    )
}

export default Home;