import React from 'react'
import { useToasts } from "react-toast-notifications"

export function CustomNotification(props) {
    const { addToast } = useToasts()


    const onSuccess = () => {
        addToast(props.message, { appearance: 'success', autoDismiss: true })
    }
    const onFailed = () => {
        addToast(props.message, { appearance: 'Error', autoDismiss: true })
    }
    const onWarning = () => {
        addToast(props.message, { appearance: 'warning', autoDismiss: true })
    }
    const onInfo = () => {
        addToast(props.message, { appearance: 'Info', autoDismiss: true })
    }

    return {
        onSuccess, onFailed, onWarning, onInfo
    }
}

