import { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import "./Home.css";
import AssetContainer from "../Asset-Container/asset-container";
import PreLoader from "../../pre-loaders/PreLoader";
import WhyUs from "../website-details/why-us/WhyUs";
import Steps from "../Steps/steps";
import TestimonialSlider from "../testimonial/testimonial";
import BannerSlider from "../website-details/BannerSlider/BannerSlider";
import ReactFullpage from "@fullpage/react-fullpage";
import HomeBannerImg from "../../assets/HomeBannerImg.jpg";

const LandingPage = () => {
  const anchors = ["1", "2", "3", "4"];
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <ReactFullpage
      anchors={anchors}
      navigation
      navigationTooltips={anchors}
      navigate
      autoScrolling={true}
      scrollOverflow={true}
      scrollHorizontally={true}
      keyboardScrolling={true}
      sectionsColor={["#dbeafe", "#dbeafe", "#dbeafe"]}
      onLeave={(origin, destination, direction) => {
        console.log("onLeave event", { origin, destination, direction });
      }}
      render={({ state, fullpageApi }) => {
        console.log("render prop change", state, fullpageApi);

        return (
          <div>
            <div className="section">
              <div
                id="carouselExampleSlidesOnly"
                // class="carousel slide"
                data-ride="carousel"
              >
                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <div className="home-banner">
                      <img src={HomeBannerImg} alt="homeImgBanner" />
                      <h2>
                        Discover the advantages of fractional ownership
                        <span>
                          Invest in high-value assets without high cost
                        </span>
                      </h2>
                    </div>
                  </div>
                  <div class="carousel-item">
                    <div className="home-banner">
                      <img src={HomeBannerImg} alt="homeImgBanner" />
                      <h2>
                        Discover the advantages of fractional ownership
                        <span>
                          Invest in high-value assets without high cost
                        </span>
                      </h2>
                    </div>
                  </div>
                  <div class="carousel-item">
                    <div className="home-banner">
                      <img src={HomeBannerImg} alt="homeImgBanner" />
                      <h2>
                        Discover the advantages of fractional ownership
                        <span>
                          Invest in high-value assets without high cost
                        </span>
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="section">
              <div className="home-steps">
                <Steps />
              </div>
            </div>
            <div className="section">
              <div className="home-testimonial">
                <TestimonialSlider />
              </div>
            </div>
            <div className="section">
              <div className="home-whyus">
                <WhyUs />
              </div>
            </div>
          </div>
        );
      }}
    />
  );
};

export default LandingPage;

// ReactDOM.render(<LandingPage />, document.getElementById("react-root"));
