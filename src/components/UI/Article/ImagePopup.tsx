import { useCallback, useRef, useEffect} from "react";
import QuickPinchZoom, { make3dTransformValue } from "react-quick-pinch-zoom";

interface IPopup {
    src: any,
    setIsShown: Function,
    isShown: boolean
}

const ImagePopup:React.FC<IPopup> = (props) => {
    const imgRef = useRef(null);
    const onUpdate = useCallback(({ x, y, scale }:any) => {
    const { current: img }:any = imgRef;

    if (img) {
        const value = make3dTransformValue({ x, y, scale });

        img.style.setProperty("transform", value);
        }
    }, []);

    useEffect(() => {
        const handleClickOutside = (event:Event) => {
            if (event.target === document.querySelector('.popup') || event.target === document.querySelector('.popup-wrapper')) {
                props.setIsShown(false)
            } 
        }

        document.addEventListener('click', handleClickOutside)

        return () => document.removeEventListener('click', handleClickOutside)
    }, [])

    return (
        <div className="popup">
            <img alt="" src='/images/x.svg' className="popup-x" onClick={() => props.setIsShown(false)}/>
                <QuickPinchZoom onUpdate={onUpdate} maxZoom={3}
                doubleTapZoomOutOnMaxScale={true}
                horizontalPadding={-((window.innerWidth / 1.45) - Number(document.querySelector<HTMLElement>('.article-image')!.offsetWidth))}
                verticalPadding={-((window.innerHeight / 1.45) - Number(document.querySelector<HTMLElement>('.article-image')!.offsetHeight))}
                >
                <div className='popup-wrapper' ref={imgRef}>
                    <img  src={props.src} className="popup-img"/>
                </div>
                </QuickPinchZoom>
        </div>
    )
}

export default ImagePopup