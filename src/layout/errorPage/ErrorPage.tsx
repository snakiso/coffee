import React from 'react';
import {NavLink} from "react-router-dom";
import s from './errorPage.module.scss';
import b from '../../components/button/Button.module.scss';

export const ErrorPage = () => {
    return (
        <section className={s.errorPage}>
            <h1 className={s.errorPage__title}>Page not found</h1>
            <h2 className={s.errorPage__subtitle}>404</h2>
            <NavLink className={b.button + ' ' + b.buttonSecondary} to={'/'}>Return to main page</NavLink>
        </section>
    );
};

