import React from 'react'
import { PirpleLight } from './icons/space/PirpleLight'
import { StarsClouds } from './icons/space/StarsClouds'
import styles from './UserSubscription.module.scss'
import cn from 'classnames';
import { SubscriptionForm, SubscriptionTitle } from '../../entities';

interface UserSubscriptionProps {
    
}

export const UserSubscription = (props: UserSubscriptionProps) => {
    return (
        <div className={styles.subscription}>
            <div className={styles.subscription__wrapper}>
                <div className={styles.subscription__content}>
                    <SubscriptionTitle />
                    <div className={styles.subscription__steps}>
                        <SubscriptionForm 
                            opt={{
                                emailSubscribe: true,
                                available: true
                            }}
                        />
                        <SubscriptionForm 
                            opt={{ 
                                socialSubscribe: true,
                                available: false
                            }}
                        />
                    </div>
                    
                </div>
                <div className={styles.subscription__logo}/>
            </div>
            <PirpleLight className={cn(styles.starsAndClouds, styles.starsAndClouds_clouds)} />
            <StarsClouds  className={cn(styles.starsAndClouds, styles.starsAndClouds_stars)} />
            <div className={cn(styles.starsAndClouds, styles.starsAndClouds_lightCloud)}/>
            <div className={cn(styles.starsAndClouds, styles.starsAndClouds_pirpleCloud)}/>
            <div className={cn(styles.starsAndClouds, styles.starsAndClouds_darkCloud)}/>
        </div>
    )
}
