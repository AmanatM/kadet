import React, { useEffect } from 'react'
import { Link, Route, Switch} from 'react-router-dom'
import styled from 'styled-components'
//import StatusSelect from './StatusSelect'
import { getAllCards } from "../../services/cardsService"
import Loader from './Loader'
import { useLocation } from 'react-router-dom'
import ViewOrder from './ViewOrder/ViewOrder'
import { useQueryState } from "react-router-use-location-state"
//import ActivateCard from './ActivateCard/ActivateCard'
//import AddCard from './AddCard/AddCard'

import Card from '../../elements/Card'
import InnerBar from './InnerBar/InnerBar'

const CardCustom = styled(Card)`
    padding: 10px 0;
`

const CardsStyled = styled.div`
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
    { value: 1, label: 'Активна'},
    { value: 0, label: 'Деактивирована'}
]

const Cards = (props) => {
    
    let location = useLocation();

    const [ totalPages, setTotalPages ] = React.useState(0)

    useEffect(() => {

    }, [])

    const [ orders, setOrders ] = React.useState([
        {
            id: '1',
            number: '345134813',
            client: 'Данные клиента',
            price: '$12.99',
            rating: '9/10',
            dateCreated: '20.1.2020'
        }
    ])
    
    const [ page, setPage ] = useQueryState('page', 1)
    const [ limit, setLimit ] = useQueryState('limit', 10)


    useEffect(() => {


    }, [page, limit])



        return (
            <CardsStyled >
                <CardCustom style={!orders ?  { minHeight: '80vh' }  : null}>
                <InnerBar limit={limit} setLimit={setLimit} totalPages={totalPages} loading={orders} page={page} setPage={setPage}/>
            {orders ? (
                    <table>
                        <thead>
                            <tr>
                                <th>Номер</th>
                                <th>Клиент</th>
                                <th className="center">Стоимость  услуги клиенту</th>
                                <th className="center">Дата создания</th>
                                <th>Рейтинг</th>
                            </tr>
                        </thead>

                        <tbody>
                            {orders.map(order => (
                               <tr className="row_data" key={order.id}>
                                    <td> <Link to={`/panel/orders/${order.id}`}>{order.number}</Link></td>
                                    <td>{order.client}</td>
                                    <td>{order.price}</td>
                                    <td>{order.dateCreated}</td>
                                    <td>{order.rating}</td>
                                </tr>
                            ))}
                        </tbody>
                </table> ) :  <Loader/>}

                </CardCustom>


               <Switch>
                    {/* <Route exact path="/panel/orders/add_order" render={() => <AddCard />}/> */}
                    <Route exact path={`/panel/orders/:id`} render={({match}) => <ViewOrder id={match.params.id}/>}/>
                </Switch>  

              
            </CardsStyled>
        )
}



export default Cards