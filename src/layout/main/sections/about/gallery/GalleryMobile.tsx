import React from 'react';
import s from "../about.module.scss";
import photo1 from "../../../../../assets/img/about-1.jpg";
import photo2 from "../../../../../assets/img/about-4.jpg";


export const GalleryMobile = () => {
    return (
        <div className={s.about__gallery}>
            <div className={s.about__galleryBox}>
                <img className={`${s.about__galleryImg} ${s.about__galleryImg_Big}`} src={photo1} alt=""/>
                <img className={`${s.about__galleryImg} ${s.about__galleryImg_Big}`} src={photo2} alt=""/>
            </div>
        </div>
    );
};

