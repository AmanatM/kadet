import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { getDispatchers } from '../../reducers/dispatchers'
import StatusSelect from './StatusSelect'
import { getAllDispatchers } from "../../services/dispatcherService"
import Loader from './Loader'

import Card from '../../elements/Card'

import SkeletonPulse from '../../components/skeletonLoader/SkeletonPulse'

const DispatchersStyled = styled.div`

    table {

        border-collapse: collapse;
        width: 100%;

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


const SkeletonLine = styled(SkeletonPulse)`
  width: 5.5em;
  height: 20px !important;
  border-radius: 5px;

  &::before {
    content: "\00a0";
  }
`;

const statusOptions = [
    { value: 'fired', label: 'Уволен'},
    { value: 'day_off', label: 'Выходной'},
    { value: 'active', label: 'Активный'},
    { value: 'vocation', label: 'В отпуске'},
    { value: 'sick_leave', label: 'На больничном'},
]

const Dispatchers = (props) => {

    useEffect(() => {
        props.getDispatchers()

        getAllDispatchers()
        .then(res => {
            setDispathcers(res)
        })
    }, [])

    const [ dispatchers, setDispathcers ] = React.useState(null)

    if(dispatchers) {

        return (
            <DispatchersStyled >
                <Card style={{height: '100% !important'}}>
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
                                    <td>{dispatcher.username}</td>
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
    
            </DispatchersStyled>
        )
    } else {
        return (
            <Card style={{height: '100%'}}><Loader/></Card>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        dispatchers: state.dispatchers
    }
}

export default connect(mapStateToProps, { getDispatchers })(Dispatchers)