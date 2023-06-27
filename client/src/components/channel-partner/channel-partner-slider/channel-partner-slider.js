import React, { useState, useEffect } from 'react';
// import 'react-slick/dist/react-slick.css';
import Slider from 'react-slick';
import './channel-partner-slider.css';
import { ImPhone } from 'react-icons/im';
import { MdOutlineArrowBackIos, MdOutlineArrowForwardIos, MdEmail } from 'react-icons/md';

const ChannelPartnerSlider = () => {

    const images = [{
        id: 1,
        src: "https://qph.cf2.quoracdn.net/main-thumb-366522568-200-rbldtllrstpzawykskemybncqsxvrqou.jpeg",
        alt: "Image 1",
        name: "Aditya Kapoor",
        city: "Goa"
    },
    {
        id: 2,
        src: "https://qph.cf2.quoracdn.net/main-thumb-306426203-200-emgrnrubiuckcuteuwpskpldaxtquvdn.jpeg",
        alt: "Image 2 ",
        name: "Sanjeev Chandna",
        city: "Uttarakhand"
    },
    {
        id: 3,
        src: "https://qph.cf2.quoracdn.net/main-thumb-17572-200-huktuybwvskvxmgrnpdovumcsqdtsnwl.jpeg",
        alt: "Image 3",
        name: "Rakesh Thakur",
        city: "Goa"
    },
    {
        id: 4,
        src: "https://qph.cf2.quoracdn.net/main-thumb-29052359-200-yjktwsnlzabtdwlcmbfjrsxtqzpgzcxb.jpeg",
        alt: "Image 4",
        name: "Prasanna Venkatesh",
        city: "Karnataka"
    },
    {
        id: 5,
        src: "https://qph.cf2.quoracdn.net/main-thumb-57175349-200-atchusonusdrathgxwyfxqtvvzfxsfbi.jpeg",
        alt: "Image 5",
        name: "Investorey",
        city: "Karnataka"
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
        dots: true,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        lazyLoad: true,
        navigator: true,
        speed: 300,
        centerMode: true,
        centerPadding: 0,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        beforeChange: (current, next) => setImageIndex(next),
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 1200,
                settings: {     
                    slidesToShow: 3,
                    slidesToScroll: 3,
                }
            },
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    }
    return (
        <section className='cp-slider-container'>
            <div className="cp-slider-imgslider">
                <Slider {...settings}>
                    {images.map((item, idx) => (
                        <div className={idx == imageIndex ? 'cp-slide cp-activeSlide' : 'cp-slide'} key={item.id}>
                            <div className='cp-slider-content'>
                                <section>
                                    <img className='cp-slider-img' src={item.src} alt={item.alt} />
                                </section>
                                <section>
                                    <p className='cp-name'>{item.name}</p>
                                </section>
                                <section>
                                    <p className='cp-city'>{item.city}</p>
                                </section>
                                <section className='cp-slider-btns'>
                                    <p>
                                        <button>
                                            <ImPhone/>
                                        </button>
                                    </p>
                                    <p>
                                        <button>
                                            <MdEmail />
                                        </button>
                                    </p>
                                </section>
                            </div>
                        </div>
                    ))}
                </Slider>
                {/* <p className='yacht-slider-pagination'>
                    {imageIndex + 1} / {images.length}
                </p> */}
            </div>
        </section>
    )
}

export default ChannelPartnerSlider;