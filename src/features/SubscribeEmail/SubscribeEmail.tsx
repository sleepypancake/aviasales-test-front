import React, { ChangeEvent, MouseEvent, useState } from 'react'
import { Button, TextField, UserStep } from '../../shared'
import { useSubscribeByEmailMutation } from '../../store/subscription/subscriptionApi'
import { VALIDATION_SCHEMA_URL } from './SubscribeEmail.data'
import { useAppDispatch } from '../../store';
import { setEmailSuccess } from '../../store/subscription/subscriptionSlice';

interface SubscribeEmailProps {

    opt: {
        success: boolean
    }
}

export const SubscribeEmail = ({ opt }: SubscribeEmailProps) => {
    const [ errorMessage, setErrorMessage ] = useState('Неверный формат почты')
    const [ errorState, setErrorState ] = useState(false)
    const [ emailValue, setEmailValue ] = useState('')
	const dispatch = useAppDispatch();

    const [ sendUserEmail ] = useSubscribeByEmailMutation()

    const changeInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        if (new RegExp(VALIDATION_SCHEMA_URL.regex).test(e.target.value.toLowerCase())) {
            setErrorMessage('')
            setErrorState(false)
            setEmailValue(e.target.value.toLowerCase())
        } else {
            setErrorMessage(VALIDATION_SCHEMA_URL.error)
            setErrorState(true)
        }
    }

    const btnSubmitHandler = (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        sendUserEmail({email: emailValue}).unwrap()
            .then((response) => {
                console.log(response)
                response.id && localStorage.setItem('userId', response.id.toString() )
                dispatch(setEmailSuccess());
            })
            .catch((error) => {
                if (error.data.message) {
                    setErrorMessage(error.data.message)
                    setErrorState(true)
                } else {
                    setEmailValue('')
                }
                throw error
            })
    }

    return (
        <div>
            <UserStep 
                data={{
                    count: '1',
                    name: 'Оставь актуальный email'
                }}
                opt={{ success: opt.success }}
            />
            <TextField 
                data={{
                    placeholder: 'Ввести email',
                    value: emailValue,
                    errorMessage,
                    autoComplete: 'email',
                    changeHandler: changeInputHandler
                }} 
                opt={{ error: errorState }}
            />
            <Button
                onClick={btnSubmitHandler}
            >
                Я оставил
            </Button>
        </div>
    )
}
