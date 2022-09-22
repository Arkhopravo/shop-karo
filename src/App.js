
import './App.css';
import React, {useEffect} from 'react'
import Header from './Header';
import Home from './Home'
import Checkout from './Checkout'
import Login from './Login';
import {   BrowserRouter as Router, Route, Routes, } from "react-router-dom";
import {  auth } from "./firebase";
import  { useStateValue} from './StateProvider'

export default function App() {
const [{}, dispatch] = useStateValue();
  useEffect(() => {
    // will only run once when the app component loads...

    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>> ", authUser);

      if (authUser) {
        // the user just logged in / the user was logged in

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);


  return (
    <Router>
      <div className="App">
            <Header/>
        <Routes>
          <Route path = "/login" element={<Login/>}/>
          </Routes>            
          <Routes>
          <Route path= "/checkout" element={<Checkout/>} />
         <Route path= "/" element={<Home/>} />
        </Routes>
        

          
        
           
      </div>
    </Router>

  );
}

 
