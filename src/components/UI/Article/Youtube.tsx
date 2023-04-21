import YouTube from "react-youtube"

const Youtube:React.FC<any> = ({children}) => {
    const options = {
        width: '100%',
        height: '500'
    }
    return (
        <YouTube videoId={children} className="article-youtube" opts={options}/>
    )
}

export default Youtube