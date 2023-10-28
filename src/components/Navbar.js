import React from "react";
import {useDispatch,useSelector} from 'react-redux';
import { cartActions } from "../store/cart-slice";
import { authActions } from "../store/auth-slice";
import styles from './ui.module.css';
import style from './page.module.css';

export default function Navbar(){
    const dispatch=useDispatch();
    const isLoggedIn=useSelector(state=>state.auth.isLoggedIn);
    return <div className={styles.parent}>
        <h2>Redux Cart</h2>
        {
            isLoggedIn && 
            <div>
            <button  className={style.authBtn} onClick={()=>{dispatch(cartActions.setShowCart())}}>Go to Cart</button>
            <button  className={style.authBtn} onClick={()=>{dispatch(authActions.logout())}}>Logout</button>
            </div>
        }
        
    </div>
}