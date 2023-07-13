import { useEffect, useState } from "react";
import ReactFullpage from "@fullpage/react-fullpage";

import "./Home.css";
import WhyUs from "../website-details/why-us/WhyUs";
import Steps from "../Steps/steps";
import HomeVideo from "../HomeVideo/HomeVideo";
// import TestimonialSlider from "../testimonial/testimonial";

const LandingPage = () => {
  const anchors = ["1", "2", "3", "4"];
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1100);

    return () => clearTimeout(timer);
  }, []);

  // image arry for slider
  const sliderArr = [
    "https://images.pexels.com/photos/1642125/pexels-photo-1642125.jpeg?cs=srgb&dl=pexels-the-lazy-artist-gallery-1642125.jpg&fm=jpg",
    "https://wallpaperboat.com/wp-content/uploads/2020/10/23/57974/real-estate-13.jpg",
    "https://images.pexels.com/photos/388830/pexels-photo-388830.jpeg?cs=srgb&dl=pexels-david-mcbee-388830.jpg&fm=jpg",
  ];
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
        "#ffffff",
        "yellow",
      ]}
      onLeave={(origin, destination, direction) => {
        console.log("onLeave event", { origin, destination, direction });
      }}
      render={({ state, fullpageApi }) => {
        // console.log("render prop change", state, fullpageApi);

        return (
          <div>
            <div className="section">
              <div
                id="carouselExampleIndicators"
                // className="carousel" we need to comment this class to take full size of image
                data-ride="carousel"
                data-interval="1800"
              >
                <ol className="carousel-indicators">
                  <li
                    data-target="#carouselExampleIndicators"
                    data-slide-to="0"
                    className="active"
                  ></li>
                  <li
                    data-target="#carouselExampleIndicators"
                    data-slide-to="1"
                  ></li>
                  <li
                    data-target="#carouselExampleIndicators"
                    data-slide-to="2"
                  ></li>
                </ol>
                <div className="carousel-inner">
                  {sliderArr.map((image, index) => {
                    return (
                      <div
                        className={`carousel-item ${
                          index === 0 ? "active" : ""
                        } `}
                      >
                        <div className="slideImg">
                          <img
                            className="d-block w-100"
                            src={image}
                            alt="slideImg"
                          />
                          <div className="content">
                            <h2 data-aos="fade-down" data-aos-duration="900">
                              Discover the advantages of fractional ownership
                              <span data-aos="fade-up" data-aos-duration="900">
                                Invest in high-value assets without high cost
                              </span>
                            </h2>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
                <a
                  className="carousel-control-prev"
                  href="#carouselExampleIndicators"
                  role="button"
                  data-slide="prev"
                >
                  {/* <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="sr-only">Previous</span> */}
                </a>
                <a
                  className="carousel-control-next"
                  href="#carouselExampleIndicators"
                  role="button"
                  data-slide="next"
                >
                  {/* <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="sr-only">Next</span> */}
                </a>
              </div>
            </div>

            {/* 2nd Page */}
            <div className="section">
              <div className="home-steps">
                <HomeVideo />
              </div>
            </div>
            <div className="section">
              <div className="home-testimonial">
                {/* <TestimonialSlider /> */}
              </div>
            </div>
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
              <div className="home-steps">
                <Steps />
              </div>
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

// ReactDOM.render(<LandingPage />, document.getElementById("react-root"));
