import React from 'react'
import MuiAlert from '@material-ui/lab/Alert';

function Alert(prop) {
    return <MuiAlert elevation={6} variant="filled" {...prop} />;
}
function AlertStatus(props) {
    let messageDataStatus = ''

    if (props.error !== '' ) {
        messageDataStatus = <Alert severity="error" >Connection status: <b>{props.error}</b></Alert>

    }
    return (
        <div>
            { messageDataStatus}
        </div>

    )
}

export default AlertStatus
