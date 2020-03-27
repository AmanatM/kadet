import React from 'react'
import styled from 'styled-components'
import { NavLink, Link, useHistory } from 'react-router-dom'
import { connect } from 'react-redux'
import { logout } from '../../reducers/user'

import logoIcon from '../../assets/imgs/logo.svg'
import dipatchers from './icons/dispatchers.svg'
import dealer_centers from './icons/dealer_centers.svg'
import cards from './icons/cards.svg'
import contractors from './icons/contractors.svg'
import orders from './icons/orders.svg'
import reviews from './icons/reviews.svg'
import reports from './icons/reports.svg'
import historyIcon from './icons/history.svg'
import settings from './icons/settings.svg'
import logoutIcon from './icons/logout.svg'


const SideNavSection = styled.nav`
    background-color: #2c3e4e;
    height: 100vh;
    display: inline-block;
    grid-area: nav;
    display: flex;
    flex-direction: column;
    overflow-y: scroll;
    grid-area: nav;
    z-index: 2;

    ul {
        li {

            list-style: none;
            color: white;

            a {
                display: flex;
                align-items: center;
                text-decoration: none;
                padding: 8px;
                transition: all .2s;
                font-weight: bold;
                font-size: .9em;

                &.active {
                    background-color: #213240;
                }

                &:hover {
                    background-color: #213240;
                }

                img {
                    width: 35px;
                    margin-right: 10px;
                }
            }

        }
    }

`

const Logo = styled.div`

    padding: 10px;
    background-color: #1e2d3a;
    img {
        width: 50px;
    }
`

const Logout = styled.div`

    margin-top: auto;
    padding-bottom: 10px;
    display: flex;
    padding-left: 10px;
    


    button {
        padding: 8px;
        border: none;
        background-color: transparent;
        color: white;
        font-size: 1em;
        font-weight: bold;
        display: flex;
        justify-content: center;
        align-items: center;


        img {
            width: 40px;
            margin-right: 10px;
            min-width: 40px;
            
        }
    }
`


const SideNav = (props) => {

    let history = useHistory()
    
    const logOut = () => {
        props.logout()
        history.push("/login")
    }


    return (
        <SideNavSection>
            <Link to="/"><Logo><img alt="Логотип" src={logoIcon}/></Logo></Link>
            <ul>
                <li><NavLink to='/panel/dispatchers?page=1'><img alt='Диспетчеры' src={dipatchers}/>Диспетчеры</NavLink></li>
                <li><NavLink to='/panel/dealer_centers'><img alt=' Дилерские центры' src={dealer_centers}/> Дилерские центры</NavLink></li>
                <li><NavLink to='/panel/cards'><img alt='Карты' src={cards}/>Карты</NavLink></li>
                <li><NavLink to='/panel/contractors'><img alt='Подрятчики' src={contractors}/>Подрятчики</NavLink></li>
                <li><NavLink to='/panel/orders'><img alt='Заказы' src={orders}/>Заказы</NavLink></li>
                <li><NavLink to='/panel/reviews'><img alt='Отзывы' src={reviews}/>Отзывы</NavLink></li>
                <li><NavLink to='/panel/reports'><img alt='Отчеты' src={reports}/>Отчеты</NavLink></li>
                <li><NavLink to='/panel/history'><img alt='История' src={historyIcon}/>История</NavLink></li>
                <li><NavLink to='/panel/settings'><img alt='Настройки' src={settings}/>Настройки</NavLink></li>
            </ul>

            <Logout>
                <button onClick={logOut}>
                    <img src={logoutIcon} alt="Выйти"/>Выйти
                </button>
            </Logout>
        </SideNavSection>
    )
}

export default connect(null, {logout})(SideNav)