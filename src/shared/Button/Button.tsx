import React, { MouseEvent, ReactNode } from 'react'
import styles from './Button.module.scss'

interface ButtonProps {
    children: ReactNode,
    type?: "button" | "submit" | "reset" ;
    onClick: (e: MouseEvent<HTMLButtonElement>) => void;
}

export const Button = ({children, type, onClick}: ButtonProps) => {
    return (
        <button className={styles.btn} type={type} onClick={onClick}>
            <span>{children}</span>
        </button>
    )
}
