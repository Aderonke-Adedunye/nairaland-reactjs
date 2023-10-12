import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from "./pages/Home"
import Signup from "./pages/Signup"

import Login from "./pages/Login"
import Details from './pages/Details'
import CreateArticle from './pages/CreateArticle'


function App() {
  return (
    <BrowserRouter> 
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="/signup" element={ <Signup/> } />
        <Route path='/login' element={ <Login/> } />
        <Route path='/create' element={ <CreateArticle/> } />
        <Route path="/details/:id" element={<Details/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App