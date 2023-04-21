import Head from "next/head";
import { ReactNode, useState, useContext, useEffect } from 'react'
import NavBar from "./NavBar/NavBar";
import { GlobalContext } from '@/context/context'
import { useRouter } from 'next/router'
import axios from "axios";
import { getUrl } from '@/helpers/useGetUrl'
import useHashChange from "@/helpers/hashChange";


type MainContainerProps = {
    children: ReactNode,
    title: string | string[] | undefined,
    t?: any
}

const MainContainer:React.FC<MainContainerProps> = ({children, title}) => {
    const {lan, setLan} = useContext(GlobalContext)
    const [dropdown, setDropdown] = useState(false)
    const [blocks, setBlocks] = useState([])

    const router = useRouter()

    const switchLanguage = (lan: string) => {
        router.push("/", undefined, {locale: lan})
        setLan(lan)
    }

    const getSingleBlocks = async () => {
        try {
            const response = await axios.get(`${getUrl}/blocks/wa`)
            setBlocks(response.data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getSingleBlocks()
    }, [])

    return (
        <>
            <Head>
                <title>{title}</title>
                <meta charSet="UTF-8" />
                <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
                <link rel="icon" type="image/svg" href="/images/favicon.svg" sizes="16x16"></link>
                <link rel="icon" type="image/svg" href="/images/favicon32.svg" sizes="32x32"></link>
                <link rel="apple-touch-icon" sizes="180x180" href="/images/favicon180.svg" ></link>
            </Head>
            <div id="root">
                <NavBar 
                lan={lan}
                setLan={setLan}
                dropdown={dropdown}
                setDropdown={setDropdown}
                switchLanguage={switchLanguage}
                blocks={blocks}
                router={router}
                />
                {children}
            </div>
        </>
    )
}

export default MainContainer