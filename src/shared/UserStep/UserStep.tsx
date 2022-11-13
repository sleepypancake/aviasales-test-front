import React from 'react'
import styles from './UserStep.module.scss'
import cn from 'classnames'

interface UserStepProps {
    data: {
        count: string | number,
        name: string
    }
    opt?: {
        success?: boolean
    }
}

export const UserStep = ({data, opt}: UserStepProps) => {
    return (
        <div className={cn(styles.userStep, opt?.success && styles.userStep_success)}>
            <span  className={styles.userStep__count}> {data.count} </span>
            <span className={styles.userStep__name}> {data.name} </span>
        </div>
    )
}
