import { createSlice } from "@reduxjs/toolkit";

const cartSlice=createSlice({
    name:'cart',
    initialState:{
        itemsList:[],
        totalQuantity:0,
        showCart:false
    },
    reducers:{
        addToCart(state,action){
           const newItem=action.payload;
           //check item already there
           const existingItem=state.itemsList.find((item)=>item.id===newItem.id);
           if(existingItem){
               existingItem.quantity++;
               existingItem.totalPrice+=newItem.price;
           }else{
              state.itemsList.push({
                id:newItem.id,
                price:newItem.price,
                totalPrice:newItem.price,
                quantity:1,
                name:newItem.name
              })
              state.totalQuantity++;
           }

        },
        removeFromCart(){

        },
        setShowCart(state){
          state.showCart=true;
        }
    }
})
export const cartActions=cartSlice.actions;
export default cartSlice;