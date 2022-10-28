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
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <div className="App">
        <Router>
          <Header></Header>
          <Routes>
              <Route exact path="/Accessories" element={<Accessories/>}/>
              <Route exact path="/Food" element={<Food/>}/>
              <Route exact path='/Adoption' element={<Adoption/>}/>
              <Route exact path='/Medicare' element={<Medicare/>}/>
              <Route exact path='/Training' element={<Training/>}/>
              <Route exact path='/Login' element={<Login/>}/>
              <Route exact path='/Register' element={<Register/>}/>
              {/* <Route exact path='/' element={<Home/>}/> */}
          </Routes>
        </Router>
    </div>
  );
}

export default App;