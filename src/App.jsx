import React from 'react'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import Features from './Components/Features'
import Contact from './Components/Contact'
import Footer from './Components/Footer'
import AboutUs from './Components/AboutUs'
import FetchData from './Components/FetchData'
import Sample from './Components/sample'

function App() {
  return (
    <div>
      <Navbar/>
      <Home/>
      <AboutUs/>
      <Features/>
      <Contact/>
      <Footer/>
      {/* <Sample/> */}
      {/* <FetchData/> */}
    </div>
  )
}

export default App