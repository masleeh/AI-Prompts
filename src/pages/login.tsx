import LoginForm from "@/components/Login/LoginForm"
import MainContainer from "@/components/MainContainer"
import {useState} from 'react'
import axios from 'axios'
import { useRouter } from "next/router"
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { getUrl } from "@/helpers/useGetUrl"
import useKeyEnter from "@/helpers/useKeyEnter"

const Login = () => {
    const [login, setLogin] = useState("")
    const [password, setPassword] = useState("")
    const [isWarn, setIsWarn] = useState(false)

    axios.defaults.withCredentials = true

    const router = useRouter()
    const { t } = useTranslation('login')
    const {handleKey} = useKeyEnter()

    const changeLogin = (event:React.ChangeEvent<HTMLInputElement>) => {
        setLogin(event.target.value)
    }

    const changePassword = (event:React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value)
    }

    const sendLoginData = async () => {
        // console.log(`${getUrl}/auth/login`)
        try {
            const response = await axios.post(`${getUrl}/auth/login`, {
                username: login,
                password: password
            })
            localStorage.setItem('notion_token', response.data.token)
            setIsWarn(false)
            router.push('/')
        } catch (error:any) {
            setIsWarn(true)
            console.log(error.message)
        }
    }

    return (
        <MainContainer title="Login">
            <LoginForm 
            login={login}
            password={password}
            setLogin={changeLogin}
            setPassword={changePassword}
            sendLoginData={sendLoginData}
            isWarn={isWarn}
            t={t}
            handleKey={handleKey}
            />
        </MainContainer>
    )
}

export default Login

export async function getStaticProps({ locale }:any) {
    return {
      props: {
        ...(await serverSideTranslations(locale, [
          'login',
        ], null, ['ru', 'en'])),
      },
    }
  }