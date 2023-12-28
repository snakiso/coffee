import React from 'react';
import s from './mobileApp.module.scss'
import img from '../../../../assets/img/mobile-screens.png'
import appStore from '../../../../assets/img//app-btn.svg'
import googlePlay from '../../../../assets/img//app-btn-1.svg'

export const MobileApp = () => {
    return (
        <section className={s.mobileApp}>
            <div className={s.mobileApp__wrapper}>
                <div className={s.mobileApp__leftBlock}>
                    <h2 className={s.mobileApp__title}><span>Download </span> our apps to&nbsp;start ordering</h2>
                    <p className={s.mobileApp__description}>Download the Resource app today and experience the comfort
                        of ordering your favorite coffee from
                        wherever you are</p>
                    <div className={s.mobileApp__linkBlock}>
                        <a className={s.mobileApp__link} href="#">
                            <img src={appStore} alt=""/>
                            <div>
                                <span>Available on the</span>
                                <p>App Store</p>
                            </div>
                        </a>
                        <a className={s.mobileApp__link} href='#'>
                            <img src={googlePlay} alt=""/>
                            <div>
                                <span>Available on</span>
                                <p>Google Play</p>
                            </div>
                        </a>
                    </div>
                </div>
                <div>
                    <img className={s.mobileApp__img} src={img} alt=""/>
                </div>
            </div>
        </section>
    );
};

