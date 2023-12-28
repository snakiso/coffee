import React, {useEffect} from 'react';
import {Button} from "../button/Button";
import b from './../button/Button.module.scss';
import s from './popup.module.scss'
import {useAppDispatch, useAppSelector} from "../../store/store";
import {clearCardInfo} from "../../layout/menu/card-reducer";
import {SizeButtons} from "./size-buttons/SizeButtons";
import {AdditivesButtons} from "./additives-buttons/AdditivesButtons";


export const Popup = () => {


    const cardData = useAppSelector(state => state.card)
    const dispatch = useAppDispatch()

    useEffect(() => {
        document.body.style.overflow = 'hidden'

        return () => {
            document.body.style.overflow = 'unset'
        }
    }, [])

    return (
        <div className={s.popup}>
            <div className={s.popup__inner}>
                <img className={s.popup__img} src={cardData.image} alt=""/>
                <div className={s.popup__ownContent}>
                    <h4 className={s.popup__title}>{cardData.name}</h4>
                    <p className={s.popup__description}>{cardData.description}</p>
                    <SizeButtons data={cardData.size}/>
                    <AdditivesButtons data={cardData.additives}/>
                    <div className={s.popup__total}>
                        <span>Total:</span>
                        <span>{`${cardData.price}$`}</span>
                    </div>
                    <div className={s.popup__attention}>
                        <p>The cost is not final. Download our mobile app to see the final price and place your order.
                            Earn loyalty points and enjoy your favorite coffee with up to 20% discount.</p>
                    </div>
                    <Button name='Close' className={`${b.button} ${b.buttonSecondary}`} onClick={() => {
                        dispatch(clearCardInfo(null))
                    }}/>
                </div>
            </div>
        </div>
    );
};

