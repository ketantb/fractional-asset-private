import { useNavigate } from 'react-router-dom'
import ChannelPartnerSlider from './channel-partner-slider/channel-partner-slider'
import './channel-partner.css'

const ChannelPartner = () => {
    const navigate = useNavigate();
    return (
        <div className="channel-partner-wrapper">
            <section className="channel-partner-ub">
                <h2>Connect With Your Agent Today</h2>
                <div className="channel-partner-search-bar">
                    <section>
                        <div>
                            <label>Search by Name</label>
                        </div>
                        <div>
                            <input placeholder="SEARCH..." />
                        </div>
                    </section>
                    <section>
                        <div>
                            <label>Filter by city</label>
                        </div>
                        <div>
                            <select>
                                <option>Select...</option>
                            </select>
                        </div>
                    </section>
                </div>
            </section>
            <section className="channel-partner-lb">
                <div className="channel-partner-slider">
                    <ChannelPartnerSlider />
                </div>
                <div className="become-channel-partner-btn-container">
                    <button 
                    onClick={() => navigate('/become-a-channel-partner')}
                    className="become-channel-partner-btn"
                    >
                        BECOME A CHANNEL PARTNER
                    </button>
                </div>
            </section>
        </div>
    )
}

export default ChannelPartner