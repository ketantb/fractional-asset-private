import React, { useState } from 'react'
import './stylesheet/Aminities.css'
import { Button, TextField, Typography } from '@mui/material'

const WhyInvestInThisApartment = ({ whyInvestFactors, setWhyInvestFactors, whyInvest, setWhyInvest }) => {
    const [msg, setMsg] = useState('')
    const [status, setStatus] = useState(false)

    const handleUtilityarray = () => {
        setWhyInvest([...whyInvest, whyInvestFactors])
        setWhyInvestFactors('');
        setStatus(false)
    }
    const handleSave = () => {
        console.log(whyInvest)
        setMsg('Saved')
        setStatus(true)
    }


    return (
        <div className='whyInvest-wrapper'>
            <div>
                <TextField type='text' size='small' name='whyInvest' value={whyInvestFactors}
                    onChange={(e) => setWhyInvestFactors(e.target.value)} label='investment factors' />
                <Button onClick={handleUtilityarray}>Add</Button>
                <div>
                    {
                        whyInvest.map((item, i) => {
                            return (
                                <li key={i + 1}>{item}</li>
                            )
                        })
                    }
                </div>
                {status && <Typography>{msg}</Typography>}
                <Button onClick={handleSave}>save</Button>
            </div>

        </div>
    )
}

export default WhyInvestInThisApartment