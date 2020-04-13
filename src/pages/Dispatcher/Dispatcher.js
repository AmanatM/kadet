import React from 'react'
import styled from 'styled-components'
import { getOneDispatcher } from '../../services/dispatcherService'
import { withRouter } from 'react-router-dom'
import StatusSelect from '../Dispatchers/StatusSelect'
import { parseDate } from '../../utils/dateParser'
import Loader from './Loader'
import { connect } from 'react-redux'
import { notify } from '../../reducers/notifications'

import avatar_placeholder from './icons/avatar_placeholder.svg'
import email_icon from './icons/email_icon.svg'
import phone_icon from './icons/phone_icon.svg'
import clock_icon from './icons/clock_icon.svg'
import docs_icon from './icons/docs_icon.svg'
import edit_icon from './icons/edit.svg'
import close_icon from '../../assets/imgs/close_icon_black.svg'


const DispatcherStyled = styled.div`
    position: absolute;
    top: 0px;
    width: 500px;
    height: 40px;
    left: 0;
    background: rgba(0, 0, 0, .5);
    z-index: 99;
    padding: 20px;
    height: 100vh;
    width: 100%;
    display: flex;

    input {
        padding: 5px 8px;
    }

    .edit {
        position: absolute;
        top: 20px;
        right: 20px;
        width: 30px;
        cursor: pointer;
    }

    .save {
        padding: 8px 10px;
        border-radius: 10px;
        background-color: #4caf50;
        color: white;
        font-weight: bold;
        font-size: .95em;
        margin-top: 10px;
    }

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
        { value: '0', label: 'Уволен'},
        // { value: 'day_off', label: 'Выходной'},
        { value: '1', label: 'Активный'},
        // { value: 'vocation', label: 'В отпуске'},
        // { value: 'sick_leave', label: 'На больничном'},
    ]

    const [ editMode, setEditMode ] = React.useState(false)

    const closeUserInfo = (e) => {
        e.stopPropagation()
        return props.history.push('/panel/dispatchers/')
    }

    const [ dispatcherNew, setDispatcherNew ] = React.useState(null)
    console.log(dispatcherNew)

    const edit = () => {
        setEditMode(true)
        setDispatcherNew(dispatcher)
    }

    const save = () => {
        props.notify( {
            heading: 'Данные обновлены',
            type: 'success',
            time: 1500
        })
        
        setEditMode(false)
        setDispatcher(dispatcherNew)

    }

    return (
        <DispatcherStyled onClick={closeUserInfo}>
            <div className="content" onClick={(e) => e.stopPropagation()}>
                {dispatcher ? (
                    <div>
                     { !editMode ? (<img onClick={edit} className="edit" src={edit_icon}/>) : (<img onClick={() => props.notify({
                         heading: 'Отменить изменения?',
                         text: 'Проделанные изменения будут сброшены',
                         type: 'submit',
                         onOkFunc: () => setEditMode(false)
                     })} className="edit" src={close_icon}/>) }
                        <div className="top">
                            <div className="avatar"><img src={avatar_placeholder}/></div>
                            <div className="right">
                                {!editMode ? (<h3>{dispatcher.firstName} {dispatcher.secondName}</h3>) : 
                                    (<><input placeholder="Имя" onChange={(e) => setDispatcherNew({...dispatcherNew, name: e.target.value})} value={dispatcherNew.name}/>
                                     <input placeholder="Фамилия" onChange={(e) => setDispatcherNew({...dispatcherNew, surname: e.target.value})} value={dispatcherNew.surname}/>
                                    </> )
                                }
                                <p className="username">Логин пользователя: <i><b>{dispatcher.login}</b></i></p>
                                <p className="position">Должность: <b>{dispatcher.roleId}</b></p>
                                <div className="select"><StatusSelect id={dispatcher.id} selected={dispatcher.userStatus} options={statusOptions}/></div>
                            </div>
                        </div>

                        <div className="bottom">
                            <div className="left">
                                <div className="item">
                                <img src={email_icon}/>{!editMode ? (<><span>{dispatcher.email}</span></>) : (<input onChange={(e) => setDispatcherNew({...dispatcherNew, email: e.target.value})} value={dispatcherNew.email}/>)}
                                </div>
                                <div className="item">
                                    <img src={phone_icon}/>{!editMode ? (<><span>{dispatcher.phoneSIPNumber}</span></>) : (<input onChange={(e) => setDispatcherNew({...dispatcherNew, phoneSIPNumber: e.target.value})} value={dispatcherNew.phoneSIPNumber}/>)}
                                </div>
                            </div>
                            <div className="right">
                                <div className="item">
                                    <img src={clock_icon}/><span>Дата начала работы: <b>{parseDate(dispatcher.startWorkDate)}</b></span>
                                </div>
                                <div className="item">
                                    <img src={docs_icon}/><span>Заявок обраотанно: <b>{dispatcher.numberOfProcessedApplications}</b></span>
                                </div>
                            </div>
                        </div>
                        {editMode ? (<button onClick={save} className="save">Сохранить</button>) : null}
                    </div>
                ): <Loader/>}
            </div>
        </DispatcherStyled>
    )
}

export default connect(null, { notify })(withRouter(Dispatcher))