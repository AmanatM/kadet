import React, { useEffect, useState } from 'react'
import { useHistory, Link } from 'react-router-dom'
import { getOneCard, patchCard } from '../../../services/cardsService'
import { parseDate } from '../../../utils/dateParser'

import okIcon from '../../../assets/imgs/ok.svg'
import errorIcon from '../../../assets/imgs/error.svg'

import { Button, ViewCardStyled, InactiveCard, ActiveCard } from './CardStyled'

const ViewCard = ({id}) => {

    let history = useHistory()

    const closeUserInfo = (e) => {
        e.stopPropagation()
        history.push('/panel/cards')
    }

    const [ card, setCard ] = useState(null)

    useEffect(() => {
        getOneCard(id)
        .then(res => {
            setCard(res)
            console.log(res)
        })
        .catch(err => { 
            console.log(err)
        })
    }, [])

    return (
        <ViewCardStyled onClick={closeUserInfo}>
            <div className="content" onClick={(e) => e.stopPropagation()}>
                {card ? (

                   card.cardStatus === 1 ? 
                   (
                    <ActiveCard>
                        <h4>Карта активирована</h4>
                        <div className="card-number">
                            <p className="info">Номер карты:</p>
                            <div className="number">{card.cardNumber}</div>
                        </div>

                        <div className="card-holder">
                            <p className="info">Держатель карты:</p>
                            <div className="holder">{card.clientId}</div>
                        </div>

                        <h4>Информация об автомобиле:</h4>
                        <div className="col-2">
                            <div className="car-number-container">
                                <p className="info">Номер машины:</p>
                                <div className="car-number">{card.carNumber}</div>
                            </div>
                            <div className="car-vin-container">
                                <p className="info">VIN машины: </p>
                                <div className="car-vin">
                                    <p>{card.vin}</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-2 car-make-color">
                            <div className="car-make-container">
                                <p className="info">Производитель:</p>
                                <div className="car-make">{card.carMake}</div>
                            </div>
                            <div className="car-color-container">
                                <p className="info">Цвет:</p>
                                <div className="car-color">
                                    <p>{card.color} </p><div style={{backgroundColor: card.color}} className="color-box"></div>
                                </div>
                            </div>
                        </div>
                        <h4>Информация о клиенте: </h4>
                        <div className="col-2 city-phone">
                            <div className="city-container">
                                <p className="info">Город: </p>
                                <div className="city">{card.city}</div>
                            </div>
                            <div className="phone-container">
                                <p className="info">Номер телефона: </p>
                                <div className="phone">{card.phoneNumber}</div>
                            </div>
                        </div>
                        <div className="email-container">
                            <p className="info">Email: </p>
                            <div className="email"><a taget="_blank" href={`mailto:${card.clientId}`}>{card.clientId}</a></div>
                        </div>

                        <h4>Информация о карте: </h4>
                        <div style={{marginBottom: '20px'}} className=" col-2">
                            <div className="date-activated">
                                <p className="info">Дата активации: </p>
                                <div>{parseDate(card.actionStartDate)}</div>
                            </div>
                            <div className="date-sold">
                                <p className="info">Дата продажи: </p>
                                <div>{parseDate(card.dateOfContractWithClient)}</div>
                            </div>
                        </div>

                        <div className=" col-2">
                            <div className="paid">
                                <p className="info">Статус оплаты: </p>
                                <div>{card.paid ? (<>Карта оплачена <img src={okIcon}/></>) : (<>Карта не оплачена<img src={errorIcon}/></>)}</div>
                            </div>
                            <div className="price">
                                <p className="info">Цена карты: </p>
                                <div>{card.cardCost}</div>
                            </div>
                        </div>

                        <Button style={{marginTop: '20px'}} invert>Деактивировать</Button>
               
                    </ActiveCard>
                   ) 
                   : 
                   (
                    <InactiveCard>
                        <h4>Карта не активирована</h4>
                        <div className="card-number">
                            <p className="info">Номер карты:</p>
                            <div className="number">{card.number}</div>
                        </div>
                        <div className="service-list">
                            <p className="info">Пакет услуг:</p>
                            <div className="service">{card.serviceList}</div>
                        </div>

                        <Link to={`/panel/cards/activate/${id}`}><Button>Активировать</Button></Link>
                    </InactiveCard>
                   )

                ) : <p>Loading...</p>}

            </div>
        </ViewCardStyled>
    )
}

export default ViewCard