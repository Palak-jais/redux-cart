import React from "react";
import { Alert } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { uiActions } from "../store/ui-slice";
export default function Notification({type,message}){
     const notification=useSelector(state=>state.ui.notification);
     const open=notification.open;
     console.log(notification);
     const dispatch=useDispatch();
     const handleClose=()=>{
        dispatch(uiActions.showNotification({
            open:false
        }))
     }
    return <>
    {open && <Alert onClose={handleClose} severity={type}>{message}</Alert> } 
    </>
}