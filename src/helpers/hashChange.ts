import { useEffect } from "react"

const useHashChange = () => {
    const offsetAnchor = () => {
        window.scrollTo(window.scrollX, window.scrollY - 120)
    }

    useEffect(() => {
        window.addEventListener('hashchange', offsetAnchor)

        return () => {
            window.removeEventListener('hashchange', offsetAnchor)
        }
    }, [])
}

export default useHashChange