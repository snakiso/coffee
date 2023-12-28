import React from 'react';
import s from "../menu.module.scss";
import {NavLink} from "react-router-dom";
import coffee from "../../../assets/img/tab-coffee.png";
import tea from "../../../assets/img/tab-tea.png";
import deserts from "../../../assets/img/tab-deserts.png";

export const MenuTabs = () => {
    return (
        <div className={s.menu__tabs}>
            <NavLink to={'coffee'}
                     className={({isActive}) => (isActive ? s.menu__tabsItemActive : s.menu__tabsItem)}>
                <img src={coffee} alt=""/>
                <span>Coffee</span>
            </NavLink>
            <NavLink to={'tea'}
                     className={({isActive}) => (isActive ? s.menu__tabsItemActive : s.menu__tabsItem)}>
                <img src={tea} alt=""/>
                <span>Tea</span>
            </NavLink>
            <NavLink to={'deserts'}
                     className={({isActive}) => (isActive ? s.menu__tabsItemActive : s.menu__tabsItem)}>
                <img src={deserts} alt=""/>
                <span>Deserts</span>
            </NavLink>
        </div>
    );
};

