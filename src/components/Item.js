import React from "react";
import styles from './page.module.css';
import {useDispatch,useSelector} from 'react-redux';
import { cartActions } from "../store/cart-slice";

export default function Item({name,id,price}){
    const cartItems=useSelector((state)=>state.cart.itemsList);
    console.log(cartItems);
    const dispatch=useDispatch();
    const handleAdd=()=>{
     dispatch(cartActions.addToCart({
        name:name,
        id:id,
        price:price,
     }))
    }
    return <div className={styles.card}>
          <p>{name}</p>
          <p>{id}</p>
          <p>{price}</p>
          <button onClick={handleAdd} className={styles.AddBtn}>Add to Cart</button>
          </div>
        
} 
    