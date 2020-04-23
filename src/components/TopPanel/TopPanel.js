import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'

import userAvatar from './avatar.svg'


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

    .avatar {
        border: 1px solid black;
        width: 35px;
        height: 35px;
        margin-left: 10px;
        border-radius: 50%;
        padding: 2px;
        overflow: hidden;
    }

    img {
        width: 100%;

    }
`

const TopPanel = (props) => {

    return (
        <TopPanelStyled>
            <h3>Панель</h3>
            <User>
                <b>{props.user ? props.user.username : null}</b>
                <div className="avatar">
                    <img alt="Аватар пользователя" src={userAvatar}/>
                </div>
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