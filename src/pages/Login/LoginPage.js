import React from 'react'
import  { useHistory } from 'react-router-dom'

import Auth from '../../utils/Auth'

const LoginPage = () => {

    let history = useHistory()

    return (
        <div>
            <h1>This is a Login page</h1>
            <button onClick={() => Auth.authenticate(() => history.push("/panel"))}>Log in</button>
        </div>
    )
}

export default LoginPage
