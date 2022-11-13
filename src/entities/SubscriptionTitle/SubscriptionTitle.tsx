import React from 'react'
import { Heading } from '../../shared'
import styles from './SubscriptionTitle.module.scss'

interface SubscriptionTitleProps {
    
}

export const SubscriptionTitle = (props: SubscriptionTitleProps) => {
    return (
        <div className={styles.subscriptionTitle}>
            <img src="/static/Logo.png" alt="" className={styles.subscriptionTitle__logo}/>
            <h1 className={styles.subscriptionTitle__heading}>
                <Heading> все круто! теперь </Heading>
                <Heading opt={{gradient: true}}> выигрывай путешествие </Heading>
            </h1>
            <p  className={styles.subscriptionTitle__description}>Чтобы участвовать в  розыгрыше путешествия, оставь актуальную почту и&nbsp;поделись с друзьями</p>
        </div>
    )
}
