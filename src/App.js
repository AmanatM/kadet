import React from 'react'
import GlobalStyles from './GlobalStyles' 
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import MainFrame from './components/MainFrame/MainFrame'


const App = () => {
  return (
    <div className="App">
      <GlobalStyles/>

      <MainFrame/>

    </div>
  )
}

export default App
