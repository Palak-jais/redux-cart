import { createSlice } from "@reduxjs/toolkit";
import { uiActions } from "./ui-slice";
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
        removeFromCart(state,action){
          const id=action.payload;
          const existingItem=state.itemsList.find(item=>item.id===id);
          if(existingItem.quantity==1){
            state.itemsList=state.itemsList.filter(item=>item.id!==id);
            state.totalQuantity--;
          }
          else{
             existingItem.quantity--;
             existingItem.totalPrice-=existingItem.price;
          }


        },
        setShowCart(state){
          state.showCart=!state.showCart;
        }
    }
})
/*export const sendCartData=async(cart)=>{
  return (dispatch)=>{
    dispatch(uiActions.showNotification({
      open:true,
      message:'Sending Request',
      type:'warning',
    }))
    const sendRequest=async()=>{
      const response=await  fetch('https://redux-cart-c2bdc-default-rtdb.firebaseio.com/cartItems.json',{
        method:'PUT',
        body:JSON.stringify(cart)
     });
     const data=await response.json();
     console.log(data);
     dispatch(uiActions.showNotification({
      open:true,
      message:'Successfully sent to database',
      type:'success'
    }))
    };
   try{
      sendRequest();
   }catch(err){
    dispatch(uiActions.showNotification({
      open:true,
      message:'Oops!Went Wrong',
      type:'error'
    }))
   }
  }
}
*/
export const cartActions=cartSlice.actions;
export default cartSlice;