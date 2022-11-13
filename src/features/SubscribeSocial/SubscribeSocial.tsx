import React from 'react'
import { Button, UserStep } from '../../shared'
import { Facebook, Vk, Twitter, Inst } from './icons/icons'
import styles from './SubscribeSocial.module.scss'
import cn from 'classnames'

interface SubscribeSocialProps {
    data: {
        setSuccess: React.Dispatch<React.SetStateAction<boolean>>
    }

    opt: {
        success: boolean
    }
}

export const SubscribeSocial = ({data, opt}: SubscribeSocialProps) => {
    return (
        <div className={styles.subscribeSocial}>
            <UserStep 
                data={{
                    count: '2',
                    name: 'Поделись с друзьями'
                }}
                opt={{ success: opt.success }}
            />
            <div className={styles.subscribeSocial__networks}>
                <div  className={cn(styles.subscribeSocial__network, styles['subscribeSocial__network-fb'])}>
                    <Facebook/>
                </div>
                <div  className={cn(styles.subscribeSocial__network, styles['subscribeSocial__network-vk'])}>
                    <Vk/>
                </div>
                <div  className={cn(styles.subscribeSocial__network, styles['subscribeSocial__network-twi'])}>
                    <Twitter/>
                </div>
                <div  className={cn(styles.subscribeSocial__network, styles['subscribeSocial__network-inst'])}>
                    <Inst/>
                </div>
            </div>
            <Button>Я поделился</Button>
        </div>
    )
}
