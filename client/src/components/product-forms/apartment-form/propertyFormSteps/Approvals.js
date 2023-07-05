import React, { useState } from 'react'
import './stylesheet/Aminities.css'
import { Button, TextField, Typography } from '@mui/material'

const ApartmentApprovals = ({ newApprovals, setNewApprovals, approvals, setApprovals }) => {
    const [msg, setMsg] = useState('')
    const [status, setStatus] = useState(false)

    const handleUtilityarray = () => {
        setApprovals([...approvals, newApprovals])
        setNewApprovals('');
        setStatus(false)
    }
    const handleSave = () => {
        console.log(approvals)
        setMsg('Saved')
        setStatus(true)
    }
    
    return (
        <div className='approvals-wrapper'>
            <div>
                <TextField type='text' size='small' name='approvals' value={newApprovals}
                    onChange={(e) => setNewApprovals(e.target.value)} label='Approvals' />
                <Button onClick={handleUtilityarray}>Add</Button>
                <div>
                    {
                        approvals.map((item, i) => {
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

export default ApartmentApprovals