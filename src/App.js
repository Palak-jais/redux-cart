import {useSelector} from 'react-redux';
import Register from './components/Register';
import Product from './components/Products';
import './App.css';

function App() {
  const isLoggedIn=useSelector(state=>state.auth.isLoggedIn);
  console.log(isLoggedIn);

  return (
    <div>
    {!isLoggedIn && <Register/>}
    {isLoggedIn && <Product/>}
    </div>
  );
}

export default App;
