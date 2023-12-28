import React from 'react';
import s from './burgerMenu.module.scss';

import {NavLink} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../store/store";
import {appActions} from "../../app/app-reducer";
import {navItems} from "../../app/navItems";



export const BurgerMenu = () => {

    const menuStatus = useAppSelector(state => state.app.menuIsOpen)
    const dispatch = useAppDispatch()
    const closeMenu = () => {
        dispatch(appActions.changeMenuStatus({menuIsOpen: false}))
    }

    return (
        <div className={menuStatus ? `${s.burgerMenu} ${s.burgerMenu_open}` : s.burgerMenu }>
            <div className={s.burgerMenu__inner}>
                <ul className={s.burgerMenu__list}>
                    {navItems.map((el, i) => <li className={s.header__item} key={i}>
                        <NavLink
                            className={s.burgerMenu__link}
                            to={el.link}
                            onClick={closeMenu}
                        >{el.name}</NavLink>
                    </li>)}
                </ul>
                <NavLink
                    to={'menu/coffee'}
                    className={s.burgerMenu__link + ' ' + s.burgerMenu__link_icon}
                    onClick={closeMenu}>Menu
                </NavLink>
            </div>
        </div>
    );
};

