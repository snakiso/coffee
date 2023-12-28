import React from 'react';
import s from '../Header.module.scss'
import {NavLink} from "react-router-dom";
import {navItems} from "../../../app/navItems";

export const HeaderNav = () => {

    return (
        <nav>
            <ul className={s.header__list}>
                {navItems.map((el, i) => <li className={s.header__item} key={i}>
                    <NavLink className={s.header__link} to={el.link}>{el.name}</NavLink>
                </li>)}
            </ul>
        </nav>
    );
};