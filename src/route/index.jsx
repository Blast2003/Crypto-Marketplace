import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from "../pages/Home/Home"
import Coin from "../pages/Coin/Coin"

const index = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/coin/:coinId' element={<Coin/>}/>
      </Routes>
    </>
  )
}

export default index