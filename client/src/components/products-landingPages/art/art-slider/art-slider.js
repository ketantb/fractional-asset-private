import Slider from 'react-slick';

import { slides } from '../art-configs';
import styles from './art-slider.module.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ArtSlider = () => {
  const settings = {
    speed: 3000,
    autoplay: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    cssEase: 'linear',
    autoplaySpeed: 3000,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <>
      <h1 className={styles.sliderTitle}>IRL Exhibitions</h1>
      <div className={styles.sliderWrapper}>
        <Slider {...settings}>
          {slides.map((i, j) => (
            <div key={j} className={styles.slide}>
              <div>
                <img src={i.img} alt={i.img} />
                <h3>{i.exhibition}</h3>
                <h2>{i.event}</h2>
                <p>{i.address}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
};

export default ArtSlider;