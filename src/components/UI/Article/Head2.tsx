import { PropsWithChildren } from "react"




const Head2:React.FC<PropsWithChildren> = ({children}) => {
  return (
    <div className="article-head2">{children}</div>
  )
}

export default Head2