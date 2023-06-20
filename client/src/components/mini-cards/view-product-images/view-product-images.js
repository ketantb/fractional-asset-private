import './view-product-images.css'
import { useState } from "react"

const ViewProductImages = ({ images, closeImagesModal }) => {
    const [currentImg, setCurrentImg] = useState(images[0])
    return (
        <div className='view-product-images-corousel'>
            <section className='current-img'>
                <img src={currentImg} alt='' />
            </section>
            <section className='all-img'>
                {images.map((item, index) => {
                    return (
                        <>
                            <img src={item} alt={`car-img${index}`} onClick={() => { setCurrentImg(item) }} />
                        </>
                    )
                })}
            </section>
        </div>
    )
}

export default ViewProductImages;