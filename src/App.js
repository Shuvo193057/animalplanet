import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header/Header';
import Accessories from './Accessories/Accessories';
import Food from './Food/Food';
import Adoption from './Adoption/Adoption';
import Medicare from './Medicare/Medicare';
import Training from './Training/Training';
import Login from './Login/Login';
import Register from './Register/Register';
import { RealtimeData } from './RealtimeData/index';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import React, { useEffect, useState } from 'react';
import AddCart from './AddCart/AddCart';
import Home from './Home/Home';


function App() {

  const [show, setShow] = useState(true);
  const [cart, setCart] = useState([]);

  const handleClick = (item) => {
    if (cart.indexOf(item) !== -1) return;
    setCart([...cart, item]);
    console.log(cart);
  };

  const handleChange = (item, d) => {
    const ind = cart.indexOf(item);
    const arr = cart;
    arr[ind].amount += d;

    if (arr[ind].amount === 0) arr[ind].amount = 1;
    setCart([...cart]);
  }

  useEffect(() => {
    console.log("Cart changed");
  }, [cart]);

  return (
    <div className="App">
      <Router>
        <Header Cart={cart}></Header>
        <Routes>
          <Route exact path="/Accessories" element={<Accessories />} />
          <Route exact path="/Food" element={<Food />} />
          <Route exact path='/Adoption' element={<Adoption />} />
          <Route exact path='/Medicare' element={<Medicare />} />
          <Route exact path='/Training'  setShow={setShow} size={cart.length} element={show ? <Training handleClick={handleClick} /> : <AddCart cart={cart} setCart={setCart} handleChange={handleChange}/>} />
          <Route exact path='/Login' element={<Login />} />
          <Route exact path='/Register' element={<Register />} />
          <Route exact path='/AddCart' element={<AddCart />} />
          <Route exact path='/' element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;