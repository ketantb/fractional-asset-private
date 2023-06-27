import React, { useState, useEffect } from 'react';
// import 'react-slick/dist/react-slick.css';
import Slider from 'react-slick';
import './corousel-slider.css';
import { MdOutlineArrowBackIos, MdOutlineArrowForwardIos } from 'react-icons/md';

const YachtImageSlider = () => {

  const images = [{
    id: 1,
    src: "https://seastyle.net/wp-content/uploads/2022/07/L77-photo-1-1.jpg",
    alt: "Image 1"
  },
  {
    id: 2,
    src: "https://seastyle.net/wp-content/uploads/2022/07/L67-photo-1-1.jpg",
    alt: "Image 2 "
  },
  {
    id: 3,
    src: "https://seastyle.net/wp-content/uploads/2022/07/L65-photo-1.jpg",
    alt: "Image 3"
  },
  {
    id: 4,
    src: "https://seastyle.net/wp-content/uploads/2022/07/L78-photo-1.jpg",
    alt: "Image 4"
  },
  {
    id: 5,
    src: "https://seastyle.net/wp-content/uploads/2022/07/1-1.jpg",
    alt: "Image 5"
  }
  ];

  const NextArrow = ({ onClick }) => {
    return (
      <div className='arrow next' onClick={onClick}>
        <MdOutlineArrowForwardIos />
      </div>
    )
  }

  const PrevArrow = ({ onClick }) => {
    return (
      <div className='arrow prev' onClick={onClick}>
        <MdOutlineArrowBackIos />
      </div>
    )
  }

  const [imageIndex, setImageIndex] = useState(0);

  const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    lazyLoad: true,
    navigator: true,
    speed: 300,
    centerMode: true,
    centerPadding: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (current, next) => setImageIndex(next),
    // autoplay: true,
    // autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  }
  return (
    <section className='yacht-slider-container'>
      <div className="yacht-slider-header">
        <h3>Our Fleet</h3>
        <h6>Explore the exquisite fleet Sea Style has waiting for you.</h6>
      </div>
      <div className="imgslider">
        <Slider {...settings}>
          {images.map((item, idx) => (
            <div className={idx == imageIndex ? 'slide activeSlide' : 'slide'} key={item.id}>
              <section>
                <p>Lagoon 55</p>
                <p>Starting at $625,000</p>
              </section>
              <section>
                <img src={item.src} alt={item.alt} />
              </section>
              <section>
                <button>
                  Learn More
                </button>
              </section>
            </div>
          ))}
        </Slider>
        <p className='yacht-slider-pagination'>
          {imageIndex + 1} / {images.length}
        </p>
      </div>
    </section>
  )
};

export default YachtImageSlider;