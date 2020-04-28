import React, { useState } from 'react'
import styled from 'styled-components'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import { withRouter, useHistory } from 'react-router-dom'
import { connect } from 'react-redux'
import { notify, clearNotifications } from '../../reducers/notifications'
import { postDispatcher } from '../../services/dispatcherService'
import StatusPicker from './StatusPicker'
import Loader from 'react-loader-spinner'


import Button from '../../elements/Button'
import closeIcon from '../../assets/imgs/close_icon.svg'
import userIcon from './icons/user.svg'
import passwordIcon from './icons/password.svg'
import emailIcon from './icons/email.svg'
import phoneIcon from './icons/phone.svg'
import calendarIcon from './icons/calendar.svg'
import PositionPicker from './PositionPicker'

const AddDispatcherStyled = styled.div`
    position: absolute;
    top: 0px;
    width: 500px;
    height: 40px;
    left: 0;
    background: rgba(0, 0, 0, .5);
    z-index: 99;
    padding: 40px 20px;
    height: 100vh;
    width: 100%;
    display: flex;

    div.content {
        width: 100%;
        max-width: 650px;
        margin: auto;
        padding: 40px 30px;
        background-color: #e7e7e7;
        border-radius: 10px;
        position: relative;
        padding-top: 70px;


        .card_title {
            background-color: #2c3e4e;
            padding: 15px;
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            display: flex;
            align-items: center;

            span {
                font-weight: bold;
                color: white;
                font-size: 1em;
                margin-right: auto;
            }

            img {
                max-width: 40px;
                width: 25px;
                cursor: pointer;
            }
        }
    }

`

const FormStyled = styled(Form)`
    display: flex;
    flex-direction: column;

    .form_line {

        h3 {
            margin-bottom: 20px;
        }

        &.two_in_one {
            .form_content {
                display: flex;

                *:first-child {
                    flex: 50% 0 0;
                    margin-right: 20px;
                }

                *:last-child {
                    flex: 50% 0 0;
                    padding-right: 20px;
                }
            }   
        }

        &.full_name {
            display: flex;
            justify-content: space-around;

            div:first-child {
                padding-right: 20px;
            }
            div:last-child {
                padding-left: 20px;
            }
        }   

        &.credentials {   
            
            .form_content {
                display: flex;

                *:first-child {
                    flex: 50% 0 0;
                    margin-right: 20px;
                }

                *:last-child {
                    flex: 50% 0 0;
                    margin-right: 20px;
                }
            }            
        }  

        &.status_position {
            margin-bottom: 20px;
            .form_content {
                display: flex;

                .status {
                    flex: 50% 0 0;
                    margin-right: 20px;
                    position: relative;

                    label {
                        margin-bottom: 10px;
                        font-size: .85em;
                    }
                }

                .position {
                    flex: 50% 0 0;
                    margin-right: 20px;
                    position: relative;
                }
            }
        }
    }



`

const FieldGroup = styled.div`
    position: relative;
    margin: 20px 0;
    width: 100%;

    label {
        position: absolute;
        top: -20px;
        font-size: .85em;
        left: 0;
    }

    .with_image {
        position: relative;
        text-align: center;

        img {
            max-width: 100%;
            width: 20px;
            position: absolute;
            left: 10px;
            top: 50%;
            transform: translateY(-50%);
        }

        input {
            padding-left: 40px;
            width: 100%;
        }
    }
`

const InputStyled = styled(Field)`
    border: none;
    padding: 8px 10px;
    border-radius: 5px;
    outline: none;
    font-size: .95em;
    width: 100%;
`

const SubmitButton = styled(Button)`
    margin-top: 25px;
`


