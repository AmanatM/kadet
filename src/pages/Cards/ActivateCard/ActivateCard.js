import React, { useState } from 'react'
import Card from '../../../elements/Card'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import styled from 'styled-components'
import Loader from 'react-loader-spinner'
import ButtonModern from '../../../elements/ButtonModern'
import { notify } from '../../../reducers/notifications'
import { connect } from 'react-redux'

import { activateCard } from '../../../services/cardsService'


const ActivateCardStyled = styled(Card)`

`

const SubmitButton = styled(ButtonModern)`
    margin-top: 20px;
    width: 140px;
`

const FormStyled = styled(Form)`
    width: 100%;
    max-width: 550px;
    display: flex;
    flex-direction: column;
`

const Input = styled(Field)`
    padding: 5px;
    border: none;
    border-bottom: 2px solid #2C3E4E;
    outline: none;
    width: 100%;
    margin-bottom: 20px;
`
const TwoInLine = styled.div`

    display: flex;
    margin-bottom: 20px;

    *:first-child {
        flex: 45% 0 0;
        margin-right: 10%;
        margin-bottom: 20px;
    }

    *:last-child {
        flex: 45% 0 0;
        margin-bottom: 20px;

    }

    @media screen and (max-width: 550px) {

        flex-wrap: wrap;
        margin-bottom: 0;

        *:first-child {
            flex: 100% 0 0;
            margin-right: 0;
            margin-bottom: 20px;
        }

        *:last-child {
            flex: 100% 0 0;
        }
    }
`

const ActivateCard = ({id, notify}) => {


    const initialValues = {
        Id: +id,
        ClientId: 0,
        ClientInfo: {
            Id: 0,
            ClientFristName: '',
            ClientSecondName: '',
            ClientThirdName: '',
            Email: '',
            PhoneNumber: '',
            CarBrandId: 0,
            CarBrand: {
                Id: 0,
                Name: ''
            },
            StateNumber: '',
            Region: ''
        },
        SellerFirstName: '',
        SellerSecondName: '',
        SellerThirdName: '',

        ManagerFirstName: '',
        ManagerSecondName: '',
        ManagerThirdName: '',

        EmployerFirstName: '',
        EmployerSecondName: '',
        EmployerThirdName: ''
    }

    const [ loading, setLoading ] = useState(false)

    const onSubmit = (values) => {
        setLoading(true)
        activateCard(values)
        .then(res => {
            notify({
                type: 'success',
                time: 2000,
                heading: 'Активация успешна',
                text: 'Карта активирована'
            })
        })
        .catch(err => {
            notify({
                type: 'error',
                time: 2000,
                heading: 'Что-то пошло не так'
            })
        })
        
    }


    return (
        <ActivateCardStyled>
            <h2 style={{marginBottom: '20px'}}>Активация карты</h2>

            <Formik initialValues={initialValues} onSubmit={onSubmit}>
                <FormStyled>
                    <TwoInLine>
                        <Input name="ClientInfo.ClientFristName" type="text" placeholder="Имя клиента"/>
                        <Input name="ClientInfo.ClientSecondName" type="text" placeholder="Фамилия клиента"/>
                    </TwoInLine>
                    <Input name="ClientInfo.Email" type="email" placeholder="Email клиента"/>
                    <Input name="ClientInfo.PhoneNumber" type="tel" placeholder="Телефон клиента"/>
                    <Input name="ClientInfo.CarBrand.Name" type="text" placeholder="Марка машины клиента"/>
                    <Input name="ClientInfo.Region" type="text" placeholder="Регион клиента"/>

                    <TwoInLine>
                        <Input name="SellerFirstName" type="text" placeholder="Имя продавца"/>
                        <Input name="SellerSecondName" type="text" placeholder="Фамилия продавца"/>
                    </TwoInLine>
                    <Input name="SellerThirdName" type="text" placeholder="Отчество продавца"/>


                    <TwoInLine>
                        <Input name="ManagerFirstName" type="text" placeholder="Имя менеджера"/>
                        <Input name="ManagerSecondName" type="text" placeholder="Фамилия менеджера"/>
                    </TwoInLine>
                    <Input name="ManagerThirdName" type="text" placeholder="Отчество менеджера"/>


                    <TwoInLine>
                        <Input name="EmployerFirstName" type="text" placeholder="Имя сотрудника"/>
                        <Input name="EmployerSecondName" type="text" placeholder="Фамилия сотрудника"/>
                    </TwoInLine>
                    <Input name="EmployerThirdName" type="text" placeholder="Отчество сотрудника"/>


                    <SubmitButton className="submit_btn" type="submit">{loading ? <Loader type="Puff" color="#000" height={15} width={15}/> : "Активировать"}</SubmitButton>
                </FormStyled>
            </Formik>

        </ActivateCardStyled>
    )
}

export default connect(null, { notify })(ActivateCard)