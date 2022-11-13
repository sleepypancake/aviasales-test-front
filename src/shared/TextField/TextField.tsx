import React, { ChangeEvent, RefObject } from 'react'
import styles from './TextField.module.scss'
import cn from 'classnames'

interface TextFieldProps {
    data: {
        value?: string;
		errorMessage?: string;
		inputRef?: RefObject<HTMLInputElement>;
		autoComplete?: string;
        placeholder?: string;
        
		changeHandler?: (e: ChangeEvent<HTMLInputElement>) => void;
    }
    opt: {
        error: boolean
    }
		
}

export const TextField = ({data, opt}: TextFieldProps) => {
    return (
        <div className={cn(styles.textField, opt.error && styles.textField_error)}>
            <div className={styles.textField__wrapper} >
                <input 
                    className={styles.textField__input} 
                    placeholder={data?.placeholder || ''}
                    type="text"
                />
            </div>
            <span className={styles.textField__msg}>{data.errorMessage}</span>
        </div>
        
    )
}
