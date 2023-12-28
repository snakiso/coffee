import React from 'react';
import logo from '../../assets/img/logo.svg'
import s from './Header.module.scss'
import {HeaderNav} from "./header-nav/HeaderNav";
import {Link} from "react-router-dom";
import {useViewport} from "../../hooks/viewPort";
import {Burger} from "./burger/Burger";
import {useAppDispatch} from "../../store/store";
import {appActions} from "../../app/app-reducer";


export const Header = () => {

    const {width} = useViewport()
    const dispatch = useAppDispatch()
    const breakpoint = 1300

    return (
        <header className={s.header}>
            <div className={s.header__container}>
                <Link to={'/'}
                      onClick={() => {
                          dispatch(appActions.changeMenuStatus({menuIsOpen: false}))
                      }}>
                    <img className={s.header__log} src={logo} alt=""/>
                </Link>
                {width > breakpoint
                    ?
                    <>
                        <HeaderNav/>
                        <Link className={s.header__link + ' ' + s.header__link_icon} to={'/menu/coffee'}>Menu</Link>
                    </>
                    :
                    <Burger/>
                }
            </div>
        </header>
    );
};