import { IBlocks } from "@/types/blocks"
import { icons } from "@/assets/icons/icons"
import { cutString } from "@/helpers/useCutString"

const SingleBlock:React.FC<IBlocks> = (props) => {
  return (
    <div className="block">
        {props.isAvailable ? <>
            <h2 className="block-title">{props.title}</h2>
            {props.articles.map((item) => {
                
                return (
                    <div className="block-article" id={`${props.index}`} style={{scrollPaddingTop: 120}} key={item.id} onClick={() => props.goToArticle(item.title)}>

                        <div className="block-article-img-container">
                            {icons[item.iconId]}
                        </div>
                        <h3 className="block-article-title">{cutString(item.title, props.lan, 44)}</h3>
                    </div>
                )
            })}
        </> : (
            <div className="block-wrapper">
            <img src="/images/lock.svg" alt="" className="block-wrapper-img" onClick={() => props.handleOpenLockModal()}/>

                <h2 className="block-title">{props.title}</h2>
                <div className="block-locked">
                    {props.articles.map((item) => { 
                        return (
                            <div className="block-article  block-article-locked" id={`${props.index}`} style={{scrollPaddingTop: 120}} key={item.id}>

                                <div className="block-article-img-container">
                                    {icons[item.iconId]}
                                </div>
                                <h3 className="block-article-title">{cutString(item.title, props.lan, 44)}</h3>
                            </div>
                        )
                    })}
                </div>
        </div>
        )}
    </div>
  )
}

export default SingleBlock