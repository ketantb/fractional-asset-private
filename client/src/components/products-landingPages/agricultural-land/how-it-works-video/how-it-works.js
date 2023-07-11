import './how-it-works.css'
import howFractionalLandWorksVideo from "../../../../assets/how_fractional_land_works_video.mp4"

const HowFractionalLandWorksVideo = () => {
    return (
        <div className="how-fractional-asset-works-video-component">
            <h2>How Fractional Land Works</h2>
            <div className="how-fractional-asset-works-video">
                <video src={howFractionalLandWorksVideo} controls loop muted />
            </div>
        </div>
    )
}

export default HowFractionalLandWorksVideo;