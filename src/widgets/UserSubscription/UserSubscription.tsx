import React from 'react'
import { PirpleLight } from './icons/space/PirpleLight'
import { StarsClouds } from './icons/space/StarsClouds'
import styles from './UserSubscription.module.scss'
import cn from 'classnames';
import { SubscriptionForm, SubscriptionTitle } from '../../entities';
import { Button } from '../../shared';
import { useAppDispatch, useAppSelector } from '../../store'
import { 
    selectCurrentSuccessEmail, 
    selectCurrentSuccessSocial, 
    resetAllSuccess
} from '../../store/subscription/subscriptionSlice'

interface UserSubscriptionProps {
    
}

export const UserSubscription = (props: UserSubscriptionProps) => {
    const successEmail = useAppSelector(selectCurrentSuccessEmail);
    const successSocial = useAppSelector(selectCurrentSuccessSocial);
	const dispatch = useAppDispatch();

    const btnClickHandler = () => {
        dispatch(resetAllSuccess())
    }

    return (
        <div className={styles.subscription}>
            <div className={styles.subscription__wrapper}>
                <div className={styles.subscription__content}>
                    <SubscriptionTitle opt={{ alreadySubscribed: successEmail && successSocial }}/>
                    {(!successEmail || !successSocial) && (
                        <div className={styles.subscription__steps}>
                            <SubscriptionForm 
                                opt={{
                                    emailSubscribe: true,
                                }}
                            />
                            <SubscriptionForm 
                                opt={{ 
                                    socialSubscribe: true,
                                }}
                            />
                        </div> 
                    )}
                    {successEmail && successSocial && (
                        <Button
                            onClick={btnClickHandler}
                        >
                            Пройти игру заново
                        </Button>
                    )}
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
