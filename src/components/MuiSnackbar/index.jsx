import React, {useEffect} from 'react';
import Snackbar from '@mui/material/Snackbar';
import {Alert} from "@mui/material";

const MuiSnackbar = ({ open, type, messageText, handleClose }) => {

    useEffect(() => {
        if(open) {
            setTimeout(() => {
                handleClose()
            }, 2000)
        }
    },[open])

    return (
        <div>
            <Snackbar
                anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
                open={open}
                onClose={handleClose}
            >
                <Alert onClose={handleClose} severity={type || 'success'} sx={{ width: '100%' }}>
                    {messageText}
                </Alert>
            </Snackbar>
        </div>
    )
}

export default MuiSnackbar;