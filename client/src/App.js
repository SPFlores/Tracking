import React from 'react'
import Landing from './pages/Landing'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { BrowserRouter as Router, Route } from 'react-router-dom'

const App = _ => {
  return (
    <>
      <Router>
        <Navbar />
        <Route exact path='/' render={_ => (<Landing />)} />
        <Footer />
      </Router>
    </>
  )
}

export default App
