import React from "react";
import Navbar from "./Navbar";
import styles from './page.module.css';
import Item from "./Item";
import CartItems from "./CartItems";
import {useSelector} from 'react-redux';
export default function Product(){
  const show=useSelector((state)=>state.cart.showCart);
    return <div>
        <Navbar/>
        <div className={styles.templateParent}>
        <h2 className={styles.templateHead}>Products</h2>
        <div className={styles.cards}>
        <Item name={"prod1"} id={20} price={200}/>
        <Item name={"prod2"} id={30} price={300}/>
        <Item name={"prod3"} id={40} price={400}/>
        </div>
        </div>
        {show && <CartItems/>}
    </div>
}