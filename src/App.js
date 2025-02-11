import React from 'react';
import './App.css';
import Nav from './components/Nav';
import Main from './components/Main';
import Specials from './components/Specials';
import About from './components/About';
import Footer from './components/Footer';


function App() {
  return (
 
    <>
      <Nav/>
      <Main />
      <Specials/>
      <About/>
      <Footer/>
    </>
  );
}

export default App;