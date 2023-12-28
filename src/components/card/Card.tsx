import React, {FC} from 'react';
import s from './card.module.scss';
import {ResType} from "../../api/api";
import {useAppDispatch} from "../../store/store";
import {setCardInfo} from "../../layout/menu/card-reducer";

type CardPropsType = {
    item: ResType
}

export const Card: FC<CardPropsType> = ({item}) => {

    const dispatch = useAppDispatch()

    return (
        <div className={s.card} onClick={() => dispatch(setCardInfo({item}))}>
            <img className={s.card__img} src={item.image} alt=""/>
            <div className={s.card__inner}>
                <h4 className={s.card__title}>{item.name}</h4>
                <p className={s.card__text}>{item.description}</p>
                <span className={s.card__price}>${item.size[0].price}</span>
            </div>
        </div>
    );
};

