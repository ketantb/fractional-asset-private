import './booksitevisitform.css'
import { useState } from "react"
import FormControl from '@mui/material/FormControl';
import { FormLabel, TextField, Button } from '@mui/material'
import { RxCross1 } from 'react-icons/rx';

const BookSiteVisitForm = ({ handleClose }) => {
    const [siteVisitForm, setSiteVisitForm] = useState({ name: '', email: '', phoneno: '', date: '', time: '' })
    const handleInputs = (e) => {
        setSiteVisitForm({ ...siteVisitForm, [e.target.name]: e.target.value })
    }

    const postSiteVisitForm = (e) => {
        e.preventDefault()
        console.log(siteVisitForm)
    }

    return (
        <>
            <div className='book-site-visit-form-header'>
                <h4>Book Site Visit</h4>
                <p onClick={handleClose}><RxCross1 /></p>
            </div>
            <form className="book-site-visit-form-wrapper" onSubmit={postSiteVisitForm}>
                <FormControl className='book-site-visit-form-field'>
                    <TextField id="standard-basic" label="Your Name" variant="standard"
                        name='name' value={siteVisitForm.name} onChange={handleInputs} />
                </FormControl>
                <FormControl className='book-site-visit-form-field'>
                    <TextField id="standard-basic" label="Email" variant="standard"
                        name='email' value={siteVisitForm.email} onChange={handleInputs} />
                </FormControl>
                <FormControl className='book-site-visit-form-field'>
                    <TextField type='number' id="standard-basic" label="Your Phone Number" variant="standard"
                        name="phoneno" value={siteVisitForm.phoneno} onChange={handleInputs} />
                </FormControl>
                    <FormControl style={{marginTop: '20px'}} className='book-site-visit-form-field-date-time'>
                        <TextField id="standard-basic" type="date" variant="standard"
                            name='date' onChange={handleInputs} />
                    </FormControl>
                    <FormControl style={{marginTop: '20px'}} className='book-site-visit-form-field-date-time'>
                        <TextField id="standard-basic" type="time" variant="standard"
                            name='time' onChange={handleInputs} />
                    </FormControl>
                    <Button style={{marginTop: '50px', backgroundColor: '#2c49a9', color: '#ffff'}} type='submit' className='post-site-visit-btn'>
                        Continue
                    </Button>
            </form>
        </>
    )
}

export default BookSiteVisitForm