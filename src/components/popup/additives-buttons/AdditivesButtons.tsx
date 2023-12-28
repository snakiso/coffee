import React, {FC} from 'react';
import {Additives, AdditivesType, Sizes, SizeType} from "../../../api/api";
import s from './../popup.module.scss';
import {useAppDispatch} from "../../../store/store";
import {CardAdditivesType, changeAdditive, changeSize} from "../../../layout/menu/card-reducer";

type SizeButtonsPropsType = {
    data: CardAdditivesType[]
}

export const AdditivesButtons: FC<SizeButtonsPropsType> = ({data}) => {

    const dispatch = useAppDispatch()

    const returnPrice = (id: Additives) => {
        dispatch(changeAdditive({id}))
    }


    return (
        <div className={s.popup__buttonsBlock}>
            <span className={s.popup__buttonsBlockTitle}>Additives</span>
            <div className={s.popup__buttonsBlockInner}>
                {data.map((el, index) => {
                    return (
                        <button key={index} className={el.active === 'active' ? s.popup__buttonActive : s.popup__button} onClick={() => {
                            returnPrice(el.id)
                        }}>
                            <span className={s.popup__buttonCircle}>{index + 1}</span>
                            <span>{el.name}</span>
                        </button>
                    )
                })}
            </div>
        </div>
    );
};

