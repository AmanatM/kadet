import React, { useEffect } from 'react'
import { Link, Route, Switch} from 'react-router-dom'
import styled from 'styled-components'
import StatusSelect from './StatusSelect'
import { getAllCards, getInactiveCards, searchByLastName, searchByVIN, searchByCardNumber } from "../../services/cardsService"
import Loader from './Loader'
import { useLocation } from 'react-router-dom'
import ViewCard from './ViewCard/ViewCard'
import { useQueryState } from "react-router-use-location-state"
import ActivateCard from './ActivateCard/ActivateCard'
import AddCard from './AddCard/AddCard'

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
        getAllCards()
        .then(res => {
            setCards(res)
            setTotalPages(+res.pages)
        })
        .catch(err => {
            console.error(err)
        })
    }, [])

    const [ cards, setCards ] = React.useState(null)
    
    console.log(cards)

    const [ page, setPage ] = useQueryState('page', 1)
    const [ limit, setLimit ] = useQueryState('limit', 10)

    const [ type, setType ] = useQueryState('type', 'active')
    const [ searchValue, setSearchValue ] = useQueryState('search', '')
    const [ searchOption, setSearchOption ] = useQueryState('searchOption', 'surname')

    useEffect(() => {

        setCards(null)
        setSearchValue('')

        if(type === 'inactive') {
            getAllCards()
            .then(res => {
                setCards(res)
                setTotalPages(+res.pages)
            })
            .catch(err => {
                console.error(err)
            })
    
        } else if(type === 'active') {

            getInactiveCards()
            .then(res => {
                setCards(res)
                setTotalPages(+res.pages)
            })
            .catch(err => {
                console.error(err)
            })
    
        }

    }, [type])

    const [ searchLoading, setSearchLoading ] = React.useState(false)

    useEffect(() => {

        setSearchLoading(true)
        setType('all')

        if(searchOption === 'surname') {
            searchByLastName(searchValue)
            .then(res => {
                setCards(res)
                setSearchLoading(false)
            })
            .catch(err => {
                console.error(err)
            })    
            
        } else if(searchOption === 'vin') {
            searchByVIN(searchValue)
            .then(res => {
                setCards(res)
                setSearchLoading(false)
            })
            .catch(err => {
                console.error(err)
            })    
            
        } else if(searchOption === 'cardNumber') {
            searchByCardNumber(searchValue)
            .then(res => {
                setCards(res)
                setSearchLoading(false)
            })
            .catch(err => {
                console.error(err)
            })    
            
        }
    }, [searchOption, searchValue])


        return (
            <CardsStyled >
                <CardCustom style={!cards ?  { minHeight: '80vh' }  : null}>
                <InnerBar searchLoading={searchLoading} searchOption={searchOption} setSearchOption={setSearchOption} searchValue={searchValue} setSearchValue={setSearchValue} type={type} setType={setType} limit={limit} setLimit={setLimit} totalPages={totalPages} loading={cards} page={page} setPage={setPage}/>
            {cards ? (
                    <table>
                        <thead>
                            <tr>
                                <th>Номер</th>
                                <th>Пакет услуг</th>
                                <th className="center">Статус</th>
                            </tr>
                        </thead>

                        <tbody>
                            {cards.map(card => (
                               <tr className="row_data" key={card.id}>
                                    <td> <Link to={`/panel/cards/${card.id}`}>{card.cardNumber}</Link></td>
                                    <td>{card.servicesId}</td>
                                    <td className="status">
                                        <StatusSelect id={card.id} selected={card.cardStatus} options={statusOptions}>
     
                                        </StatusSelect>
                                    </td>    
                                </tr>
                            ))}
                        </tbody>
                </table> ) :  <Loader/>}

                </CardCustom>


               <Switch>
                    <Route exact path="/panel/cards/add_card" render={() => <AddCard />}/>
                    <Route exact path={`/panel/cards/:id`} render={({match}) => <ViewCard id={match.params.id}/>}/>
                </Switch> 

              
            </CardsStyled>
        )
}



export default Cards