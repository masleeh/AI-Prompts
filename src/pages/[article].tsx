import MainContainer from '@/components/MainContainer'
import { useRouter } from 'next/router'
import Article from '@/components/Article/Article'
import { useState, useLayoutEffect, useContext } from 'react'
import axios from 'axios'
import { getCookies } from '@/helpers/useGetCookies'
import { GlobalContext } from '@/context/context'
import { getUrl } from '@/helpers/useGetUrl'

const ArticlePage = () => {
    const {userId, setUserId, setUsername, lan} = useContext(GlobalContext)

    const router = useRouter()
    const {article} = router.query

    const [articleData, setArticleData] = useState("")
    const [icon, setIcon] = useState("")

    const getArticle = async () => {
        const user = await getCookies(router)
        if (user) {
            setUserId(user.userId)
            setUsername(user.user)
            try {
                const response = await axios.post(`${getUrl}/articles`, {
                    userId: userId,
                    article: article,
                    lan: lan
                })
                setArticleData(response.data.data)
                setIcon(response.data.icoId)
            } catch (error:any) {
                console.log(error.message)
            }
        }
        else {

        }
    }

    useLayoutEffect(() => {
        if (!article) return

        getArticle()
    }, [article, userId])

    return <MainContainer title={article}>
        <Article 
            articleData={articleData}
            icon={icon}
            title={article}
        />
    </MainContainer> 
}

export default ArticlePage