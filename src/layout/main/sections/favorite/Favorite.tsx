import React from 'react';
import s from '../../sections/favorite/favorite.module.scss'
import {Slider} from "../../../../components/slider/Slider";
export const Favorite = () => {
    return (
        <section className={s.favorite}>
            <div className={s.favorite__container}>
                <h2 className={s.favorite__title}>Choose your span <span>favorite</span> coffee</h2>
                <Slider/>
            </div>
        </section>
    );
};

