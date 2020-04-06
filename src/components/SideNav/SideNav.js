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
import collapseIcon from './icons/collapse.svg'


const SideNavSection = styled.nav`
    background-color: #2c3e4e;
    transition: all .2s;

    height: 100vh;
    display: inline-block;
    grid-area: nav;
    display: flex;
    flex-direction: column;
    overflow-y: scroll;
    grid-area: nav;
    z-index: 2;
    width: 250px;
    
    &.collapsed {
        width: 60px;
    }

    ul {
        
        
        li {

            list-style: none;
            color: white;


            .text {
                opacity: 1;
                white-space: nowrap;
                transition: all .2s;
            }

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
                    transition: all .2s;
                }
            }
        }

        &.collapsed {


            li {
                position: relative;

                a {
                    display: flex;


                    img {
                        margin-right: 5px;
                        margin-left: 5px;
                    }
                }
            }

            .text {
                opacity: 0;
            }
        }
    }

`



const Logout = styled.div`
    margin-top: auto;
    padding-bottom: 10px;
    display: flex;
    padding-left: 10px;
    transition: all .2s;


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

        .text {
            transition: all .2s;
            opacity: 1;
        }
    }

    &.collapsed {

        padding-left: 0;
        button {

            img {
                margin: 0;
            }
            
            .text {
                opacity: 0;
            }
        }
    }
`

const Top = styled.div`
    display: flex;
    background-color: #1e2d3a;
    align-items: center;
    height: 60px;

    a {
        margin-right: auto;
    }

    img.collapse {
        cursor: pointer;
        width: 35px;
        margin-right: 15px;
        transform: rotate(180deg);
        
    
        &.true {
            transform: rotate(0);
        }
    }

    &.collapsed {
        flex-direction: column;

        a {
            order: 2;
        }

        img.collapse {
            height: 60px;
            margin-right: 0;
            margin-top: 10px;
        }
    }
`

const Logo = styled.div`

    padding: 10px;
    background-color: #1e2d3a;
    margin-right: auto;
    width: 60px;
    transition: all .2s;
    opacity: 1;

    img {
        width: 100%;
    }

    &.collapsed {
        opacity: 0;
        transition: none;
    }
`


const SideNav = (props) => {

    let history = useHistory()
    
    const logOut = () => {
        props.logout()
        history.push("/login")
    }

    const [ collapsed, setCollapsed ] = React.useState(true)


    return (
        <SideNavSection className={collapsed ? 'collapsed' : ''}>
            <Top className={collapsed ? 'collapsed' : ''}><Link to="/"><Logo className={collapsed ? 'collapsed' : ''}><img alt="Логотип" src={logoIcon}/></Logo></Link> <img onClick={() => setCollapsed(!collapsed)} className={`collapse ${collapsed}`} alt="Закрыть меню" src={collapseIcon}/></Top>
            <ul className={collapsed ? 'collapsed' : ''}>
                <li><NavLink to='/panel/dispatchers'><img alt='Диспетчеры' src={dipatchers}/><span className="text">Диспетчеры</span></NavLink></li>
                <li><NavLink to='/panel/dealer_centers'><img alt=' Дилерские центры' src={dealer_centers}/><span className="text">Дилерские центры</span></NavLink></li>
                <li><NavLink to='/panel/cards'><img alt='Карты' src={cards}/><span className="text">Карты</span></NavLink></li>
                <li><NavLink to='/panel/contractors'><img alt='Подрятчики' src={contractors}/><span className="text">Подрятчики</span></NavLink></li>
                <li><NavLink to='/panel/orders'><img alt='Заказы' src={orders}/><span className="text">Заказы</span></NavLink></li>
                <li><NavLink to='/panel/reviews'><img alt='Отзывы' src={reviews}/><span className="text">Отзывы</span></NavLink></li>
                <li><NavLink to='/panel/reports'><img alt='Отчеты' src={reports}/><span className="text">Отчеты</span></NavLink></li>
                <li><NavLink to='/panel/history'><img alt='История' src={historyIcon}/><span className="text">История</span></NavLink></li>
                <li><NavLink to='/panel/settings'><img alt='Настройки' src={settings}/><span className="text">Настройки</span></NavLink></li>
            </ul>

            <Logout className={collapsed ? 'collapsed' : ''}>
                <button onClick={logOut}>
                    <img src={logoutIcon} alt="Выйти"/><span className="text">Выйти</span>
                </button>
            </Logout>
        </SideNavSection>
    )
}

export default connect(null, {logout})(SideNav)