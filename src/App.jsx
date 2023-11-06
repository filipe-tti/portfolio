//CSS
import './App.css'
//REACT
import React from 'react';

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

        <div id='home'></div><Initiation/>
        <div id='expertise'></div><Expertise/>
        <div id='about'> <About/></div>
        <div id='projects'></div><Projects/>
        <div id='contact'></div><Contact/>
  
      </div>
 
    </>

    
  )
}

export default App
