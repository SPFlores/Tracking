import React from 'react'
import Landing from './pages/Landing'
import { BrowserRouter as Router, Route } from 'react-router-dom'

const App = _ => {
  return (
    <>
      <Router>
        <Route exact path='/' render={_ => (<Landing />)} />
      </Router>
    </>
  )
}

export default App
