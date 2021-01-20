import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import Home from "./coponent/Home"
import RestaurantList from "./coponent/RestaurantList"
import RestaurantCreate from "./coponent/RestaurantCreate"
import RestaurantDetail from "./coponent/RestaurantDetail"
import RestaurantSearch from "./coponent/RestaurantSearch"
import RestaurantUpdate from "./coponent/RestaurantUpdate"
import LogIn from "./coponent/LogIn"

import Logout from "./coponent/logout"
import Test from './coponent/test';



function App() {
  return (
    <div className="App">
    <Test />
     

        

    </div>
  );
}

export default App;
