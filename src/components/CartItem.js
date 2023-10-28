import React from "react";
import styles from './ui.module.css';
import { useDispatch } from "react-redux";
import { cartActions } from "../store/cart-slice";
export default function CartItem({id,price,totalPrice,name}){
    const dispatch=useDispatch();
    const removeItem=()=>{
        dispatch(cartActions.removeFromCart(id));
    }
    return (
        <div className={styles.item}>
         <p className={styles.itemName}>{name}</p>
        <div className={styles.itemInfo}>
        <p>Id:{id}</p>
        <p>Price:{price}</p>
        <p>Quantity:{totalPrice/price}</p>
        <p>Total:{totalPrice}</p>
        <button className={styles.btn} onClick={removeItem}>Remove</button>
        </div>
    </div>
    )
    
}