import React from 'react'
import { Heading } from '../../shared'
import { 
    SUBSCRIBED_TEXT, 
    SUBSCRIBED_TITLE_FIRST, 
    SUBSCRIBED_TITLE_SECOND, 
    UNSUBSCRIBED_TEXT, 
    UNSUBSCRIBED_TITLE_FIRST, 
    UNSUBSCRIBED_TITLE_SECOND 
} from './SubscriptionTitle.data'
import styles from './SubscriptionTitle.module.scss'

interface SubscriptionTitleProps {
    opt: {
        alreadySubscribed: boolean;
    }
}

export const SubscriptionTitle = ({opt}: SubscriptionTitleProps) => {
    return (
        <div className={styles.subscriptionTitle}>
            <img src="/static/Logo.png" alt="" className={styles.subscriptionTitle__logo}/>
            <h1 className={styles.subscriptionTitle__heading}>
                <Heading> 
                    {opt.alreadySubscribed ? SUBSCRIBED_TITLE_FIRST : UNSUBSCRIBED_TITLE_FIRST } 
                </Heading>
                <Heading opt={{gradient: true}}> 
                    {opt.alreadySubscribed ? SUBSCRIBED_TITLE_SECOND : UNSUBSCRIBED_TITLE_SECOND } 
                </Heading>
            </h1>
            <p  className={styles.subscriptionTitle__description}>
                {opt.alreadySubscribed ? SUBSCRIBED_TEXT : UNSUBSCRIBED_TEXT }
            </p>
        </div>
    )
}
