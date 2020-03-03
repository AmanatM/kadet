import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'

import userAvatar from './userAvatar.jpg'


const TopPanelStyled = styled.div`
    grid-area: toppanel;
    padding: 10px 30px;
    background-color: white;
    display: flex;
    align-items: center;
    box-shadow: 2px -5px 6px 7px rgba(0,0,0,.4);
    z-index: 1;

    h3 {
        margin-right: auto;
    }
`

const User = styled.div`
    display: flex;
    align-items: center;
    cursor: pointer;

    img {
        width: 35px;
        border: 1px solid black;
        border-radius: 50%;
        margin-left: 10px;
    }
`

const TopPanel = (props) => {

    return (
        <TopPanelStyled>
            <h3>Панель</h3>
            <User>
                <b>{props.user ? props.user.username : null}</b>
                <img alt="Аватар пользователя" src={userAvatar}/>
            </User>
        </TopPanelStyled>
    )
}

const mapStateToProps = (state) => {
    return {
        user: state.user
    }
}


export default connect(mapStateToProps, null)(TopPanel)