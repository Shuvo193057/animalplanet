import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect, useState } from 'react';
import {
  BrowserRouter as Router, Route, Routes
} from "react-router-dom";
import Accessories from './Accessories/Accessories';
import AddCart from './AddCart/AddCart';
import Adoption from './Adoption/Adoption';
import './App.css';
import Food from './Food/Food';
import Header from './Header/Header';
import Home from './Home/Home';
import Login from './Login/Login';
import Medicare from './Medicare/Medicare';
import Register from './Register/Register';
import Training from './Training/Training';


function App() {

  const [show, setShow] = useState(true);
  const [cart, setCart] = useState([]);

  const handleClick = (item) => {
    if (cart.indexOf(item) !== -1) return;
    setCart([...cart, item]);
    console.log(cart);
  };
  console.log(cart)

  const handleChange = (item, d) => {
    const ind = cart.indexOf(item);
    const arr = cart;
    arr[ind].amount += d;

    if (arr[ind].amount === 0) arr[ind].amount = 1;
    setCart([...cart]);
  }

  // const [cust, setCust] = useState([]);
  // const fetchbooks = async () => {
  //   const req = await firestore.collection("Customer").orderBy("index", "Fullname").get();
  //   const tempData = req.docs.map((customer) => ({ ...customer.data(), id: customer.id }));
  //   setCust(tempData);
  // }
  // useEffect(() => {
  //   fetchbooks();
  // }, [])


  useEffect(() => {
    console.log("Cart changed");
  }, [cart]);

  return (
    <div className="App">
      <Router>
        <Header Cart={cart}></Header>
        <Routes>
          <Route exact path="/Accessories" element={<Accessories handleClick={handleClick} />} />
          <Route exact path="/Food" element={<Food />} />
          <Route exact path='/Adoption' element={<Adoption />} />
          <Route exact path='/Medicare' element={<Medicare />} />
          <Route exact path='/Training' size={cart.length} element={show ? <Training handleClick={handleClick} /> : <AddCart cart={cart} setCart={setCart} handleChange={handleChange} />} />
          <Route exact path='/Login' element={<Login />} />
          {/* <Route exact path='/index' element={<indexe/>} /> */}
          <Route exact path='/Register' element={<Register />} />
          <Route exact path='/AddCart' element={<AddCart cart={cart} />} />
          <Route exact path='/' element={<Home />} />
        </Routes>
      </Router>
      
        

    
    </div>
  );
}

export default App;