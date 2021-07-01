import React from 'react'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'
import Typography from '@material-ui/core/Typography'

const LoaderDlg = ({ onClose }) => {

    return (
      <div>
        <Dialog onClose={onClose} open={true}>
            <DialogTitle onClose={onClose} disableTypography={true}>
                <Typography variant='h6'>
                    Loading...
                </Typography>
            </DialogTitle>
            <DialogContent>
                <DialogContentText>
                    Loading multiple dicom files...
                </DialogContentText>    
            </DialogContent>
            <DialogActions>
                <Button autoFocus onClick={onClose}>
                    Close
                </Button>
            </DialogActions>
        </Dialog>
      </div>
    )
}

export default LoaderDlg
