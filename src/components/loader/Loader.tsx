import React from 'react';
import s from './loader.module.scss'


export const Loader = () => {
    return (
        <div className={s.loader}>
            <div className={s.loader__circle}></div>
        </div>
    );
};

