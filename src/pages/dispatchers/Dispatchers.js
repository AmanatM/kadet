import React, { useEffect } from 'react'
import { Link, Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import styled from 'styled-components'
import { getAllDispatchers } from "../../services/dispatcherService"
import Loader from './Loader'
import { useLocation } from 'react-router-dom'
import * as QueryString from "query-string"
import { useQueryState } from "react-router-use-location-state"

import Card from '../../elements/Card'
import Dispatcher from '../Dispatcher/Dispatcher'
import StatusSelect from './StatusSelect'
import Paginator from './Paginator'
import InnerBar from './InnerBar/InnerBar'
import AddDispatcher from '../AddDispatcher/AddDispatcher'


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
    { value: '0', label: 'Уволен'},
    // { value: 'day_off', label: 'Выходной'},
    { value: '1', label: 'Активный'},
    // { value: 'vocation', label: 'В отпуске'},
    // { value: 'sick_leave', label: 'На больничном'},
]

const Dispatchers = (props) => {
    
    let location = useLocation();
    const params = QueryString.parse(location.search);

    //const [ totalPages, setTotalPages ] = React.useState(0)

    const [ dispatchers, setDispathcers ] = React.useState(null)
    console.log(dispatchers)

    useEffect(() => {

        getAllDispatchers(params.page, params.limit)
        .then(res => {
            //setTotalPages(+res.pages)
            setDispathcers(res)
        })
    }, [])
    
    const [ page, setPage ] = useQueryState('page', '1')

    useEffect(() => {
        setDispathcers(null)

        getAllDispatchers(page, params.limit)
        .then(res => {
            //setTotalPages(+res.pages)
            setDispathcers(res)
        })
    }, [page])



    return (
        <DispatchersStyled >

            <InnerBar/>

            <Card style={{height: '70vh', overflow: 'scroll'}}>
                {dispatchers ? (
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
                                <td> <Link to={`/panel/dispatchers/${dispatcher.id}`}>{dispatcher.login}</Link></td>
                                <td>{dispatcher.secondName} {dispatcher.firstName}</td>
                                <td>{dispatcher.roleId}</td>
                                <td className="status">
                                    <StatusSelect id={dispatcher.id} selected={dispatcher.userStatus} options={statusOptions}>
    
                                    </StatusSelect>
                                </td>
                                <td className="center">{dispatcher.phoneSIPNumber}</td>

                            </tr>
                        )) : null}
                    </tbody>
                </table>
                ) : <Loader/>}
                
            </Card>
            <Switch>
                <Route exact path="/panel/dispatchers/add_dispatcher" render={() => <AddDispatcher />}/>
                <Route exact path="/panel/dispatchers/:id" render={({match}) => <Dispatcher id={match.params.id}/>}/>
            </Switch>

            {/* <Paginator totalPages={totalPages} loading={dispatchers} page={page} setPage={setPage}/>  */}
        </DispatchersStyled>
    )
}



export default Dispatchers