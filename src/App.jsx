import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Index from "../src/route/index"
import Footer from './components/Footer/Footer'

const App = () => {
  return (
    <div className='app'>
      <Navbar/>
      <Index/>
      <Footer/>
    </div>
  )
}

export default App