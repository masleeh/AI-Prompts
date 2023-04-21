import Markdown from "markdown-to-jsx"
import Code from "../UI/Article/Code"
import Head2 from "../UI/Article/Head2"
import Youtube from "../UI/Article/Youtube"
import Image from "../UI/Article/Image"
import { icons } from "@/assets/icons/icons"

interface IArticle {
  articleData: string,
  icon: string,
  title: string | string[] | undefined
}

const Article:React.FC<IArticle> = (props) => {
  return (
    <article className="article">
      <div className="container">

          <div className="article-img-cont">
            {icons[props.icon]}
          </div>
          
          <h1 className="article-title">{props.title}</h1>

          <Markdown options={{
            overrides: {
              h2: {
                component: Head2
              },
              Prompt: {
                component: Code
              },
              youtube: {
                component: Youtube
              },
              image: {
                component: Image
              }
            }
          }}>
            {props.articleData}
          </Markdown>

      </div>
    </article>
  )
}

export default Article