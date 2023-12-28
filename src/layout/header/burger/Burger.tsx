import React from 'react';
import s from './burger.module.scss'
import {useAppDispatch, useAppSelector} from "../../../store/store";
import {appActions} from "../../../app/app-reducer";



export const Burger = () => {

    const menuStatus = useAppSelector(state => state.app.menuIsOpen)
    const dispatch = useAppDispatch()

    return (
        <button className={s.burger} onClick={() => {dispatch(appActions.changeMenuStatus({menuIsOpen: !menuStatus}))}}>
            <div className={s.burger__inner}>
                <span className={s.burger__line}></span>
                <span className={s.burger__line}></span>
            </div>
        </button>
    );
};

