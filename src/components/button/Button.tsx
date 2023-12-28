import React, {ButtonHTMLAttributes, DetailedHTMLProps, FC} from 'react';

type ButtonDefaultProps = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

type ButtonPropsType = ButtonDefaultProps & {
    name:string
    className:string
}

export const Button:FC<ButtonPropsType> = ({name,className, ...rest}) => {
    return (
        <button className={className} {...rest}>{name}</button>
    );
};
