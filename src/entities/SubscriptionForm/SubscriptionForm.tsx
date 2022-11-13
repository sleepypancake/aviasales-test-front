import React, { useState } from 'react'
import styles from './SubscriptionForm.module.scss'
import cn from 'classnames'
import { SubscribeEmail, SubscribeSocial } from '../../features'

interface SubscriptionFormProps {
    opt?: {
        emailSubscribe?: boolean;
        socialSubscribe?: boolean;
        available?: boolean
    }
}

export const SubscriptionForm = ({opt}: SubscriptionFormProps) => {
    const [ success, setSuccess ] = useState(false)
    return (
        <div className={cn(
            styles.subscriptionForm, 
            success && styles.subscriptionForm_success,
            opt?.available && styles.subscriptionForm_available,
            )}>
            {opt?.emailSubscribe && <SubscribeEmail data={{ setSuccess }} opt={{ success }}/>}
            {opt?.socialSubscribe && <SubscribeSocial data={{ setSuccess }} opt={{ success }}/>}
        </div>
    )
}
