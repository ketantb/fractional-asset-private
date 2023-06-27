import './asset-container.css'
import yacht from '../../assets/yacht.png'
import car from '../../assets/car.png'
import art from '../../assets/painting.png'
import land from '../../assets/land.png'
import property from '../../assets/deal.png'
import jewellery from '../../assets/deal.png'
import villa from '../../assets/villa.png'
import apartment from '../../assets/apartments.png'
import shop from '../../assets/shop.png'
import warehouse from '../../assets/warehouse.png'
import fields from '../../assets/fields.png'
import resort from '../../assets/resort.png'
import parking from '../../assets/spaces.png'
import startup from '../../assets/startup.png'
import profit from '../../assets/profit.png'
import antique from '../../assets/gramophone.png'
import { useNavigate } from 'react-router-dom'



const AssetContainer = () => {
    const navigate = useNavigate();

    // background animation
    let c = 45;
    function draw() {
        document.documentElement.style.setProperty('--direction', c++ + 'deg');
        requestAnimationFrame(draw);
    }
    requestAnimationFrame(draw);
    // background animation ends


    return (
        <div className='asset-container-wrapper'>
            <div className="asset-container" data-aos='zoom-in'>
                <section className='asset-cards' onClick={() => { navigate('/car-page') }}>
                    <div className='face front'
                        style={{
                            background: 'url(https://images.pexels.com/photos/3608542/pexels-photo-3608542.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)',
                            backgroundPosition: 'center center'
                        }}>
                        <section>
                            <p >
                                <img className='asset-face-icons' src={car} alt='luxury-yacht' />
                            </p>
                            <p>
                                Fractional Car
                            </p>
                        </section>
                    </div>
                    <div className='face back'>
                        <p>
                            <img className='asset-face-icons' src={car} alt='luxury-yacht' />
                        </p>
                        <p>
                            Fractional Car
                        </p>
                        <p>Own your dream car in your budget</p>
                    </div>
                </section>
                <section className='asset-cards' onClick={() => {navigate('/art-page')}}>
                    <div className='face front'
                        style={{
                            background: 'url(https://images.pexels.com/photos/4442078/pexels-photo-4442078.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)',
                            backgroundPosition: 'center center'
                        }}>
                        <section>
                            <p>
                                <img className='asset-face-icons' src={art} alt='luxury-yacht' />
                            </p>
                            <p>
                                Fractional Art
                            </p>
                        </section>
                    </div>
                    <div className='face back'>
                        <p>
                            <img className='asset-face-icons' src={art} alt='luxury-yacht' />
                        </p>
                        <p>
                            Fractional Art
                        </p>
                        <p>Own your dream art in your budget</p>
                    </div>
                </section>
                <section className='asset-cards' onClick={() => { navigate('/yacht-page') }}>
                    <div className='face front'
                        style={{
                            background: 'url(https://images.pexels.com/photos/163236/luxury-yacht-boat-speed-water-163236.jpeg?auto=compress&cs=tinysrgb&w=300)',
                            backgroundPosition: 'center center',
                            backgroundSize: 'cover'
                        }}>
                        <section>
                            <p>
                                <img className='asset-face-icons' src={yacht} alt='luxury-yacht' />
                            </p>
                            <p>
                                Fractional Yacht
                            </p>
                        </section>
                    </div>
                    <div className='face back'>
                        <p>
                            <img className='asset-face-icons' src={yacht} alt='luxury-yacht' />
                        </p>
                        <p>
                            Fractional Yacht
                        </p>
                        <p>
                            Own your dream Yacht in your budget
                        </p>
                    </div>
                </section>
                <section className='asset-cards'>
                    <div className='face front'
                        style={{
                            background: 'url(https://images.pexels.com/photos/636342/pexels-photo-636342.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)',
                            backgroundPosition: 'center center'
                        }}>
                        <section>
                            <p>
                                <img className='asset-face-icons' src={land} alt='luxury-yacht' />
                            </p>
                            <p>
                                Fractional Land
                            </p>
                        </section>
                    </div>
                    <div className='face back'>
                        <p>
                            <img className='asset-face-icons' src={land} alt='luxury-yacht' />
                        </p>
                        <p>
                            Fractional Land
                        </p>
                        <p>
                            Own your dream land in your budget
                        </p>
                    </div>
                </section>
                {/* <section className='asset-cards'
                    onClick={() => { navigate('/property-page') }}>
                    <div className='face front'
                        style={{
                            background: 'url(https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg)',
                            backgroundPosition: 'center center',
                            backgroundSize: 'cover'
                        }}>
                        <section>
                            <p>
                                <img className='asset-face-icons' src={property} alt='luxury-yacht' />
                            </p>
                            <p>
                                Fractional Property
                            </p>
                        </section>
                    </div>
                    <div className='face back'>
                        <p>
                            <img className='asset-face-icons' src={property} alt='luxury-yacht' />
                        </p>
                        <p>
                            Fractional Property
                        </p>
                        <p>
                            Own your dream property in your budget
                        </p>
                    </div>
                </section> */}
                <section className='asset-cards' onClick={() => {navigate('/jewellery-page')}}>
                    <div className='face front'
                        style={{
                            background: 'url(https://images.pexels.com/photos/248077/pexels-photo-248077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)',
                            backgroundPosition: 'center center',
                            backgroundSize: 'cover'
                        }}>
                        <section>
                            <p>
                                <img className='asset-face-icons' src={jewellery} alt='luxury-yacht' />
                            </p>
                            <p>
                                Fractional Jewellery
                            </p>
                        </section>
                    </div>
                    <div className='face back'>
                        <p>
                            <img className='asset-face-icons' src={jewellery} alt='luxury-yacht' />
                        </p>
                        <p>
                            Fractional Jewellery
                        </p>
                        <p>
                            Own your dream jewellery in your budget
                        </p>
                    </div>
                </section>
                <section className='asset-cards' onClick={() => { navigate('/villa-page') }}>
                    <div className='face front'
                        style={{
                            background: 'url(https://images.pexels.com/photos/87378/pexels-photo-87378.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)',
                            backgroundPosition: 'center center'
                        }}>
                        <section>
                            <p >
                                <img className='asset-face-icons' src={villa} alt='luxury-yacht' />
                            </p>
                            <p>
                                Fractional Villas
                            </p>
                        </section>
                    </div>
                    <div className='face back'>
                        <p>
                            <img className='asset-face-icons' src={villa} alt='luxury-yacht' />
                        </p>
                        <p>
                            Fractional Villas
                        </p>
                        <p>Own your dream car in your budget</p>
                    </div>
                </section>
                <section className='asset-cards'>
                    <div className='face front' onClick={() => { navigate('/property-page') }}
                        style={{
                            background: 'url(https://images.pexels.com/photos/87223/pexels-photo-87223.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)',
                            backgroundPosition: 'center center'
                        }}>
                        <section>
                            <p >
                                <img className='asset-face-icons' src={apartment} alt='luxury-yacht' />
                            </p>
                            <p>
                                Fractional Appartment
                            </p>
                        </section>
                    </div>
                    <div className='face back'>
                        <p>
                            <img className='asset-face-icons' src={apartment} alt='luxury-yacht' />
                        </p>
                        <p>
                            Fractional Appartment
                        </p>
                        <p>Own your dream car in your budget</p>
                    </div>
                </section>
                <section className='asset-cards'>
                    <div className='face front' onClick={() => { navigate('/property') }}
                        style={{
                            background: 'url(https://images.pexels.com/photos/135620/pexels-photo-135620.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)',
                            backgroundPosition: 'center center'
                        }}>
                        <section>
                            <p >
                                <img className='asset-face-icons' src={shop} alt='luxury-yacht' />
                            </p>
                            <p>
                                Fractional Shop
                            </p>
                        </section>
                    </div>
                    <div className='face back'>
                        <p>
                            <img className='asset-face-icons' src={shop} alt='luxury-yacht' />
                        </p>
                        <p>
                            Fractional Shop
                        </p>
                        <p>Own your dream car in your budget</p>
                    </div>
                </section>
                <section className='asset-cards'>
                    <div className='face front' onClick={() => { navigate('/property') }}
                        style={{
                            background: 'url(https://images.pexels.com/photos/236705/pexels-photo-236705.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)',
                            backgroundPosition: 'center center'
                        }}>
                        <section>
                            <p >
                                <img className='asset-face-icons' src={warehouse} alt='luxury-yacht' />
                            </p>
                            <p>
                                Fractional Ware House
                            </p>
                        </section>
                    </div>
                    <div className='face back'>
                        <p>
                            <img className='asset-face-icons' src={warehouse} alt='luxury-yacht' />
                        </p>
                        <p>
                            Fractional Ware House
                        </p>
                        <p>Own your dream car in your budget</p>
                    </div>
                </section>
                <section className='asset-cards'>
                    <div className='face front' onClick={() => { navigate('/property') }}
                        style={{
                            background: 'url(https://images.pexels.com/photos/360013/pexels-photo-360013.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)',
                            backgroundPosition: 'center center'
                        }}>
                        <section>
                            <p >
                                <img className='asset-face-icons' src={fields} alt='luxury-yacht' />
                            </p>
                            <p>
                                Agricultural Plots
                            </p>
                        </section>
                    </div>
                    <div className='face back'>
                        <p>
                            <img className='asset-face-icons' src={fields} alt='luxury-yacht' />
                        </p>
                        <p>
                            Agricultural Plots
                        </p>
                        <p>Own your dream car in your budget</p>
                    </div>
                </section>
                <section className='asset-cards'>
                    <div className='face front' onClick={() => { navigate('/property') }}
                        style={{
                            background: 'url(https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)',
                            backgroundPosition: 'center center'
                        }}>
                        <section>
                            <p >
                                <img className='asset-face-icons' src={resort} alt='luxury-yacht' />
                            </p>
                            <p>
                                Fractional Resort
                            </p>
                        </section>
                    </div>
                    <div className='face back'>
                        <p>
                            <img className='asset-face-icons' src={resort} alt='luxury-yacht' />
                        </p>
                        <p>
                            Fractional Resort
                        </p>
                        <p>Own your dream car in your budget</p>
                    </div>
                </section>
                <section className='asset-cards'>
                    <div className='face front' onClick={() => { navigate('/property') }}
                        style={{
                            background: 'url(https://images.pexels.com/photos/1000633/pexels-photo-1000633.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)',
                            backgroundPosition: 'center center'
                        }}>
                        <section>
                            <p >
                                <img className='asset-face-icons' src={parking} alt='luxury-yacht' />
                            </p>
                            <p>
                                Fractional Parking Space
                            </p>
                        </section>
                    </div>
                    <div className='face back'>
                        <p>
                            <img className='asset-face-icons' src={parking} alt='luxury-yacht' />
                        </p>
                        <p>
                            Fractional Parking Space
                        </p>
                        <p>Own your dream car in your budget</p>
                    </div>
                </section>
                {/* <section className='asset-cards'>
                    <div className='face front' onClick={() => { navigate('/property') }}
                        style={{
                            background: 'url(https://images.pexels.com/photos/3277808/pexels-photo-3277808.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)',
                            backgroundPosition: 'center center'
                        }}>
                        <section>
                            <p >
                                <img className='asset-face-icons' src={startup} alt='luxury-yacht' />
                            </p>
                            <p>
                                Invest in Startup
                            </p>
                        </section>
                    </div>
                    <div className='face back'>
                        <p>
                            <img className='asset-face-icons' src={startup} alt='luxury-yacht' />
                        </p>
                        <p>
                            Invest in Startup
                        </p>
                        <p>Own your dream car in your budget</p>
                    </div>
                </section> */}
                <section className='asset-cards'>
                    <div className='face front' onClick={() => { navigate('/property') }}
                        style={{
                            background: 'url(https://images.pexels.com/photos/6802049/pexels-photo-6802049.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)',
                            backgroundPosition: 'center center'
                        }}>
                        <section>
                            <p >
                                <img className='asset-face-icons' src={startup} alt='luxury-yacht' />
                            </p>
                            <p>
                                Invest in Startup <br/>
                                buy equity in startup companies with minimum investment of ₹ 500
                            </p>
                        </section>
                    </div>
                    <div className='face back'>
                        <p>
                            <img className='asset-face-icons' src={startup} alt='luxury-yacht' />
                        </p>
                        <p>
                            Invest in Startup
                        </p>
                        <p>buy equity in startup companies with minimum investment of ₹ 500</p>
                    </div>
                </section>
                <section className='asset-cards'>
                    <div className='face front' onClick={() => { navigate('/property') }}
                        style={{
                            background: 'url(https://images.pexels.com/photos/612800/pexels-photo-612800.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)',
                            backgroundPosition: 'center center'
                        }}>
                        <section>
                            <p >
                                <img className='asset-face-icons' src={antique} alt='luxury-yacht' />
                            </p>
                            <p>
                                Fractional Antique
                            </p>
                        </section>
                    </div>
                    <div className='face back'>
                        <p>
                            <img className='asset-face-icons' src={antique} alt='luxury-yacht' />
                        </p>
                        <p>
                            Fractional Antique
                        </p>
                        <p>Own your dream car in your budget</p>
                    </div>
                </section>
                <section className='asset-cards'>
                    <div className='face front' onClick={() => { navigate('/property') }}
                        style={{
                            background: 'url(https://images.pexels.com/photos/1587927/pexels-photo-1587927.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)',
                            backgroundPosition: 'center center'
                        }}>
                        <section>
                            <p >
                                <img className='asset-face-icons' src={car} alt='luxury-yacht' />
                            </p>
                            <p>
                                Fractional Club
                            </p>
                        </section>
                    </div>
                    <div className='face back'>
                        <p>
                            <img className='asset-face-icons' src={car} alt='luxury-yacht' />
                        </p>
                        <p>
                            Fractional Club
                        </p>
                        <p>Own your dream car in your budget</p>
                    </div>
                </section>
                <section className='asset-cards'>
                    <div className='face front' onClick={() => { navigate('/property') }}
                        style={{
                            background: 'url(https://images.pexels.com/photos/269077/pexels-photo-269077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)',
                            backgroundPosition: 'center center'
                        }}>
                        <section>
                            <p >
                                <img className='asset-face-icons' src={car} alt='luxury-yacht' />
                            </p>
                            <p>
                                Co-own a stand alone commercial buinding
                            </p>
                        </section>
                    </div>
                    <div className='face back'>
                        <p>
                            <img className='asset-face-icons' src={car} alt='luxury-yacht' />
                        </p>
                        <p>
                            Co-own a stand alone commercial buinding
                        </p>
                        <p>Own your dream car in your budget</p>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default AssetContainer;