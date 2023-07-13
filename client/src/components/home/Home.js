import { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import "./Home.css";
import AssetContainer from "../Asset-Container/asset-container";
import PreLoader from "../../pre-loaders/PreLoader";
import WhyUs from "../website-details/why-us/WhyUs";
import Steps from "../Steps/steps";
import HomeVideo from "../HomeVideo/HomeVideo";
import ReactFullpage from "@fullpage/react-fullpage";
import HomeBannerImg from "../../assets/HomeBannerImg.jpg";
import HomeSlider1 from "../website-details/HomeSlider1/HomeSlider1";

const LandingPage = () => {
  const anchors = ["1", "2", "3", "4", "5", "6", "7", "8"];
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
      sectionsColor={[
        "#ffffff",
        "#fffbeb",
        "#ffffff",
        "#ffffff",
        "red",
        "green",
        "blue",
        "yellow",
      ]}
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

            {/* 2nd Page */}
            <div className="section">
              <div className="home-testimonial">
                <HomeVideo />
              </div>
            </div>

            {/* 3rd Page */}
            <div className="section">
              <div className="home-slider1">
                <HomeSlider1 />
              </div>
            </div>

            {/* 4th Page */}
            <div className="section">
              <div className="home-whyus">
                <WhyUs />
              </div>
            </div>

            {/* 5th Page */}
            <div className="section">
              <div className="home-testimonial"></div>
            </div>

            {/* 6th Page */}
            <div className="section">
              <div className="home-calculator"></div>
            </div>

            {/* 7th Page */}
            <div className="section">
              <div className="home-steps"></div>
            </div>

            {/* 8th Page */}
            <div className="section">
              <div className="home-footer"></div>
            </div>
          </div>
        );
      }}
    />
  );
};

export default LandingPage;
