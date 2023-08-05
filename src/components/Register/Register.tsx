import React from 'react'
import { IRegister } from '@/types/login'

const Register:React.FC<IRegister> = ({username, password, handleChangePassword,
handleChangeUsername, sendRegisterData, error, keyV, handleChangeKey, allBlocks, selectedBlocks, handleSelectBlock}) => {
    return (
        <div className='register-container'>
            <div className='register'>
                <h1 className='register-title'>Создать аккаунт</h1>
                <input className='register-input' placeholder='Имя пользователя'
                    value={username} onChange={(event) => handleChangeUsername(event)}/>
                <input className='register-input' placeholder='Пароль' type='password'
                    value={password} onChange={(event) => handleChangePassword(event)}/>
                <input className='register-input' placeholder='Ключ регистрации' type='password'
                    value={keyV} onChange={(event) => handleChangeKey(event)}/>

                <fieldset className='reg_field'>
                    {allBlocks.map((item, index) => {
                        return (
                            <div key={index}>
                                <input type="checkbox" checked={selectedBlocks.includes(item.id)} id={item.btitleru} onChange={() => handleSelectBlock(item)}/>
                                <label htmlFor={item.btitleru}>{item.btitleru}</label>
                            </div>
                        )
                    })}
                </fieldset>

                {error && <h2 className='register-error'>{error}</h2>}
                <button className='register-button' onClick={() => sendRegisterData()}>Регистрация</button>
            </div>
        </div>
    )
}

export default Register