import React from 'react';
import s from './about.module.scss'
import {useViewport} from "../../../../hooks/viewPort";
import {Gallery} from "./gallery/Gallery";
import {GalleryMobile} from "./gallery/GalleryMobile";

export const About = () => {

    const {width} = useViewport()
    const breakpoint = 700

    return (
        <section className={s.about}>
            <div className={s.about__wrapper}>
                <h2 className={s.about__title}>Resource is the
                    <span> perfect and cozy place </span>
                    where you can enjoy a variety of hot beverages, relax, catch up with friends, or get some work done.
                </h2>
                {width > breakpoint ? <Gallery/> : <GalleryMobile/>}
            </div>
        </section>
    );
};

