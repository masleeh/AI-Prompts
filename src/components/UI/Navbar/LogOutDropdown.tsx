import React from 'react'
import { useState } from 'react'
import axios, { AxiosError } from 'axios'
import { getUrl } from '@/helpers/useGetUrl'
import useDisableSelect from '@/helpers/useDisableSelect'

interface ILogOut {
    username: string,
    router: any,
    setUsername: Function
}

const LogOutDropdown:React.FC<ILogOut> = ({username, router, setUsername}) => {
    const [logout, setLogout] = useState(false)
    const {selectRef} = useDisableSelect(logout, setLogout)

    const terminateSession = async () => {
        try {
            await axios.get(`${getUrl}/auth/logout`)
            setUsername("")
            router.push('/login')
        } catch (error: any) {
            console.log(error.message)
        }
        
    }


    return (
        <>
            <h2 className='navbar-sign' ref={selectRef}
            onClick={() => setLogout(!logout)}
            >{username}</h2>
            {logout && <div className='navbar-logout' onClick={() => terminateSession()}>Log Out</div>}
        </>
        
    )
}

export default LogOutDropdown