import React from "react";
import {useSelector} from 'react-redux';
import CartItem from "./CartItem";
import styles from './ui.module.css'
export default function CartItems(){
    const items=useSelector(state=>state.cart.itemsList);
    const total=useSelector(state=>state.cart.totalQuantity);
    return (
        <div>
        <h2 className={styles.myCart}>Your cart <span className={styles.total}>{total}</span></h2>
        <ul className={styles.lists}>
        {items.map(item=>{
        return <li key={item.id}><CartItem id={item.id} price={item.price} totalPrice={item.totalPrice} name={item.name}/></li>
        })}
        </ul>
    </div>
    )
    
}