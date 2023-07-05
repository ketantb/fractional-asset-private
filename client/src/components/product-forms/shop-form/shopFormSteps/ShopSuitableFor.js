import React, { useState } from 'react'
import './stylesheet/Aminities.css'
import { Button, TextField, Typography } from '@mui/material'

const ShopSuitableFor = ({ suitableFactors, setSuitableFactors, suitableFor, setSuitableFor }) => {
    const [msg, setMsg] = useState('')
    const [status, setStatus] = useState(false)

    const handleUtilityarray = () => {
        setSuitableFor([...suitableFor, suitableFactors])
        setSuitableFactors('');
        setStatus(false)
    }
    const handleSave = () => {
        console.log(suitableFor)
        setMsg('Saved')
        setStatus(true)
    }

    return (
        <div className='suitableFor-wrapper'>
            <div>
                <TextField type='text' size='small' name='suitableFor' value={suitableFactors}
                    onChange={(e) => setSuitableFactors(e.target.value)} label='Shop Suitable For:' />
                <Button onClick={handleUtilityarray}>Add</Button>
                <div>
                    {
                        suitableFor.map((item, i) => {
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

export default ShopSuitableFor