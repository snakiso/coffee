import React from 'react';
import {SwiperSlide} from 'swiper/react';
import slide1 from "../../../assets/img/coffee-slider-1.png";
import slide2 from "../../../assets/img/coffee-slider-2.png";
import slide3 from "../../../assets/img/coffee-slider-3.png";
import s from "../slider.module.scss";

export const Slides = () => {
    const slidesArr = [
        {
            img: slide1,
            title: 'S’mores Frappuccino',
            description: 'This new drink takes an espresso and mixes it with brown sugar and cinnamon before being topped with oat milk.',
            price: '$5.50',
        },
        {
            img: slide2,
            title: 'Caramel Macchiato',
            description: 'Fragrant and unique classic espresso with rich caramel-peanut syrup, with cream under whipped thick foam.',
            price: '$5.00',
        },
        {
            img: slide3,
            title: 'Ice coffee',
            description: 'A popular summer drink that tones and invigorates. Prepared from coffee, milk and ice.',
            price: '$4.50',
        },
    ]
    return (
        slidesArr.map((sl, i) => {
            return (
                <SwiperSlide key={i}>
                    <div className={s.slider__slideInner}>
                        <img className={s.slider__slideImg} src={sl.img} alt={''}/>
                        <h3 className={s.slider__slideTitle}>{sl.title}</h3>
                        <p className={s.slider__slideDescription}>{sl.description}</p>
                        <span className={s.slider__slidePrice}>{sl.price}</span>
                    </div>
                </SwiperSlide>
            )
        })
    );
};

