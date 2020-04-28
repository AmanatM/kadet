import React, { useEffect } from 'react'
import { Link, Route, Switch} from 'react-router-dom'
import styled from 'styled-components'
import StatusSelect from './StatusSelect'
import { getAllDispatchers } from "../../services/dispatcherService"
import Loader from './Loader'
import { useLocation } from 'react-router-dom'
import Dispatcher from '../Dispatcher/Dispatcher'
import { useQueryState } from "react-router-use-location-state"
import AddDispatcher from '../AddDispatcher/AddDispatcher'

import Card from '../../elements/Card'
import InnerBar from './InnerBar/InnerBar'

const CardCustom = styled(Card)`
    padding: 10px 0;
`


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
                text-align: center;
                padding: 10px 5px;
            }
        }
        
        .row_data {
            td {
                padding: 10px 10px;
                font-size: .9em;
                text-align: center;
                &.status {
                    position: relative;
                }

                span {
                    text-align: left;
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

    const [ totalPages, setTotalPages ] = React.useState(0)

    useEffect(() => {

        getAllDispatchers(page, limit)
        .then(res => {
            setDispathcers(res.docs)
            setTotalPages(+res.pages)
        })
        .catch(err => {
            console.error(err)
        })

    }, [])


    const [ dispatchers, setDispathcers ] = React.useState(null)

    const [ page, setPage ] = useQueryState('page', 1)
    const [ limit, setLimit ] = useQueryState('limit', 10)


    useEffect(() => {

        setDispathcers(null)
        getAllDispatchers(page, limit)
        .then(res => {
            setDispathcers(res.docs)
            setTotalPages(+res.pages)
            console.log(res)
        })
        .catch(err => {
            console.error(err)
        })

    }, [page, limit])


        return (
            <DispatchersStyled >
                <CardCustom style={!dispatchers ?  { minHeight: '80vh' }  : null}>
                <InnerBar limit={limit} setLimit={setLimit} totalPages={totalPages} loading={dispatchers} page={page} setPage={setPage}/>
            {dispatchers ? (
                    <table>
                        <thead>
                            <tr>
                                <th>Логин</th>
                                <th>ФИО</th>
                                <th>Должность</th>
                                <th className="center">Статус</th>
                                <th className="center">Номер SIP телефона</th>
                            </tr>
                        </thead>

                        <tbody>
                            {dispatchers.map(dispatcher => (
                               <tr className="row_data" key={dispatcher.id}>
                                    <td> <Link to={`/panel/dispatchers/${dispatcher.id}`}>{dispatcher.username}</Link></td>
                                    <td><span>{dispatcher.surname} {dispatcher.name}</span></td>
                                    <td>{dispatcher.position}</td>
                                    <td className="status">
                                        <StatusSelect id={dispatcher.id} selected={dispatcher.status} options={statusOptions}>
     
                                        </StatusSelect>
                                    </td>
                                    <td className="center">{dispatcher.SIPNumber}</td>
    
                                </tr>
                            ))}
                        </tbody>
                </table> ) :  <Loader/>}

                </CardCustom>

                <Switch>
                    <Route exact path="/panel/dispatchers/add_dispatcher" render={() => <AddDispatcher />}/>
                    <Route exact path={`/panel/dispatchers/:id`} render={({match}) => <Dispatcher id={match.params.id}/>}/>
                </Switch>

              
            </DispatchersStyled>
        )
}



export default Dispatchers