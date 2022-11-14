import React, { ChangeEvent, ChangeEventHandler, RefObject, useEffect, useState } from 'react'
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
	const [textFieldValue, setFieldValue] = useState<string | undefined>(data.value);

    const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
		e.preventDefault();
		setFieldValue(e.target.value);
		data.changeHandler && data.changeHandler(e);
	};

    useEffect(() => {
		setFieldValue(data.value);
    }, [data.value]);
    

    return (
        <div className={cn(styles.textField, opt.error && styles.textField_error)}>
            <div className={styles.textField__wrapper} >
                <input 
                    value={textFieldValue}
                    className={styles.textField__input} 
                    placeholder={data?.placeholder || ''}
                    type="text"
                    onChange={handleChange}
                />
            </div>
            <span className={styles.textField__msg}>{data.errorMessage}</span>
        </div>
        
    )
}
