import React, {useEffect, useState} from 'react'
import axios, { Axios } from 'axios'
import { getUrl } from '@/helpers/useGetUrl'
import Register from '@/components/Register/Register'
import MainContainer from '@/components/MainContainer'

type AxiosError = {
    msg: string
}

export type TAllBlocks = {
    id: number;
    btitleen: string;
    btitleru: string;
    order: number;
    icoId: string;
}

const RegisterPage = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [keyV, setKey] = useState("")
    const [error, setError] = useState("")

    const handleChangeUsername = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(event.target.value)
    }

    const handleChangePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value)
    }

    const handleChangeKey = (event: React.ChangeEvent<HTMLInputElement>) => {
        setKey(event.target.value)
    }
    
    const [allBlocks, setAllBlocks] = useState<TAllBlocks[]>([])

    const getAllBlocks = async () => {
        const response = await axios.get(`${getUrl}/blocks/allblocks`)
        setAllBlocks(response.data)
    }

    useEffect(() => {
        getAllBlocks()
    }, [])

    const [selectedBlocks, setSelectedBlocks] = useState<number[]>([])

    const handleSelectBlock = (item: TAllBlocks) => {
        if (selectedBlocks.includes(item.id)) {
            setSelectedBlocks(selectedBlocks.filter(block => block !== item.id))
        }
        else {
            setSelectedBlocks([...selectedBlocks, item.id])
        }
    }

    const sendRegisterData = async () => {
        setError("")
        if (username.length < 3 || password.length < 7 || keyV.length < 3) {
            return setError("Заполните все поля")
        }
        try {
            const response = await axios.post(`${getUrl}/auth/register`, {
                username: username, password: password, key: keyV, blocks: selectedBlocks
            })
            setError(response.data)
        } catch (error: unknown) {
            if (axios.isAxiosError(error)) {
                setError(error.response?.data.msg)
            }
            else if (error instanceof Error){
                console.log(error)
            }
        }
    }
    
    return (
        <MainContainer title="Login">
            <Register 
                username={username}
                password={password}
                handleChangePassword={handleChangePassword}
                handleChangeKey={handleChangeKey}
                handleChangeUsername={handleChangeUsername}
                keyV={keyV}
                error={error}
                sendRegisterData={sendRegisterData}
                allBlocks={allBlocks}
                selectedBlocks={selectedBlocks}
                handleSelectBlock={handleSelectBlock}
                />
        </MainContainer>
    )
}

export default RegisterPage