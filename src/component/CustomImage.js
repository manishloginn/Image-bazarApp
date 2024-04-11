import { useEffect, useState } from "react"
import "../style/constom-image.scss"


const CustomeImage = ({ url }) => {

    const [status, setStatus] = useState(1);

    useEffect(() => {
        const image = new Image();
        image.onload = () => {
            setStatus(3)
        }
        image.onerror = () => {
            setStatus(2)
        }
        image.src = url
    }, [])


    if (status === 1) return <div className="image-loading-skeleton"></div>
    if (status === 2) return <h1 > Loading Error</h1>

    return (
        <img src={url}  className="image" />
    )
}


export default CustomeImage