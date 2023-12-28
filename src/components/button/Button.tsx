import React, {FC} from 'react';
import s from './Button.module.scss'

type ButtonPropsType = {
    name:string
    className:string
}

export const Button:FC<ButtonPropsType> = ({name,className}) => {
    return (
        <button className={className}>{name}</button>
    );
};
