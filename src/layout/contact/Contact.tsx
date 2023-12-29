import React from 'react';
import s from './contact.module.scss';
import './map.scss';
import {YMaps, Map, Placemark, ZoomControl} from '@pbe/react-yandex-maps';
import marker from '../../assets/img/coffee-cup.svg'

export const Contact = () => {

    const placemarkOptions = {
        iconLayout: 'default#image',
        iconImageHref: marker, // Путь к изображению вашей иконки
        iconImageSize: [50, 50], // Размеры иконки
        iconImageOffset: [-20, -20], // Смещение иконки
    };

    return (
        <section className={s.contact}>
            <div className={s.contact__inner}>
                <h2 className={s.contact__title}>Here you can see how to find us, and below you will see the phone
                    number and opening hours</h2>
                <YMaps query={{lang: 'en_US'}}>
                    <Map defaultState={{center: [34.050995, -118.271526], zoom: 17}} options={{
                    }}
                         width={'100%'}
                         height={'500px'}>
                        <Placemark geometry={[34.050995, -118.271526]} options={placemarkOptions}/>
                        <ZoomControl/>
                    </Map>
                </YMaps>
            </div>
        </section>
    );
};


