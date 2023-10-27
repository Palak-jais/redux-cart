import React from "react";
import styles from './ui.module.css'
export default function CartItem({id,price,totalPrice,name}){
    return (
        <div className={styles.item}>
         <p className={styles.itemName}>{name}</p>
        <div className={styles.itemInfo}>
        <p>Id:{id}</p>
        <p>Price:{price}</p>
        <p>Quantity:{totalPrice/price}</p>
        <p>Total:{totalPrice}</p>
        </div>
    </div>
    )
    
}