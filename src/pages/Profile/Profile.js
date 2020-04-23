import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { notify } from '../../reducers/notifications'
import { logout } from '../../reducers/user'
import { getUserData } from '../../services/userService'
import Card from '../../elements/Card'
import ButtonModern from '../../elements/ButtonModern'


import avatarIcon from '../../components/TopPanel/avatar.svg'
import emailIcon from './icons/email.svg'
import checkIcon from './icons/check.svg'

import Loader from './Loader'

const ProfileStyled = styled.div`

`

const CardStyled = styled(Card)`
    border-top: 4px solid #2c3e4e;
    max-width: 500px;
    margin: 0 auto;

    .content {

        text-align: center;

        
        .avatar {
            width: 60px;
            height: 60px;
            border: 2px solid #2c3e4e;
            margin: 0 auto;
            border-radius: 50%;
            padding: 2px;
            overflow: hidden;
            img {
                width: 100%;
            }
        }

        .username {
            margin-top: 10px;
        }

        .name {
            margin-top: 10px;
            margin-bottom: 10px;
        }

        .email {

            display: flex;
            justify-content: center;
            margin-bottom: 10px;
            align-content: center;

            img {
                width: 20px;
                margin-right: 5px;
            }
        }

        .adminStatus {

            display: flex;
            justify-content: center;
            align-items: center;
            margin-bottom: 20px;

            img {
                width: 20px;
                margin-left: 5px;
            }
        }
    }
`


const Profile = (props) => {

    const [ user, setUser ] = useState(null)

    let history = useHistory()

    const logOut = () => {
        props.logout()
        history.push("/login")
    }

    useEffect(() => {
        getUserData('5e5dc8d98e522c523acd9fc8')
        .then( res => {
            console.log(res)
            setUser(res)
        })
        .catch( err => {
            console.error(err)
        })
    }, [])

    return (
        <ProfileStyled>
            <CardStyled>
                {user ? (
                    <div className="content">

                        <div className="avatar">
                            <img src={avatarIcon} alt="Аватар"/>
                        </div>

                        <h4 className="username">{user.username}</h4>

                        <div className="name">
                            <i>{user.name} {user.surname}</i>
                        </div>

                        <div className="email">
                            <img src={emailIcon}/> {user.email}
                        </div>

                        <div className="adminStatus">
                            Права администратора: {user.admin ? <img src={checkIcon}/> : <b>Прав нет</b>}
                        </div>
                        <ButtonModern onClick={logOut}>Выйти</ButtonModern>
                    </div>
                ) : <Loader/>}
            </CardStyled>
        </ProfileStyled>
    )
}

export default connect(null, {notify, logout})(Profile)