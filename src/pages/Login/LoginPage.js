import React, { useState, useEffect } from 'react'
import  { useHistory } from 'react-router-dom'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

import loginPageBg from './loginBg.jpg'
import Auth from '../../utils/Auth'
import kadetLogo from '../../assets/imgs/logo_white.svg'
import waves from './waves.svg'
import waves2 from './waves2.svg'
import Button from '../../elements/Button'

const LoginPageStyled = styled.div`
    display: flex;
    min-height: 100vh;
    background: url(${loginPageBg}) white;
    background-size: cover;
    padding: 20px 0;


    .card-main {
        margin: auto;
        padding: 50px 20px;
        border-radius: 10px;
        box-shadow: 5px 7px 7px 0px rgba(0,0,0,.4);
        width: 95%;
        max-width: 500px;
        color: white;
        display: flex;
        flex-direction: column;
        justify-content: center;
        background: url(${waves}), url(${waves2}), linear-gradient(to bottom, #536976, #292e49);
        background-repeat: no-repeat;
        background-position: 60% 330%, 60% 900%, 0 0;
        background-size: 250%, 250%, 100% 100%;
        transition: all .6s;

        &.loaded {
            background-position: 60% 120%, 60% 120%, 0 0;
        }

        .title {

            display: flex;
            align-items: center;
            margin-bottom: 20px;

            img {
                width: 45px;
                margin: 10px;
                margin-left: auto;
            }
        }

        form {
            display: flex;
            flex-direction: column;

            input:last-child {
                margin-bottom: 30px;
                margin-top: 20px;
            }

            .forgot_password {
                margin-bottom: 40px;
                margin-top: 20px;
                font-style: italic;
                font-size: .9em;
                text-decoration: underline;
                color: white;
                outline: none;
            }
        }

    }
`

const Input = styled.input`
    display: inline-block;
    border: none;
    border-bottom: 1px solid white;
    width: 100%;
    padding: 10px 8px;
    color: white;
    font-size: .9em;
    outline: none;
    background: transparent;
    margin: 10px 0;
    margin-bottom: ${props => props.last ? '50px' : ''};
    font-weight: bold;
    padding-bottom: 9px;

    &:focus {
        border-bottom: 2px solid white;
        padding-bottom: 8px;
    }

    &::placeholder {
        color: #c8c8c8;
    }

`

const LoginPage = () => {

    let history = useHistory()

    const [ loaded, setLoaded ] = useState(false)
    console.log(loaded)

    useEffect(() => {
        setTimeout(() => {
            setLoaded(true)
        }, 100)
    }, [])

    const [ user, setUser ] = useState({
        username: '',
        password: ''
    })
    
    const login = (e) => {
        e.preventDefault()

        Auth.authenticate(() => history.push("/panel"))
    }

    return (
        <LoginPageStyled>
            <div className={`card-main ${loaded ? 'loaded' : ''}`}>

                <div className="title">
                    <h3>Страница входа в систему</h3>
                    <img src={kadetLogo} alt="Логотип"/>
                </div>

                <form onSubmit={login}>
                    <Input onChange={(e) => setUser({...user, username: e.target.value})} value={user.username} required type="text" placeholder="Логин"/>
                    <Input onChange={(e) => setUser({...user, password: e.target.value})}  value={user.password} required  type="password" placeholder="Пароль"/>
                    <Link className="forgot_password" to="/forgot_password">Забыли пароль?</Link>
                    <Button color="black" bgColor="white" >Войти</Button>
                </form>

            </div>
        </LoginPageStyled>
    )
}

export default LoginPage
