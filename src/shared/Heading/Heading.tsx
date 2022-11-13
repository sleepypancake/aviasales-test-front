import React, { ReactNode } from 'react';
import cn from 'classnames';
import styles from './Heading.module.scss'

interface HeadingProps {
    children: ReactNode,
    opt?: {
        gradient?: boolean
    }
}

export const Heading = ({children, opt}: HeadingProps) => {
    return (
        <span className={cn(styles.heading, opt?.gradient && styles.heading_gradient)}>
            {children}
        </span>
    )
}
