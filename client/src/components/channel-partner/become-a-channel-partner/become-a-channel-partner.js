import { useState } from 'react'
import './become-a-channel-partner.css'

const BecomeAChannelPartner = () => {

    const indianStatesArr = ["Andaman and Nicobar Island", "Andhra Pradesh", "Arunachal Pradesh", "Assam",
        "Bihar", "Chandigarh", "Chhattisgarh", "Dadra and Nagar Haveli and Daman and Diu", "Delhi",
        "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka",
        "Jammu and Kashmir", "Kerala", "Ladakh", "Lakshadweep", "Madhya Pradesh", "Maharashtra",
        "Manipur", "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Puducherry", "Punjab",
        "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura", "Agartala",
        "Uttar Pradesh", "Uttarakhand", "West Bengal"]

    const [cpForm, setCPForm] = useState({
        name: '', phno: '', email: '', city: '', state: 'Andaman and Nicobar Island',
        zipcode: '', agentType: 'EXP Agent',
    })

    const handleCPForm = (e) => {
        setCPForm({ ...cpForm, [e.target.name]: e.target.value })
    }

    const postCPForm = (e) => {
        console.log(cpForm)
        e.preventDefault()
    }

    return (
        <div className="channel-partner-form-wrapper">
            <h4>Become A Channel Partner</h4>
            <form className="channel-partner-form" onSubmit={postCPForm}>
                <section>
                    <input name='name' className='cp-form-input-text' placeholder="YOUR NAME" onChange={handleCPForm} />
                </section>
                <section>
                    <input name='phno' className='cp-form-input-text' placeholder="YOUR PHONE" onChange={handleCPForm} />
                </section>
                <section>
                    <input name='email' className='cp-form-input-text' placeholder="YOUR EMAIL" onChange={handleCPForm} />
                </section>
                <section>
                    <input name='city' className='cp-form-input-text' placeholder="YOUR CITY" onChange={handleCPForm} />
                </section>
                <section>
                    <select name='state' onChange={handleCPForm}>
                        {indianStatesArr.map((state, idx) => {
                            return (
                                <option key={idx}>{state}</option>
                            )
                        })}
                    </select>
                </section>
                <section>
                    <input name='zipcode' className='cp-form-input-text' placeholder="ZIP CODE" onChange={handleCPForm} />
                </section>
                <section>
                    <select name='agentType' onChange={handleCPForm}>
                        <option>EXP Agent</option>
                        <option>Individual Agent</option>
                    </select>
                </section>
                <section className='cp-form-input-type-file-wrapper'>
                    <div>
                        <section>
                            <label>Attach picture<span>*</span></label>
                        </section>
                        <section>
                            <input className='cp-form-input-type-file-1-n-3' type="file" />
                        </section>
                    </div>
                    <div>
                        <section>
                            <label>Pan Card<span>*</span></label>
                        </section>
                        <section>
                            <input className='cp-form-input-type-file-2-n-4' type="file" />
                        </section>
                    </div>
                </section>
                <section className='cp-form-input-type-file-wrapper'>
                    <div>
                        <section>
                            <label>Aadhar Card (Front)<span>*</span></label>
                        </section>
                        <section>
                            <input className='cp-form-input-type-file-1-n-3' type="file" />
                        </section>
                    </div>
                    <div>
                        <section>
                            <label>Aadhar Card (Back)<span>*</span></label>
                        </section>
                        <section>
                            <input className='cp-form-input-type-file-2-n-4' type="file" />
                        </section>
                    </div>
                </section>
                <section className='cp-form-checkbox-section'>
                    <div>
                        <input id='become-cp-agreement-checkbox' type="checkbox" className='cp-form-input-type-checkbox' />
                    </div>
                    <div>
                        <label htmlFor='become-cp-agreement-checkbox'>I give Fractional Assets permission to contact me & agree the <span>terms</span></label>
                    </div>
                </section>
                <section>
                    <button>
                        SEND REQUEST
                    </button>
                </section>
            </form>
        </div>
    )
}

export default BecomeAChannelPartner