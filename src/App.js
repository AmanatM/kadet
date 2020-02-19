import React from 'react'
import GlobalStyles from './GlobalStyles' 
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import SideNav from './components/SideNav/SideNav'
import routes from './routes'

const App = () => {
  return (
    <div className="App">
      <GlobalStyles/>

      <Router>
        <SideNav/>
        <Switch>
          
          {routes.map(route => 
            <Route exact path={route.path} render={() => route.page}/>
          )}

        </Switch>
      </Router>

    </div>
  )
}

export default App
