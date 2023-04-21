import React from 'react'
import Feedback from './Feedback'
import {useState, useEffect, useContext} from 'react'
import { getCookies } from '@/helpers/useGetCookies'
import { useRouter } from 'next/router'
import { GlobalContext } from '@/context/context'
import { getUrl } from '@/helpers/useGetUrl'
import axios from 'axios'

const FeedbackContainer = () => {
    const router = useRouter()
    const {setUserId, setUsername} = useContext(GlobalContext)

    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")
    const [error, setError] = useState("")
    const [isShown, setIsShown] = useState(false)
    const [success, setSuccess] = useState(false)

    const handleChangeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
        setIsShown(false)
        setSuccess(false)
        setEmail(event.target.value)
    }

    const handleChangeMessage = (event: React.ChangeEvent<HTMLInputElement>) => {
        setIsShown(false)
        setSuccess(false)
        setMessage(event.target.value)
    }

    const getUser = async () => {
        const user = await getCookies(router)
        if (user) {
            setUserId(user.userId)
            setUsername(user.user)
        }
    }

    useEffect(() => {
        getUser()
    }, [])

    const sendData = async () => {
        if (email.length == 0 || message.length == 0) {
            setError('Заполните все поля')
            return setIsShown(true)
        }

        if (email.length < 3 || !email.includes('@') || !email.includes('.')) {
            setError('Ваш Email введён некорректно')
            return setIsShown(true)
        }
        if (message.length < 5) {
            setError("В сообщении слишком мало символов")
            return setIsShown(true)
        }

        try {
            const response = await axios.post(`${getUrl}/feedback`, {
                email: email,
                message: message
            })
            if (response) {
                setEmail("")
                setMessage("")
                setSuccess(true)
            }
        } catch (error: any) {
            console.log(error.message)
            setError('Something went wrong, please try again later')
            setIsShown(true)
        }
    }

    return (
        <Feedback 
        handleChangeEmail={handleChangeEmail}
        handleChangeMessage={handleChangeMessage}
        email={email}
        message={message}
        error={error}
        isShown={isShown}
        sendData={sendData}
        success={success}
        />
    )
}

export default FeedbackContainer