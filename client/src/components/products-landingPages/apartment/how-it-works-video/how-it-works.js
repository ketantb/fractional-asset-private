import './how-it-works.css'
import howFractionalApartmentWorksVideo from "../../../../assets/how_fractional_shop_works _video.mp4"

const HowFractionalApartmentWorksVideo = () => {
    return (
        <div className="how-fractional-asset-works-video-component">
            <h2>How Fractional Apartment Works</h2>
            <div className="how-fractional-asset-works-video">
                <video src={howFractionalApartmentWorksVideo} controls loop muted />
            </div>
        </div>
    )
}

export default HowFractionalApartmentWorksVideo;