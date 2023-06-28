import { useEffect, useState } from 'react'
import './become-a-channel-partner.css'
import { toast } from "react-hot-toast";
import axios from '../../../helpers/axios'
import { useNavigate } from 'react-router-dom';

const BecomeAChannelPartner = () => {

    const navigate = useNavigate()

    const indianStatesArr = ["Andaman and Nicobar Island", "Andhra Pradesh", "Arunachal Pradesh", "Assam",
        "Bihar", "Chandigarh", "Chhattisgarh", "Dadra and Nagar Haveli and Daman and Diu", "Delhi",
        "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka",
        "Jammu and Kashmir", "Kerala", "Ladakh", "Lakshadweep", "Madhya Pradesh", "Maharashtra",
        "Manipur", "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Puducherry", "Punjab",
        "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura", "Agartala",
        "Uttar Pradesh", "Uttarakhand", "West Bengal"]

    const [postCPFormStatus, setCPFormStatus] = useState(false)

    let cpFormButton = false

    const [cpForm, setCPForm] = useState({
        name: '', phno: '', email: '', city: '', state: 'Andaman and Nicobar Island',
        zipcode: '', agentType: 'EXP Agent'
    })

    const [checkbox, setCheckBox] = useState(false)

    const [cpFormImages, setCPFormImages] = useState({
        cpImage: '', panCardImage: '',
        aadharCardFrontImage: '', aadharCardBackImage: ''
    })

    const [err, setErr] = useState({
        name: '', phno: '', email: '', city: '', zipcode: '', cpImage: '',
        panImage: '', aadharCardFrontImage: '', aadharCardBackImage: '', checkbox: ''
    })

    const handleCPForm = (e) => {
        if (e.target.name == 'checkbox') {
            console.log(e.target.name, e.target.checked)
            setCheckBox(e.target.checked)
        }
        else {
            setCPForm({ ...cpForm, [e.target.name]: e.target.value })
        }
        setErr({
            name: '', phno: '', email: '', city: '', zipcode: '', cpImage: '', panImage: '',
            aadharCardFrontImage: '', aadharCardBackImage: '', checkbox: ''
        })
    }

    const handleImages = (e) => {
        setCPFormImages({ ...cpFormImages, [e.target.name]: e.target.files[0] })
        setErr({
            name: '', phno: '', email: '', city: '', zipcode: '', cpImage: '', panImage: '',
            aadharCardFrontImage: '', aadharCardBackImage: '', checkbox: ''
        })
    }

    const UploadImages = async (e) => {
        e.preventDefault()
        cpFormButton = true;
        console.log(cpForm, 1);
        if (!cpForm.name) {
            setErr({ ...err, name: true })
            cpFormButton = false;
            return
        }
        if (!cpForm.phno) {
            setErr({ ...err, phno: true })
            cpFormButton = false;
            return
        }
        if (!cpForm.email) {
            setErr({ ...err, email: true })
            cpFormButton = false;
            return
        }
        if (!cpForm.city) {
            setErr({ ...err, city: true })
            cpFormButton = false;
            return
        }
        if (!cpForm.zipcode) {
            setErr({ ...err, zipcode: true })
            cpFormButton = false;
            return
        }
        if (!cpFormImages.cpImage) {
            setErr({ ...err, cpImage: true })
            cpFormButton = false;
            return
        }
        if (!cpFormImages.panCardImage) {
            setErr({ ...err, panImage: true })
            cpFormButton = false;
            return
        }
        if (!cpFormImages.aadharCardFrontImage) {
            setErr({ ...err, aadharCardFrontImage: true })
            cpFormButton = false;
            return
        }
        if (!cpFormImages.aadharCardBackImage) {
            setErr({ ...err, aadharCardBackImage: true })
            cpFormButton = false;
            return
        }
        if (!checkbox) {
            setErr({ ...err, checkbox: true })
            cpFormButton = false;
            return
        }
        toast.loading("Uploading images. Please wait");
        let cloudUrlObject = {
            cpImage: '', panCardImage: '',
            aadharCardFrontImage: '', aadharCardBackImage: ''
        }
        for (let imageKey in cpFormImages) {
            let imgType = imageKey
            const imgData = new FormData();
            imgData.append("upload_preset", "insta_clone");
            imgData.append("file", cpFormImages[imageKey]);
            await axios
                .post(process.env.REACT_APP_CLOUDINARY_URL, imgData)
                .then((resp) => {
                    // console.log(resp.data.url);
                    cloudUrlObject[imgType] = resp.data.url
                })
                .catch((err) => {
                    console.log(err)
                    toast.dismiss();
                    alert('An error Occoured! please try after some time.')
                    cpFormButton = false;
                });
        }
        setCPFormImages(cloudUrlObject)
        setCPFormStatus(true)
    }

    const postCPForm = async (e) => {
        // console.log(cpFormImages)
        const data = { ...cpFormImages, ...cpForm }
        await axios.post('/channel-partner-contact', data)
            .then((res) => {
                // console.log(res)
                if(res.data.success){
                    toast.dismiss();
                    toast.success('request sent successfully')
                    cpFormButton = false;
                    navigate('/become-a-channel-partner')
                }
            })
            .catch((err) => {
                console.log(err)
                toast.dismiss();
                alert('An error Occoured! please try after some time.')
                cpFormButton = false;
            })
        setCPFormStatus(false)
    }

    useEffect(() => {
        // console.log('useEffectRan')
        if (postCPFormStatus) {
            postCPForm()
        }
    }, [postCPFormStatus])

    return (
        <div className="channel-partner-form-wrapper">
            <h4>Become A Channel Partner</h4>
            <form className="channel-partner-form" onSubmit={UploadImages}>
                <section>
                    <input name='name' className='cp-form-input-text' placeholder="YOUR NAME" onChange={handleCPForm} />
                    {err.name ? <p className='validation-err'>Name cannot be empty</p> : null}
                </section>
                <section>
                    <input name='phno' className='cp-form-input-text' placeholder="YOUR PHONE" onChange={handleCPForm} />
                    {err.phno ? <p className='validation-err'>Phone number cannot be empty</p> : null}
                </section>
                <section>
                    <input name='email' className='cp-form-input-text' placeholder="YOUR EMAIL" onChange={handleCPForm} />
                    {err.email ? <p className='validation-err'>Email cannot be empty</p> : null}
                </section>
                <section>
                    <input name='city' className='cp-form-input-text' placeholder="YOUR CITY" onChange={handleCPForm} />
                    {err.city ? <p className='validation-err'>City cannot be empty</p> : null}
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
                    {err.zipcode ? <p className='validation-err'>Zipcode cannot be empty</p> : null}
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
                            <input name='cpImage' className='cp-form-input-type-file-1-n-3' type="file" onChange={handleImages} />
                            {err.cpImage ? <p className='validation-err'>Channel Partner image not chosen</p> : null}
                        </section>
                    </div>
                    <div>
                        <section>
                            <label>Pan Card<span>*</span></label>
                        </section>
                        <section>
                            <input name='panCardImage' className='cp-form-input-type-file-2-n-4' type="file" onChange={handleImages} />
                            {err.panImage ? <p className='validation-err'>Channel Partner's pan card image not chosen</p> : null}
                        </section>
                    </div>
                </section>
                <section className='cp-form-input-type-file-wrapper'>
                    <div>
                        <section>
                            <label>Aadhar Card (Front)<span>*</span></label>
                        </section>
                        <section>
                            <input name='aadharCardFrontImage' className='cp-form-input-type-file-1-n-3' type="file" onChange={handleImages} />
                            {err.aadharCardFrontImage ? <p className='validation-err'>Channel Partner's aadhar card front image not chosen</p> : null}
                        </section>
                    </div>
                    <div>
                        <section>
                            <label>Aadhar Card (Back)<span>*</span></label>
                        </section>
                        <section>
                            <input name='aadharCardBackImage' className='cp-form-input-type-file-2-n-4' type="file" onChange={handleImages} />
                            {err.aadharCardBackImage ? <p className='validation-err'>Channel Partner's aadhar card back image not chosen</p> : null}
                        </section>
                    </div>
                </section>
                <section className='cp-form-checkbox-section'>
                    <div>
                        <input id='become-cp-agreement-checkbox' name='checkbox' type="checkbox" className='cp-form-input-type-checkbox' onChange={handleCPForm} />
                    </div>
                    <div>
                        <label htmlFor='become-cp-agreement-checkbox'>I give Fractional Assets permission to contact me & agree the <span>terms</span></label>
                    </div>
                </section>
                {err.checkbox ? <p className='validation-err'>You must Agree All the TERMS & CONDITIONS</p> : null}
                <section>
                    <button disabled={cpFormButton} >
                        SEND REQUEST
                    </button>
                </section>
            </form>
        </div>
    )
}

export default BecomeAChannelPartner