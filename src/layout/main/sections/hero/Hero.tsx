import React from 'react';
import {Button} from "../../../../components/button/Button";
import s from './Hero.module.scss'
import b from './../../../../components/button/Button.module.scss'
export const Hero = () => {
    return (
        <section className={s.hero}>
            <div className={s.hero__container}>
                <div className={s.hero__innerWrapper}>
                    <h1 className={s.hero__title}><span>Enjoy</span> premium coffee at our charming cafe</h1>
                    <p className={s.hero__text}>With its inviting atmosphere and delicious coffee options, the Coffee House Resource
                        is a popular destination for coffee lovers and those seeking a warm and inviting space
                        to enjoy their favorite beverage.
                    </p>
                    <Button name={'Menu'} className={b.button + ' ' + b.buttonPrimary}/>
                </div>
            </div>
        </section>
    );
};
