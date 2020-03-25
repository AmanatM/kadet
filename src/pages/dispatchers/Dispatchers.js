import React, { useEffect } from 'react'
import { Link, Route, BrowserRouter as Router } from 'react-router-dom'
import styled from 'styled-components'
import StatusSelect from './StatusSelect'
import { getAllDispatchers } from "../../services/dispatcherService"
import Loader from './Loader'
import { useLocation } from 'react-router-dom'
import Paginator from './Paginator'
import Dispatcher from '../Dispatcher/Dispatcher'
import * as QueryString from "query-string"

import Card from '../../elements/Card'


const DispatchersStyled = styled.div`

    table {

        border-collapse: collapse;
        width: 100%;

        overflow: scroll;


        .center {
            text-align: center;
        }

        thead {
            th {
                text-align: left;
                padding: 10px 5px;
            }
        }
        
        .row_data {
            td {
                padding: 10px 5px;
                font-size: .9em;

                &.status {
                    position: relative;
                }
            }

            &:nth-child(2n) {
                background-color: #ececec;
            }
        }
    }


`


const statusOptions = [
    { value: 'fired', label: 'Уволен'},
    { value: 'day_off', label: 'Выходной'},
    { value: 'active', label: 'Активный'},
    { value: 'vocation', label: 'В отпуске'},
    { value: 'sick_leave', label: 'На больничном'},
]

const Dispatchers = (props) => {
    
    let location = useLocation();
    const params = QueryString.parse(location.search);

    useEffect(() => {

        getAllDispatchers(params.page, params.limit)
        .then(res => {
            setDispathcers(res.docs)
            console.log(res)
        })
    }, [])


    const [ dispatchers, setDispathcers ] = React.useState(null)

    if(dispatchers) {

        return (
            <DispatchersStyled >
                
                <Card style={{height: '80vh', overflow: 'scroll'}}>
                    <table>
                        <thead>
                            <tr>
                                <th></th>
                                <th>Логин</th>
                                <th>ФИО</th>
                                <th>Должность</th>
                                <th className="center">Статус</th>
                                <th className="center">Номер SIP телефона</th>
                            </tr>
                        </thead>
                        <tbody>
                            {dispatchers ? dispatchers.map(dispatcher => (
                               <tr className="row_data" key={dispatcher.id}>
                                    <td><input type="checkbox" /></td>
                                    <td> <Link to={`/panel/dispatchers/${dispatcher.id}`}>{dispatcher.username}</Link></td>
                                    <td>{dispatcher.surname} {dispatcher.name}</td>
                                    <td>{dispatcher.position}</td>
                                    <td className="status">
                                        <StatusSelect id={dispatcher.id} selected={dispatcher.status} options={statusOptions}>
     
                                        </StatusSelect>
                                    </td>
                                    <td className="center">{dispatcher.SIPNumber}</td>
    
                                </tr>
                            )) : null}
                        </tbody>
                    </table>
                </Card>

                <Route exact path="/panel/dispatchers/:id" render={({match}) => <Dispatcher id={match.params.id}/>}/>

                <Paginator/> 
            </DispatchersStyled>
        )
    } else {
        return (
            <Card style={{height: '80vh'}}><Loader/></Card>
        )
    }
}



export default Dispatchers