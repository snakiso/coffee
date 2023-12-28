import React from 'react';
import s from './footer.module.scss';
import twitter from '../../assets/img/twitter.svg';
import insta from  '../../assets/img/instagram.svg';
import fb from  '../../assets/img/facebook.svg';

export const Footer = () => {
    return (
        <footer className={s.footer}>
            <div className={s.footer__inner}>
                <div>
                    <h2 className={s.footer__title}>Sip, Savor, Smile. <span>It’s coffee time!</span></h2>
                    <div className={s.footer__socialBlock}>
                        <a className={s.footer__socialLink} href="#"><img src={twitter} alt=""/></a>
                        <a className={s.footer__socialLink} href="#"><img src={insta} alt=""/></a>
                        <a className={s.footer__socialLink} href="#"><img src={fb} alt=""/></a>
                    </div>
                </div>
                <div className={s.footer__contactBlock}>
                    <span className={s.footer__contactBlockTitle}>Contact us</span>
                    <ul>
                        <li className={`${s.footer__ContactItem} ${s.footer__ContactItem_loc}`}>
                            <a href="#">8558 Green Rd.,  LA</a>
                        </li>
                        <li className={`${s.footer__ContactItem} ${s.footer__ContactItem_phone}`}>
                            <a href="#">+1 (603) 555-0123</a>
                        </li>
                        <li className={`${s.footer__ContactItem} ${s.footer__ContactItem_clock}`}>
                            <span>Mon-Sat: 9:00 AM – 23:00 PM</span>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    );
};

