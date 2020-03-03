// This is used to determine if a user is authenticated and
// if they are allowed to visit the page they navigated to.

// If they are: they proceed to the page
// If not: they are redirected to the login page.
import React, { useEffect } from 'react'
import { Redirect, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { logout } from '../reducers/user'

const PrivateRoute = ({ logout, user, component: Component, ...rest }) => {

  // Add your own authentication on the below line.
  let authenticated = JSON.parse(localStorage.getItem('user'))


  return (
    <Route {...rest}
      render={props =>
        authenticated ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
        )
      }
    />
  )
}

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps, {logout})(PrivateRoute)