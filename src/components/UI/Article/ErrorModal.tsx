import React from 'react'
import { icons } from '@/assets/icons/icons'

interface IErrorModal {
    terminateSession: Function
}

const ErrorModal:React.FC<IErrorModal> = ({terminateSession}) => {
    return (
        <div className='error-popup'>
            <div className='error-popup-msg'>
                <div className='error-popup-msg-icon-cont'>
                    {icons.ico77}
                </div>
                <h2 className='error-popup-msg-title'>Ошибка</h2>
                <p className='error-popup-msg-text'>Похоже, вы вошли в аккаунт с другого устройства. Для чтения статей на нескольких устройствах необходим допольнительный аккаунт.</p>
                <button className='error-popup-msg-btn' onClick={() => terminateSession()}>Выйти</button>
            </div>
        </div>
    )
}

export default ErrorModal