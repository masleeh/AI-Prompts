import { useRouter } from "next/router"

const FooterContainer = () => {
    const router = useRouter()


    return (
        <div className="footer">
            <button className="footer-btn" onClick={() => router.push('/feedback')}>Обратная связь</button>
        </div>
    )
}

export default FooterContainer