import React from 'react'
import styled from 'styled-components'
import { getOneDispatcher } from '../../services/dispatcherService'
import { withRouter } from 'react-router-dom'
import StatusSelect from '../dispatchers/StatusSelect'
import { parseDate } from '../../utils/dateParser'
import Loader from './Loader'

import avatar_placeholder from './icons/avatar_placeholder.svg'
import email_icon from './icons/email_icon.svg'
import phone_icon from './icons/phone_icon.svg'
import clock_icon from './icons/clock_icon.svg'
import docs_icon from './icons/docs_icon.svg'

const DispatcherStyled = styled.div`
    position: absolute;
    top: 0px;
    width: 500px;
    height: 40px;
    left: 0;
    background: rgba(0, 0, 0, .5);
    z-index: 999;
    padding: 20px;
    height: 100vh;
    width: 100%;
    display: flex;

    .content {
        background-color: red;
        width: 100%;
        max-width: 650px;
        margin: auto;
        border-radius: 10px;
        transform: translateY(-40px);

        .top {
            display: flex;
            align-items: center;
            border-bottom: 1px solid grey;
            padding: 10px;

            .avatar {

                margin-right: 40px;

                img {
                    max-width: 130px;
                }
            }

            .right {
                * {
                    margin: 10px 0;
                }

                .select {
                    width: 130px;
                    position: relative;
                }
            }
        }

        .bottom {
            display: flex;
            

            .left {
                flex: 1 0 50%;
                padding: 10px; 
                border-right: 1px solid grey;

                .item {
                    display: flex; 
                    align-items: center;
                    margin: 10px 0;

                    img {
                        width: 25px;
                        margin-right: 10px;

                    }

                }
            }

            .right {
                flex: 1 0 50%;
                padding: 10px; 

                .item {
                    display: flex; 
                    align-items: center;
                    margin: 10px 0;

                    img {
                        width: 25px;
                        margin-right: 10px;

                    }

                }

            }
        }
    }
`

const Dispatcher = (props) => {

    const [ dispatcher, setDispatcher ] = React.useState()

    React.useEffect(() => {
        getOneDispatcher(props.id)
        .then((res) => {
            console.log(res)
            setDispatcher(res)
        })
        .catch((err) => {
            console.log(err)
        })
    }, [])

    const statusOptions = [
        { value: 'fired', label: 'Уволен'},
        { value: 'day_off', label: 'Выходной'},
        { value: 'active', label: 'Активный'},
        { value: 'vocation', label: 'В отпуске'},
        { value: 'sick_leave', label: 'На больничном'},
    ]

    const closeUserInfo = (e) => {
        e.stopPropagation()
        return props.history.push('/panel/dispatchers/')
    }

    return (
        <DispatcherStyled onClick={closeUserInfo}>
            <div className="content" onClick={(e) => e.stopPropagation()}>
                {dispatcher ? (
                    <div>

                        <div className="top">
                            <div className="avatar"><img src={avatar_placeholder}/></div>
                            <div className="right">
                                <h3>{dispatcher.name} {dispatcher.surname}</h3>
                                <p className="username">Имя пользователя: <i><b>{dispatcher.username}</b></i></p>
                                <p className="position">Позиция: <b>{dispatcher.position}</b></p>
                                <div className="select"><StatusSelect id={dispatcher.id} selected={dispatcher.status} options={statusOptions}/></div>
                            </div>
                        </div>

                        <div className="bottom">
                            <div className="left">
                                <div className="item">
                                    <img src={email_icon}/><span>{dispatcher.email}</span>
                                </div>
                                <div className="item">
                                    <img src={phone_icon}/><span>{dispatcher.SIPNumber}</span>
                                </div>
                            </div>
                            <div className="right">
                                <div className="item">
                                    <img src={clock_icon}/><span>Дата начала работы: <b>{parseDate(dispatcher.jobStartedDate)}</b></span>
                                </div>
                                <div className="item">
                                    <img src={docs_icon}/><span>Заявок обраотанно: <b>{dispatcher.processedApplications}</b></span>
                                </div>
                            </div>
                        </div>
                    </div>
                ): <Loader/>}
            </div>
        </DispatcherStyled>
    )
}

export default withRouter(Dispatcher)