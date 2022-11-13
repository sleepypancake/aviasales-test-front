import React, { ReactNode } from 'react'
import styles from './Button.module.scss'

interface ButtonProps {
    children: ReactNode
}

export const Button = ({children}: ButtonProps) => {
    return (
        <button className={styles.btn}>
            <span>{children}</span>
        </button>
    )
}
