import React from 'react'
import Landing from './pages/Landing'
import Menu from './pages/Menu'
import Food from './pages/Food'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { BrowserRouter as Router, Route } from 'react-router-dom'

const App = _ => {
  return (
    <>
      <Router>
        <Navbar />
        <Route exact path='/' render={_ => (<Landing />)} />
        <Route path='/menu' render={_ => (<Menu />)} />
        <Route path='/food' render={_ => (<Food />)} />
        <Footer />
      </Router>
    </>
  )
}

export default App
