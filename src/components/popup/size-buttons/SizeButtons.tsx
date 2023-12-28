import React, {FC} from 'react';
import {Sizes, SizeType} from "../../../api/api";
import s from './../popup.module.scss';
import {CardSizeType, changeSize, FinalCardData} from "../../../layout/menu/card-reducer";
import {useAppDispatch} from "../../../store/store";

type SizeButtonsPropsType = {
    data: CardSizeType[]
}


export const SizeButtons: FC<SizeButtonsPropsType> = ({data}) => {

    const dispatch = useAppDispatch()

    const returnPrice = (id: Sizes) => {
        dispatch(changeSize({id}))
    }


    return (
        <div className={s.popup__buttonsBlock}>
            <span className={s.popup__buttonsBlockTitle}>Size</span>
            <div className={s.popup__buttonsBlockInner}>
                {data.map((el, index) => {
                    return (
                        <button key={index} className={el.active === 'active' ? s.popup__buttonActive : s.popup__button}
                                onClick={() => {
                                    returnPrice(el.id)
                                }}>
                            <span className={s.popup__buttonCircle}>{el.size}</span>
                            <span>{el.volume}</span>
                        </button>
                    )
                })}
            </div>
        </div>
    );
};

