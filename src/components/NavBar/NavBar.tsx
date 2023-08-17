import Link from "next/link"
import { cutString } from "@/helpers/useCutString"
import { icons } from "@/assets/icons/icons"
import { GlobalContext } from '@/context/context'
import {useContext} from 'react'
import { INav } from "@/types/navbar"
import LogOutDropdown from "../UI/Navbar/LogOutDropdown"
import BlocksDropdown from "../UI/Navbar/BlocksDropdown"



const NavBar:React.FC<INav> = ({lan, setLan, dropdown, setDropdown, switchLanguage, blocks, router}) => {
  const {username, setUsername} = useContext(GlobalContext)
  return (
    <nav className="navbar">
        <div className="navbar-row">
          <Link href="/" className="navbar-main">
              <div className="navbar-img-cont">
                {icons.ico1}
              </div>
              {lan == 'en' ? cutString("1000+ Ultimate ChatGPT Prompts To Copy, Paste & Fuel Your Business", lan, 34): cutString("Главная", lan, 38)}
          </Link>
          
          {(router.asPath == '/' || router.asPath.includes('/#')) && <BlocksDropdown 
            blocks={blocks}
            dropdown={dropdown}
            setDropdown={setDropdown}
            router={router}
          />}

          {router.asPath !== "/login" && <Link href='/feedback' className="navbar-main">
              <div className="navbar-img-cont">
                {icons.ico26}
              </div>
              Обратная связь
          </Link>}
        </div>
        <div className="navbar-row">


          {/* <LangDropdown 
          lan={lan}
          dropdown={dropdown}
          setLan={setLan}
          setDropdown={setDropdown}
          switchLanguage={switchLanguage}
          /> */}
          {/* { lan == "ru" ?
            <div className="navbar-sign" onClick={() => switchLanguage('en')}><div className="navbar-img-cont">{UKIcon()}</div>EN</div>
            : <div className="navbar-sign" onClick={() => switchLanguage('ru')}><div className="navbar-img-cont">{RUIcon()}</div>RU</div>
          } */}
          {/* <div className="navbar-sign" onClick={() => {
            if (lan == 'en') switchLanguage('ru')
            else switchLanguage('en')
          }}>
            <div className="navbar-img-cont">{UKIcon()}</div>EN<div className="navbar-img-cont"> {RUIcon()}</div> RU</div> */}


          {username ? <LogOutDropdown username={username} router={router} setUsername={setUsername}/> : <Link href='/login' className="navbar-sign">Log In</Link>}
        </div>
    </nav>
  )
}

export default NavBar