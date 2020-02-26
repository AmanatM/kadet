import React from 'react'
import  { useHistory } from 'react-router-dom'
import styled from 'styled-components'
import loginPageBg from './login_page_bg.jpg'
import Auth from '../../utils/Auth'
import kadetLogo from '../../assets/imgs/logo_white.svg'

import Button from '../../elements/Button'

const LoginPageStyled = styled.div`
    display: flex;
    height: 100vh;
    /* background: url(${loginPageBg}) #2c3e4e; */
    background-size: cover;
    background: white;


    .card-main {
        margin: auto;
        padding: 50px 20px;
        border-radius: 5px;
        box-shadow: 5px 7px 7px 0px rgba(0,0,0,.4);
        width: 90%;
        max-width: 500px;
        background: linear-gradient(to bottom, #536976, #292e49);
        color: white;
        display: flex;
        flex-direction: column;
        justify-content: center;

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

    }
`

const LoginPage = () => {

    let history = useHistory()

    return (
        <LoginPageStyled>
            <div className="card-main">
                <div className="title">
                    <h3>Страница входа в систему</h3>
                    <img src={kadetLogo} alt="Логотип"/>
                </div>
                <Button onClick={() => Auth.authenticate(() => history.push("/panel"))}>Log in</Button>
            </div>
        </LoginPageStyled>
    )
}

export default LoginPage
