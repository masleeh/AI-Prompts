import { createContext, PropsWithChildren, useState, useEffect } from "react";
import { useRouter } from "next/router";

export const GlobalContext = createContext<any>(null)

const GlobalContextProvider:React.FC<PropsWithChildren> = ({children}) => {
    const {locale} = useRouter()

    const [lan, setLan] = useState('ru')
    const [isLoading, setIsLoading] = useState(false)
    const [userId, setUserId] = useState(0)
    const [username, setUsername] = useState("")
    

    const value:any ={
        lan,
        isLoading,
        setIsLoading,
        userId,
        setUserId,
        username,
        setUsername,
        setLan
    }

    return (
        <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
    )
}

export default GlobalContextProvider