import { useState } from 'react';
import './villa-details.css'
import { MdLocationPin } from 'react-icons/md';
import overviewIcon from '../../../assets/overview_icon.svg'
import locationIcon from '../../../assets/location_icon_property.svg'
import trainIcon from '../../../assets/hbits_villa_railway_icon.svg'

const ResortVillaApartmentDetails = () => {
    const images = [{
        id: 1,
        src: "https://images.pexels.com/photos/2476632/pexels-photo-2476632.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        alt: "Image 1"
    },
    {
        id: 2,
        src: "https://images.pexels.com/photos/206172/pexels-photo-206172.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        alt: "Image 2 "
    },
    {
        id: 3,
        src: "https://images.pexels.com/photos/87378/pexels-photo-87378.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        alt: "Image 3"
    },
    {
        id: 4,
        src: "https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        alt: "Image 4"
    },
    {
        id: 5,
        src: "https://images.pexels.com/photos/5997994/pexels-photo-5997994.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        alt: "Image 5"
    },
    {
        id: 6,
        src: "https://images.pexels.com/photos/6032280/pexels-photo-6032280.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        alt: "Image 6"
    },
    {
        id: 7,
        src: "https://images.pexels.com/photos/7031408/pexels-photo-7031408.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        alt: "Image 7"
    },
    {
        id: 8,
        src: "https://images.pexels.com/photos/14716523/pexels-photo-14716523.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        alt: "Image 8"
    },
    {
        id: 9,
        src: "https://images.pexels.com/photos/32870/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        alt: "Image 9"
    }
    ];

    const [currentImg, setCurrentImg] = useState(images[0].src)
    return (
        <div className='villa-details-container'>
            <section className='villa-details-r1'>
                <h3>French MNC Opportunity</h3>
                <p><span><MdLocationPin /></span>Andheri, Mumbai</p>
                <div className='villa-details-table'>
                    <section>
                        <p>Tenant</p>
                        <p className='villa-details-table-value'>Mane</p>
                    </section>
                    <div className='villa-details-table-dummy-border'></div>
                    <section>
                        <p>Min Ticket Size</p>
                        <p className='villa-details-table-value'>25 Lakh</p>
                    </section>
                    <p className='villa-details-table-dummy-border'></p>
                    <section>
                        <p>Entry Rental Yield</p>
                        <p className='villa-details-table-value'>10.04%</p>
                    </section>
                    <p className='villa-details-table-dummy-border'></p>
                    <section>
                        <p>Expected IRR</p>
                        <p className='villa-details-table-value'>16.33%</p>
                        <p>*Calculated on Asset value appreciation of 7.5% CAGR</p>
                    </section>
                    <p className='villa-details-table-dummy-border'></p>
                    <section>
                        <p>Asset Area</p>
                        <p className='villa-details-table-value'>17422 sq ft</p>
                    </section>
                    <p className='villa-details-table-dummy-border'></p>
                    <section>
                        <p>Asset Value</p>
                        <p className='villa-details-table-value'>17.61 Crore</p>
                    </section>
                </div>
            </section>
            <section className='villa-details-r2'>
                <div className='villa-corousel-current-img'>
                    <img src={currentImg} alt='' />
                </div>
                <div className='villa-corousel-all-img'>
                    {images.map((items) => {
                        return (
                            <>
                                <img src={items.src} alt={items.alt} onClick={() => { setCurrentImg(items.src) }} />
                            </>
                        )
                    })}
                </div>
            </section>
            <section className='villa-details-r3'>
                <div className='overview'>
                    <h4>
                        <span>
                            <img src={overviewIcon} alt='overview-img-icon' />
                        </span>
                        Overview
                    </h4>
                    <p>
                        An excellent opportunity that features a French multinational brand 'Mane' as a tenant,
                        occupying the space since 2016. The asset features an office space and a research lab that
                        caters to prominent FMCG players like Unilever, P&G and more. Their infrastructure gives an
                        obvious indication of the stickiness of the tenant. Mane, a global leader of the Fragrance and
                        Flavour sector, is headquartered in France with a 1.6 billion dollar turnover as of 2020.
                        The asset is in a commercial building, Imperium located in Andheri, near the metro and airport.
                        The entry yield for this property is 10.04% annually, and the targeted IRR is 16.33%.
                        The lease agreement term is for five years and the lock-in period is for three years.
                    </p>
                </div>
                <div className='location-and-property-card'>
                    <section>
                        <h4>
                            <span>
                                <img src={locationIcon} alt='overview-img-icon' />
                            </span>
                            Location
                        </h4>
                        <p>
                            Andheri enjoys excellent connectivity and is well connected to the other parts of city via rail,
                            bus metro facilitating access to other commercial hubs. It attracts tenants from all sectors due
                            to quality of office spaces.
                        </p>
                    </section>
                    <section>
                        <h5>
                            <span>
                                <img src={trainIcon} alt='overview-img-icon' />
                            </span>
                            Property
                        </h5>
                        <p>
                            Andheri enjoys excellent connectivity and is well connected to the other parts of city via rail,
                            bus metro facilitating access to other commercial hubs. It attracts tenants from all sectors due to
                            quality of office spaces.
                        </p>
                    </section>
                </div>
                <div className='actual-location-details'>
                    <h4>Andheri</h4>
                    <p>
                        Andheri enjoys excellent connectivity and is well connected to the other parts of city via rail,
                        bus metro facilitating access to other commercial hubs. It attracts tenants from all sectors due to
                        quality of office spaces.
                    </p>
                </div>
            </section>
        </div>
    )
}

export default ResortVillaApartmentDetails