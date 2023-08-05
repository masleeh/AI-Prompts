import axios from "axios"
import { getUrl } from "./useGetUrl"


export const getCookies = async (router:any) => {

    axios.defaults.withCredentials = true

    const response = await axios.get(`${getUrl}/auth/login`)
    
    if (response.data.loggedIn === false) {
        // router.push('/login')
        return Promise.resolve(response.data)
    }
    else {
        return Promise.resolve(response.data.user)
    }
}