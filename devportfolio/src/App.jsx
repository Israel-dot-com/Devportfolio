import { useState } from 'react'
import './App.css'
import About from './components/About/About'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Message from './components/Message/Message'
import Navbar from './components/Navbar/Navbar'
import Work from './components/Work/Work'

function App() {

  return (
    <div className="App">
      
      <Header/>
      <Work />
      <About />
      <Message />
      <Footer />
    </div>
  )
}

export default App
