import React, { useEffect } from 'react'
import GlobalStyles from './GlobalStyles' 
import { BrowserRouter as Router, Route, Switch, Redirect, Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { initUser } from './reducers/user'

import MainFrame from './components/MainFrame/MainFrame'
import LoginPage from './pages/Login/LoginPage'
import Notifications from './components/Notifications/Notifications'

import PrivateRoute from './components/PrivateRoute'


const MainPage = (user) => {
  return (
    <div>
      {user ? <Redirect to="/panel"/> : <Redirect to="/login"/>}
    </div>
  )
}

const App = (props) => {


  useEffect(() => {
    props.initUser()
  }, [])
  

  return (
    <div style={{position: 'relative'}} className="App">
      <GlobalStyles/>

      <Notifications notifications={props.notifications}/>

      <Router>
        
        <Switch>

          <Route exact path="/" component={() => <MainPage user={props.user}/>}/>
          <PrivateRoute user={props.user} path="/panel/" component={MainFrame}/>
          <Route exact path="/login" component={LoginPage}/>
          <Route render={() => <h2>404 - Page not found!  <Link to="/panel">Go to panel:</Link></h2>}/>
          
        </Switch>

         
      </Router>

    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
    notifications: state.notifications
  }
}

export default connect(mapStateToProps, {initUser})(App)
