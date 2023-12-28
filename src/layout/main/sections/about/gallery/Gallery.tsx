import React from 'react';
import s from "../about.module.scss";
import photo1 from "../../../../../assets/img/about-1.jpg";
import photo2 from "../../../../../assets/img/about-2.jpg";
import photo4 from "../../../../../assets/img/about-4.jpg";
import photo3 from "../../../../../assets/img/about-3.jpg";

export const Gallery = () => {
    return (
        <div className={s.about__gallery}>
            <div className={s.about__galleryBox}>
                <img className={`${s.about__galleryImg} ${s.about__galleryImg_Big}`} src={photo1} alt=""/>
                <img className={`${s.about__galleryImg} ${s.about__galleryImg_Small}`} src={photo2} alt=""/>
            </div>
            <div className={`${s.about__galleryBox} ${s.about__galleryBox_reverse}`}>
                <img className={`${s.about__galleryImg} ${s.about__galleryImg_Big}`} src={photo4} alt=""/>
                <img className={`${s.about__galleryImg} ${s.about__galleryImg_Small}`} src={photo3} alt=""/>
            </div>
        </div>
    );
};

