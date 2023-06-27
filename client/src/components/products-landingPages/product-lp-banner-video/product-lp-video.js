import './product-lp-video.css'
import yachtVideo from '../../../assets/yacht-video.mp4'

const ProductLPBannerVideo = ({ productType }) => {
    return (
        <section className="product-lp-banner-video-container">
            <video src={yachtVideo} autoPlay loop muted />
        </section>
    )
}

export default ProductLPBannerVideo