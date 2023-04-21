import React from 'react'
import { IFeedback } from '@/types/feedback'

const Feedback:React.FC<IFeedback> = (props) => {
    return (
        <section className='feedback'>
            <div className='container'>
                <h1 className='feedback-header'>Обратная связь</h1>
                <h2 className='feedback-label'>Ваш Email:</h2>
                <input className='feedback-input' 
                placeholder='example@mail.com' 
                value={props.email}
                onChange={(event) => props.handleChangeEmail(event)}/>
                <h2 className='feedback-label'>Сообщение:</h2>
                <textarea 
                    placeholder='Your message' 
                    className='feedback-textarea' 
                    value={props.message} 
                    onChange={(event) => props.handleChangeMessage(event)}/>
                <div className='feedback-row'>
                    <button className='feedback-send' onClick={() => props.sendData()}>Отправить</button>
                    {props.isShown && <h3 className='feedback-error'>! {props.error}</h3>}
                    {props.success && <h3 className='feedback-success'>Сообщение отправлено</h3>}
                </div>
            </div>
        </section>
    )
}

export default Feedback