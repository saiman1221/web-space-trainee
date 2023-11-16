'use client'
import React, {createRef, SyntheticEvent, useState} from 'react';
import s from './Feedback.module.scss';
import emailjs from "@emailjs/browser";

import YandexMap from "@/components/Map/YandexMap";
import Image from "next/image";

import checkbox from '@public/checkbox.svg';
import marker from '@public/marker.svg';
import classNames from "classnames";

const Feedback = () => {
    const [userName, setUserName] = useState<string>('');
    const [userPhone, setUserPhone] = useState<string>('')

    const [checkbox, setCheckbox] = useState<boolean>(false)

    const form = createRef();


    const sendEmail = (e: SyntheticEvent) => {
        e.preventDefault();

        checkbox && emailjs.sendForm('service_2u15sxt', 'template_pufalpd', form.current, 'KFssP99hWmylhvCrU')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };

    const buttonClassName = classNames([s.button as string], {
        [s.active]: checkbox
    })

    const checkboxButton = (e) => {
        e.preventDefault();
        setCheckbox(!checkbox)
    }

    return (
        <div className={s.layout}>
            <YandexMap/>
            <div className={s.content}>
                <form className={s.form} ref={form} onSubmit={sendEmail}>
                    <h2 className={s.title}>Обратный звонок</h2>
                    <div className={s.inputs}>
                        <input type="text" name="user_name" placeholder={'Ваше имя'} value={userName} onChange={(e) => setUserName(e.target.value)} required={true}/>
                        <input type="text" name="user_phone" placeholder={'Номер телефона'} value={userPhone} onChange={(e) => setUserPhone(e.target.value)} required={true}/>
                    </div>
                    <div className={s.checkbox}>
                        <button className={buttonClassName} onClick={checkboxButton}><Image src={marker} alt={'Marker'}/></button><span className={s.text}>Согласие на обработку персональных данных</span>
                    </div>
                    <button className={s.submit} type={'submit'} value="Send">Отправить</button>
                </form>
            </div>
        </div>
    );
};

export default Feedback;