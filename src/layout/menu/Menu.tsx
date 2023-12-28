import React from 'react';
import s from './menu.module.scss'
import {MenuTabs} from "./menu-tabs/MenuTabs";
import {MenuList} from "./menu-list/MenuList";
import {Popup} from "../../components/popup/Popup";
import {useAppSelector} from "../../store/store";
import {Background} from "../../components/background/Background";

export const Menu = () => {

    const cardData = useAppSelector(state => state.card)

    return (
        <section className={s.menu}>
            {cardData.id && <Background/>}
            <div className={s.menu__inner}>
                <h1 className={s.menu__title}>Behind each of our cups hides an <span>amazing surprise</span></h1>
                <MenuTabs/>
                <MenuList/>
            </div>
            {cardData.id && <Popup/>}
        </section>
    );
};

