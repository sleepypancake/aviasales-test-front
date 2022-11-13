import React from 'react'
import { Button, TextField, UserStep } from '../../shared'

interface SubscribeEmailProps {
    data: {
        setSuccess: React.Dispatch<React.SetStateAction<boolean>>
    }

    opt: {
        success: boolean
    }
}

export const SubscribeEmail = ({data, opt}: SubscribeEmailProps) => {
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
                    // value?: string;
                    errorMessage: 'Неверный формат почты',
                    // inputRef?: RefObject<HTMLInputElement>;
                    // autoComplete?: string;
                    // placeholder?: string;
                }} 
                opt={{ error: false }}
            />
            <Button>Я оставил</Button>
        </div>
    )
}
