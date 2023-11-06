//CSS
import './App.css'
//REACT
import React from 'react';
import { BrowserRouter, Routes, Route, } from 'react-router-dom';
//COMPONENTS
import Initiation from './components/Initiation'
import Projects from './components/Projects'
import About from './components/About'
import Expertise from './components/Expertise'
import Contact from './components/Contact'
import Navbar from './components/Navbar'


function App() {

  return (

    
    <>
      <div className='geral'>
      
        <Navbar/>
{/*
        <BrowserRouter>
            <Routes>
              
                <Route path="/" element={<Initiation/>}></Route>
                <Route path="/expertise" element={<Expertise/>}></Route>
                <Route path="/about" element={<About/>}></Route>
                <Route path="/Projects" element={<Projects/>}></Route>
                <Route path="/Contact" element={<Contact/>}></Route>

            </Routes>
        </BrowserRouter>

  */}
      <Initiation/>
      <Expertise/>
      <About/>
      <Projects/>
      <Contact/>
  
      </div>
 
    </>

    
  )
}

export default App
