import React from 'react';
import s from './Header.module.scss';

const Header = () => {
    return (
        <header className={s.layout}>
            <div className={'container'}>
                <h1 className={s.logo}>LOGO</h1>
            </div>
        </header>
    );
};

export default Header;