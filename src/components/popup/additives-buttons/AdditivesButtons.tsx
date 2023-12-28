import React, {FC} from 'react';
import {SizeType} from "../../../api/api";
import s from './../popup.module.scss';

type SizeButtonsPropsType = {
    data: SizeType[]
}

export const SizeButtons: FC<SizeButtonsPropsType> = ({data}) => {
    return (
        <div className={s.popup__buttonsBlock}>
            <span className={s.popup__buttonsBlockTitle}>Size</span>
            <div className={s.popup__buttonsBlockInner}>
                {data.map(el => {
                    return (
                        <button className={s.popup__button}>
                            <span className={s.popup__buttonCircle}>{el.size[0]}</span>
                            <span>{el.volume} ml</span>
                        </button>
                    )
                })}
            </div>
        </div>
    );
};

