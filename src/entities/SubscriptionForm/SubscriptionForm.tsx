import React, { useState } from 'react'
import styles from './SubscriptionForm.module.scss'
import cn from 'classnames'
import { SubscribeEmail, SubscribeSocial } from '../../features'
import { useAppSelector } from '../../store'
import { 
    selectCurrentAvailableEmail, 
    selectCurrentSuccessEmail, 
    selectCurrentSuccessSocial, 
    selectCurrentAvailableSocial 
} from '../../store/subscription/subscriptionSlice'

interface SubscriptionFormProps {
    opt?: {
        emailSubscribe?: boolean;
        socialSubscribe?: boolean;
        available?: boolean
    }
}

export const SubscriptionForm = ({opt}: SubscriptionFormProps) => {
    const successEmail = useAppSelector(selectCurrentSuccessEmail);
    const successSocial = useAppSelector(selectCurrentSuccessSocial);
    const availableEmail = useAppSelector(selectCurrentAvailableEmail);
    const availableSocial = useAppSelector(selectCurrentAvailableSocial);
    
    return (
        <div className={cn(
            styles.subscriptionForm, 
            ((successEmail && opt?.emailSubscribe)  ||  (successSocial && opt?.socialSubscribe)) && styles.subscriptionForm_success,
            ((availableEmail && opt?.emailSubscribe)  ||  (availableSocial && opt?.socialSubscribe)) && styles.subscriptionForm_available,
            )}>
            {opt?.emailSubscribe && <SubscribeEmail opt={{ success: successEmail }}/>}
            {opt?.socialSubscribe && <SubscribeSocial opt={{ success: successSocial }}/>}
        </div>
    )
}
