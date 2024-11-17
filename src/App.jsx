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
import Slide from './components/Slide';


function App() {

  return (

    
    <>
      <div className='geral'>
      
        <Navbar/>

        <div id='home'></div><Initiation/>
        <div id='expertise'></div><Expertise/>
        <div id='about'></div><About/>
        <Slide/>

        <div id='projects'></div><Projects/>
        <div id='contact'></div><Contact/>
        
  
      </div>
 
    </>

    
  )
}

export default App