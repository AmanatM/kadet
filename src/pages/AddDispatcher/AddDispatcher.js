import React from 'react'
import styled from 'styled-components'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import { withRouter } from 'react-router-dom'
import Button from '../../elements/Button'
import closeIcon from '../../assets/imgs/close_icon.svg'

const AddDispatcherStyled = styled.div`
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

    div.content {
        width: 100%;
        max-width: 650px;
        margin: auto;
        padding: 40px 20px;
        background-color: #e7e7e7;
        border-radius: 5px;
        transform: translateY(-40px);
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

        margin-top: 20px;

        h3 {
            margin-bottom: 30px;
        }

        &.full_name {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
        }     
    }



`

const FieldGroup = styled.div`
    position: relative;



    label {
        position: absolute;
        top: -20px;
        font-size: .85em;
        left: 0;
    }
`

const InputStyled = styled(Field)`
    border: none;
    padding: 5px 10px;
    border-radius: 5px;
    outline: none;
    font-size: .95em;
`

const SubmitButton = styled(Button)`
    margin-top: 25px;
`


const AddDispatcher = (props) => {

    const closeUserInfo = (e) => {
        e.stopPropagation()
        return props.history.push('/panel/dispatchers/')
    }

    const initialValues = {
        FirstName: '',
        SecondName: '',
        ThirdName: '',
        RoleId: '', 
        StartWorkDate: '',
        CountryId: '',
        MainLanguage: '',
        AnotherLanguage: '',
        Login: '',
        Password: '',
        PhoneNumber: '',
        Email: '',
        Timezone: '',
        PhoneSIPNumber: ''
    }

    const onSubmit = (values, { setSubmitting }) => {
        alert(JSON.stringify(values, null, 2))
        setSubmitting(false)
    }

    return (
        <AddDispatcherStyled>
            <div className="content" onClick={(e) => e.stopPropagation()}>
                <div className="card_title"><span>Добавить нового диспетчера: </span><img onClick={closeUserInfo} src={closeIcon}/></div>
                <Formik initialValues={initialValues} onSubmit={onSubmit}>

                    <FormStyled>

                        <div className="form_line full_name">
                            <FieldGroup>
                                <label htmlFor="FirstName">Имя: </label>
                                <InputStyled required placeholder="Имя" name="FirstName" type="text" />
                            </FieldGroup>
                            <FieldGroup>
                                <label htmlFor="SecondName">Фамилия: </label>
                                <InputStyled required placeholder="Фамилия" name="SecondName" type="text" />
                            </FieldGroup>
                            <FieldGroup>
                                <label htmlFor="ThirdName">Отчество: </label>
                                <InputStyled required placeholder="Фамилия" name="ThirdName" type="text" />
                            </FieldGroup>
                        </div>

                        <div className="form_line credentials">
                            <h3>Данные для входа: </h3>
                            <FieldGroup>
                                <label htmlFor="Login">Логин: </label>
                                <InputStyled required placeholder="Логин" name="Login" type="text"/>
                            </FieldGroup>
                        </div>

                        <SubmitButton className="submit_btn" type="submit">Добавить</SubmitButton>
                    </FormStyled>
                </Formik>
            </div>
        </AddDispatcherStyled>
    )
}

export default withRouter(AddDispatcher)