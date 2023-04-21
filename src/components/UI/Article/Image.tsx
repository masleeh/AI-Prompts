import { useEffect, useState } from "react"
import ImagePopup from "./ImagePopup"


const Image:React.FC<any> = ({children}) => {
    const [isShown, setIsShown] = useState(false)

    useEffect(() => {
        if (isShown) document.body.style.overflow = 'hidden'
        else document.body.style.overflow = 'auto'
    }, [isShown])

    if (children.length < 1) return (<></>)
    return (
        <div className="article-image">
            <img alt="" src={children[0].props.href} onClick={() => setIsShown(true)}/>
            {isShown && <ImagePopup 
            src={children[0].props.href}
            setIsShown={setIsShown}
            isShown={isShown}
            />}
        </div>
    )
}

export default Image