import {icons} from '../../../assets/icons/icons'
import { GlobalContext } from '@/context/context'
import {useContext, useEffect, useState} from 'react'
import axios from 'axios'
import SingleBlock from './SingleBlock'
import { IBlocks } from '@/types/blocks'
import { useRouter } from 'next/router'
import { getCookies } from '@/helpers/useGetCookies'
import { getUrl } from '@/helpers/useGetUrl'

interface IBlockContainer {
    t: any
}


const BlocksContainer:React.FC<IBlockContainer> = ({t}) => {
    const {lan, userId, setUserId, setUsername} = useContext(GlobalContext)
    const [blocks, setBlocks] = useState<IBlocks[]>([])
    const router = useRouter()

    axios.defaults.withCredentials = true
    
    const getBlocks = async () => {
        const user = await getCookies(router)
        // console.log(lan)
        if (user && lan) {
            const response = await axios.get(`${getUrl}/blocks/`, {
                headers: {
                    lan: lan
                }
            })
            setUserId(user.userId)
            setUsername(user.user)
            setBlocks(response.data)
        }
    }

    const goToArticle = (article:string) => {
        const validUrl = encodeURIComponent(article)
        router.push(`${validUrl}`)
    }


    const rendBlocks = blocks.map((item, index) => {
        return (
            <SingleBlock
                key={index}
                title={item.title}
                articles={item.articles}
                lan={lan}
                blockId={item.blockId}
                userId={userId}
                goToArticle={goToArticle}
                index={index}
            />
        )
    })

    useEffect(() => {
        getBlocks()
    }, [lan])
    
    return (
        <div className="container">
            <div className='blocks-img'>
                {icons.ico1}
            </div>
            <h1 className='blocks-title'>{t('maintitle')}</h1>
            <div className="blocks">
                {rendBlocks}
            </div>
        </div>
    )
}

export default BlocksContainer