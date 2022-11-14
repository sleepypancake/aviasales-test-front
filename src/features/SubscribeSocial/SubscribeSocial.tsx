import React, { MouseEvent, useState } from 'react'
import { Button, UserStep } from '../../shared'
import { Facebook, Vk, Twitter, Inst } from './icons/icons'
import styles from './SubscribeSocial.module.scss'
import cn from 'classnames'
import { useAppDispatch } from '../../store';
import { setSocialSuccess } from '../../store/subscription/subscriptionSlice';

interface SubscribeSocialProps {
    opt: {
        success: boolean
    }
}

export const SubscribeSocial = ({ opt}: SubscribeSocialProps) => {
    const [ socialClicked, setSocialClicked ] = useState(false)
    const [ errorMsg, setErrorMsg ] = useState('')
	const dispatch = useAppDispatch();

    const btnSubmitHandler = (e: MouseEvent<HTMLButtonElement>) => {
        if (socialClicked) {
            dispatch(setSocialSuccess())
        } else {
            setErrorMsg('Надо все же поделиться')
        }
    }

    const onLinkClicked = () => {
        setSocialClicked(true)
        setErrorMsg('')
    }
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
                <a  
                    target="_blank"
                    rel="noreferrer" 
                    href="https://www.facebook.com/sharer/sharer.php?u=https://i.avs.io/kh836o"
                    onClick={onLinkClicked}
                    className={cn(styles.subscribeSocial__network, styles['subscribeSocial__network-fb'])}>
                        <Facebook/>
                </a>
                <a  
                    target="_blank"
                    rel="noreferrer" 
                    href="https://vk.com/share.php?url=https://i.avs.io/z1v1vg"
                    onClick={onLinkClicked}
                    className={cn(styles.subscribeSocial__network, styles['subscribeSocial__network-vk'])}>
                        <Vk/>
                </a>
                <a  
                    target="_blank"
                    rel="noreferrer" 
                    href="https://twitter.com/share?text=В аэропорт с inDriver!&url=https://i.avs.io/sr0ucx"
                    onClick={onLinkClicked}
                    className={cn(styles.subscribeSocial__network, styles['subscribeSocial__network-twi'])}>
                        <Twitter/>
                </a>
                <a  
                    target="_blank"
                    rel="noreferrer" 
                    href="https://www.instagram.com/p/Ck1O9qRDAdU/"
                    onClick={onLinkClicked}
                    className={cn(styles.subscribeSocial__network, styles['subscribeSocial__network-inst'])}>
                        <Inst/>
                </a>

                {!!errorMsg && <span className={styles.subscribeSocial__msg}>{errorMsg}</span>}
            </div>
            <Button onClick={btnSubmitHandler}>Я поделился</Button>
        </div>
    )
}
