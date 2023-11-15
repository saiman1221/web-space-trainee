import React from 'react';
import s from './Feedback.module.scss';
import YandexMap from "@/components/Map/YandexMap";

const Feedback = () => {
    return (
        <div className={s.layout}>
            <YandexMap/>
            <div className={s.content}>
                <div className={s.form}>
                    <h2 className={s.title}>Обратный звонок</h2>
                    <div className={s.inputs}>
                        <input type="text" placeholder={'Ваше имя'}/>
                        <input type="text" placeholder={'Номер телефона'}/>
                    </div>
                    <button className={s.submit}>Отправить</button>
                </div>
            </div>
        </div>
    );
};

export default Feedback;