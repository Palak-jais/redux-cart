import {useDispatch, useSelector} from 'react-redux';
import Register from './components/Register';
import Product from './components/Products';
import './App.css';
import Notification from './components/Notification'
import { useEffect } from 'react';
import { uiActions } from './store/ui-slice';

function App() {
  const isLoggedIn=useSelector(state=>state.auth.isLoggedIn);
  const cart=useSelector((state)=>state.cart);
  const dispatch=useDispatch();
  const notification=useSelector(state=>state.ui.notification);
  console.log(notification)

  useEffect(()=>{
    const sendRequest=async()=>{
      dispatch(uiActions.showNotification({
        open:true,
        message:'Sending Request',
        type:'warning'
      }))

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
    sendRequest().catch(err=>{
      dispatch(uiActions.showNotification({
        open:true,
        message:'Oops!Went Wrong',
        type:'error'
      }))

    });

  },[cart])

  return (
    <div>
    <Notification type={notification.type} message={notification.message}/>
    {!isLoggedIn && <Register/>}
    {isLoggedIn && <Product/>}
    </div>
  );
}

export default App;