const AddDispatcher = (props) => {


    const closeUserInfo = (e) => {
        e.stopPropagation()
        return props.history.push('/panel/dispatchers/')
    }

    const confirmation = (e) => {
        props.clearNotifications()
        props.notify({
            heading: 'Вы уверены?',
            text: 'Данные будут сброшены',
            type: 'submit',
            onOkFunc: () => closeUserInfo(e)
        })
    }

    const [ selectedStatus, setSelectedStatus ] = useState('active')
    const [ selectedPosition, setSelectedPosition ] = useState('Диспетчер')

    const initialValues = {
        username: '',
        name: '',
        surname: '',
        SIPNumber: '',
        phoneNumber: '',
        email: '',
        password: '',
        jobStartedDate: '',
        processedApplications: ''
    }

    const [ loading, setLoading ] = useState(false)

    let history = useHistory()

    const onSubmit = (values, { setSubmitting }) => {

        setLoading(true)
        let dataToSend = {
            ...values,
            status: selectedStatus,
            position: selectedPosition
        }
        postDispatcher(dataToSend)
        .then(res => {
           console.log(res)

           setLoading(false)

           history.push(`/panel/dispatchers/${res.id}`)

            props.notify({
                type: 'success',
                heading: 'Диспетчер добавлен!',
                time: 2000
            })
         })
         .catch(err => {

            setLoading(false)
            props.notify({
                type: 'error',
                heading: 'Что-то пошло не так!',
                time: 2000
            })
            console.log(err)
         })
        

    }


    const statusOptions = [
        { value: 'fired', label: 'Уволен'},
        { value: 'day_off', label: 'Выходной'},
        { value: 'active', label: 'Активный'},
        { value: 'vocation', label: 'В отпуске'},
        { value: 'sick_leave', label: 'На больничном'},
    ]

    const positionOptions = ['Диспетчер', 'Старший диспетчер', 'Служба контроля качества', 'Выделенный под проект']



    return (
        <AddDispatcherStyled>
            <div className="content" onClick={(e) => e.stopPropagation()}>
                <div className="card_title"><span>Добавить нового диспетчера: </span><img onClick={confirmation} src={closeIcon}/></div>
                <Formik initialValues={initialValues} onSubmit={onSubmit}>

                    <FormStyled>

                        <div className="form_line full_name">
                            <FieldGroup>
                                <label htmlFor="FirstName">Имя: </label>
                                <InputStyled required placeholder="Имя" name="name" type="text" />
                            </FieldGroup>
                            <FieldGroup>
                                <label htmlFor="SecondName">Фамилия: </label>
                                <InputStyled required placeholder="Фамилия" name="surname" type="text" />
                            </FieldGroup>
                        </div>

                        <div className="form_line credentials">
                            <h3>Данные для входа: </h3>

                            <div className="form_content">
                                <FieldGroup>
                                    <label htmlFor="Login">Логин: </label>
                                    <div className="with_image">
                                        <img src={userIcon}/>
                                        <InputStyled required placeholder="Логин" name="username" type="text"/>
                                    </div>
                                </FieldGroup>
                                <FieldGroup>
                                    <label htmlFor="Login">Пароль: </label>
                                    <div className="with_image">
                                        <img src={passwordIcon}/>
                                        <InputStyled required placeholder="Пароль" name="password" type="password"/>
                                    </div>
                                </FieldGroup>
                            </div>
  
                        </div>

                        <FieldGroup>
                            <label htmlFor="Email">Email: </label>
                            <div className="with_image">
                                <img src={emailIcon}/>
                                <InputStyled required placeholder="Email" name="email" type="email"/>
                            </div>
                        </FieldGroup>



                        <div className="form_line two_in_one">
                            <div className="form_content">

                                <FieldGroup>
                                    <label htmlFor="PhoneNumber">Телефон: </label>
                                    <div className="with_image">
                                        <img src={phoneIcon}/>
                                        <InputStyled required placeholder="Телефон" name="phoneNumber" type="tel"/>
                                    </div>
                                </FieldGroup>

                                <FieldGroup>
                                    <label htmlFor="PhoneSIPNumber">SIP Номер: </label>
                                    <InputStyled required placeholder="SIP Номер" name="SIPNumber" type="number"/>
                                </FieldGroup>
                            </div>
                        </div>

                        <div className="form_line status_position">
                            <div className="form_content">
                                <div className="status">
                                    <label htmlFor="MainLanguage">Статус: </label>
                                    <StatusPicker selected={selectedStatus} setSelected={setSelectedStatus} options={statusOptions}/>
                                </div>

                                <div className="position">
                                    <label htmlFor="AnotherLanguage">Позиция </label>
                                    <PositionPicker selected={selectedPosition} setSelected={setSelectedPosition} options={positionOptions}/>
                                </div>
                            </div>
                        </div>

                        <div className="form_line two_in_one">
                            <div className="form_content">

                                <FieldGroup>
                                    <label htmlFor="PhoneNumber">Дата начала работы: </label>
                                    <div className="with_image">
                                        <img src={calendarIcon}/>
                                        <InputStyled required placeholder="Дата" name="jobStartedDate" type="date"/>
                                    </div>
                                </FieldGroup>

                                <FieldGroup>
                                    <label htmlFor="PhoneSIPNumber">Обработранно заявок</label>
                                    <InputStyled required placeholder="Кол-во обработанных заявок" name="processedApplications" type="number"/>
                                </FieldGroup>
                            </div>
                        </div>

                        <SubmitButton className="submit_btn" type="submit">{loading ? <Loader type="Puff" color="#000" height={15} width={15}/> : "Добавить"}</SubmitButton>
                    </FormStyled>
                </Formik>
            </div>
        </AddDispatcherStyled>
    )
}

export default connect(null, {notify, clearNotifications})(withRouter(AddDispatcher))