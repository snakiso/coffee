import React from 'react';
import logo from '../../assets/img/logo.svg'
import s from './Header.module.scss'
import {HeaderNav} from "./header-nav/HeaderNav";

export const Header = () => {

    return (
        <header className={s.header}>
            <div className={s.header__container}>
                <img className={s.header__log} src={logo} alt=""/>
                <HeaderNav/>
                <a className={s.header__link + ' ' + s.header__link_icon} href="#">Menu</a>
            </div>
        </header>
    );
};