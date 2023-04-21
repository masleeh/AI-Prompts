import { useEffect, useRef} from "react";

const useDisableSelect = (isShown:boolean, setIsShown:Function) => {
    const selectRef = useRef<any>(null)

    
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent | TouchEvent) => {
            if (selectRef.current && !selectRef.current.contains(event.target as Node)) {
                setIsShown(false)
            }
        }

        if (isShown) {
            document.addEventListener('click', handleClickOutside)
        }

        return () => {
            document.removeEventListener('click', handleClickOutside)
        }
    }, [isShown])

    return {selectRef, isShown}
}

export default useDisableSelect