import './villa-container.css'
import { AiOutlineLine } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';

const VillaContainer = ({ villas }) => {
    const navigate = useNavigate()
    console.log(villas)
    return (
        <div className='villa-card-container'>
            {villas.map((villa) => {
                const villaImageUrl = 'url(https://images.pexels.com/photos/53610/large-home-residential-house-architecture-53610.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)';
                return (
                    <div className='villa-card'>
                        <section className="villa-card-ub"
                            style={{
                                backgroundImage: villaImageUrl,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                width: '100%',
                                // Set the desired height
                            }}
                        >
                            {/* <p>
                                <img src='https://images.pexels.com/photos/53610/large-home-residential-house-architecture-53610.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                                    alt='villa-img' />
                            </p> */}
                            <div>
                                <p>
                                    <button className='view-villa-in-map-btn'>
                                        View Property in Maps
                                    </button>
                                </p>
                                <p className='villa-name'>
                                    FRENCH MNC OPPORTUNITY
                                </p>
                                <p className='villa-location'>
                                    Andheri, Mumbai
                                </p>
                            </div>
                            <div>
                                <p>
                                    <button className='view-villa-details-btn' onClick={() => navigate('/villa-details')}>
                                        View Villa
                                    </button>
                                </p>
                            </div>
                        </section>
                        <section className="villa-card-lb">
                            <div>
                                <p>Sitel Group</p>
                                <p>Resale Available</p>
                                <p>Completely Funded</p>
                            </div>
                            <div>
                                <section>
                                    <p>Asset Value</p>
                                    <p className='dummy-border'></p>
                                    <p>Rs 42.61 Crore</p>
                                </section>
                                <section>
                                    <p>Asset Value</p>
                                    <p className='dummy-border'></p>
                                    <p>Rs 42.61 Crore</p>
                                </section>
                                <section>
                                    <p>Asset Value</p>
                                    <p className='dummy-border'></p>
                                    <p>Rs 42.61 Crore</p>
                                </section>
                            </div>
                        </section>
                    </div>
                )
            })}
        </div >
    )
}

export default VillaContainer