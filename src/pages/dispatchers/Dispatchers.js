import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { getDispatchers } from '../../reducers/dispatchers'

import Card from '../../elements/Card'

import SkeletonPulse from '../../components/skeletonLoader/SkeletonPulse'

const DispatchersStyled = styled.div`

    table {

        border-collapse: collapse;
        width: 100%;

        thead {
            th {
                text-align: left;
                padding: 10px 5px;
            }
        }
        
        .row_data {
            td {
                padding: 10px 5px;
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

const Dispatchers = (props) => {

    useEffect(() => {
        props.getDispatchers()

    }, [])

    return (
        <DispatchersStyled>
            <Card>
                <table>
                    <thead>
                        <tr>
                            <th>Логин</th>
                            <th>ФИО</th>
                            <th>Должность</th>
                            <th>Статус</th>
                            <th>Номер SIP телефона</th>
                        </tr>
                    </thead>
                    <tbody>
                        {props.dispatchers ? props.dispatchers.map(dispatcher => (
                            <tr className="row_data" key={dispatcher.id}>
                                <td>{dispatcher.username}</td>
                                <td>{dispatcher.surname} {dispatcher.name}</td>
                                <td>{dispatcher.position}</td>
                                <td>{dispatcher.status}</td>
                                <td>{dispatcher.SIPNumber}</td>

                            </tr>
                        )) : null}
                    </tbody>
                </table>
            </Card>

        </DispatchersStyled>
    )
}

const mapStateToProps = (state) => {
    return {
        dispatchers: state.dispatchers
    }
}

export default connect(mapStateToProps, {getDispatchers})(Dispatchers)