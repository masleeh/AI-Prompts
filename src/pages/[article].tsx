import MainContainer from '@/components/MainContainer'
import { useRouter } from 'next/router'
import Article from '@/components/Article/Article'
import { useState, useLayoutEffect, useContext, useEffect } from 'react'
import axios from 'axios'
import { getCookies } from '@/helpers/useGetCookies'
import { GlobalContext } from '@/context/context'
import { getUrl } from '@/helpers/useGetUrl'
import ErrorModal from '@/components/UI/Article/ErrorModal'

const ArticlePage = () => {
    const {userId, setUserId, setUsername, lan} = useContext(GlobalContext)

    const router = useRouter()
    const {article} = router.query

    const [articleData, setArticleData] = useState("")
    const [icon, setIcon] = useState("")

    const [errorPopup, setErrorPopup] = useState(false)

    const getArticle = async () => {
        const user = await getCookies(router)
        if (user) {
            setUserId(user.userId)
            setUsername(user.user)
            try {
                const token = localStorage.getItem('notion_token')
                const response = await axios.post(`${getUrl}/articles`, {
                    userId: userId,
                    article: article,
                    lan: lan
                }, {
                    headers: {
                        authorization: `Bearer ${token}`
                    }
                })
                setArticleData(response.data.data)
                setIcon(response.data.icoId)
            } catch (error:any) {
                if (error.response.data.isSessionFailed) {
                    setErrorPopup(true)
                }
                else {
                    console.log(error.response.data)
                }
            }
        }
        else {
            router.push('/login')
        }
    }

    const terminateSession = async () => {
        try {
            const response = await axios.get(`${getUrl}/auth/logout`)
            setUsername("")
            setErrorPopup(false)
            router.push('/login')
        } catch (error: any) {
            console.log(error.message)
        } 
    }

    useEffect(() => {
        if (errorPopup) document.body.style.overflow = 'hidden'
        else document.body.style.overflow = 'auto'
    }, [errorPopup])

    useLayoutEffect(() => {
        if (!article) return

        getArticle()
    }, [article, userId])

    return (
        <MainContainer title={article}>
           {errorPopup && <ErrorModal terminateSession={terminateSession}/>}
            <Article 
                articleData={articleData}
                icon={icon}
                title={article}
            />
        </MainContainer> 
    ) 
}

export default ArticlePage