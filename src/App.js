import React, { useState, useEffect } from 'react'
import GlobalStyles from './GlobalStyles' 
import { BrowserRouter as Router, Route, Switch, Redirect, Link } from 'react-router-dom'

import MainFrame from './components/MainFrame/MainFrame'
import LoginPage from './pages/Login/LoginPage'

import PrivateRoute from './components/PrivateRoute'
import Auth from './utils/Auth'


const MainPage = () => {

  return (
    <div>
      {Auth.loggedIn ? <Redirect to="/panel"/> : <Redirect to="/login"/>}
    </div>
  )
}


const App = () => {

  return (
    <div className="App">
      <GlobalStyles/>

      <Router>
        
        <Switch>

          <Route exact path="/" component={MainPage}/>
          <PrivateRoute path="/panel/" component={MainFrame}/>
          <Route exact path="/login" component={LoginPage}/>
          <Route render={() => <h2>404 - Page not found!  <Link to="/panel">Go to panel:</Link></h2>}/>
          
        </Switch>

         
      </Router>

    </div>
  )
}

export default App
