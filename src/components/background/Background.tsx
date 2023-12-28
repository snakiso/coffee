import React from 'react';
import s from './background.module.scss'
import {clearCardInfo} from "../../layout/menu/card-reducer";
import {useAppDispatch} from "../../store/store";

export const Background = () => {

    const dispatch = useAppDispatch()

    return (
        <div className={s.background} onClick={() => {
            dispatch(clearCardInfo(null))
        }}>

        </div>
    );
};

