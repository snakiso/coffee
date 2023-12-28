import React from 'react';
import s from '../Header.module.scss'
export const HeaderNav = () => {
    const navItems = ['Favorite coffee', 'About', 'Mobile app', 'Contact us']
    return (
        <nav>
            <ul className={s.header__list}>
                {navItems.map(el => <li className={s.header__item}><a className={s.header__link} href="#">{el}</a></li>)}
            </ul>
        </nav>
    );
};