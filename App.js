import React from 'react';
import "./App.css";
import Navbar from "./Navbar";
import Sign from './Sign';
import {BrowserRouter,Routes, Route, Form} from 'react-router-dom';
import Filter from './filter';
import Background from './background'
import Register from './Register';
import ContactForm from './Contact';
import DonationForm from './Donation';


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
      <Route path='/' element={<Navbar/>}>

      <Route path='/Sign' element={<Sign/>}/>
       <Route path='/Login' element={<Register/>}/> 
      <Route path='/Contact' element={<ContactForm/>}/>
      <Route path='/Filter' element={<Filter/>}/>
      <Route index element={<Background/>}/>
      <Route path='/Donation' element={<DonationForm/>}/>
      </Route>
      </Routes>
      </BrowserRouter>
    
    
     
  )
};

export default App