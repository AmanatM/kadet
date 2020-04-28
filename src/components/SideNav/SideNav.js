import React, { useState, useEffect, useRef } from 'react'
import styled from 'styled-components'
import { NavLink, Link, useHistory } from 'react-router-dom'
import { connect } from 'react-redux'
import { logout } from '../../reducers/user'

// import dealer_centers from './icons/dealer_centers.svg'
// import contractors from './icons/contractors.svg'
// import reviews from './icons/reviews.svg'
// import reports from './icons/reports.svg'
// import historyIcon from './icons/history.svg'

import dipatchers from './icons/dispatchers.svg'
import settings from './icons/settings.svg'
import logoutIcon from './icons/logout.svg'
import collapseIcon from './icons/collapse.svg'
import orders from './icons/orders.svg'
import cards from './icons/cards.svg'
import logoIcon from '../../assets/imgs/logo_white.svg'
import dashboardIcon from './icons/dashboard.svg'





const SideNavSection = styled.nav`
    background-color: #2c3e4e;
    transition: all .2s;
    height: 100vh;
    display: inline-block;
    grid-area: nav;
    display: flex;
    flex-direction: column;
    grid-area: nav;
    z-index: 99;
    width: 250px;


    &.collapsed:not(.mobile) {
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
                height: 45px;


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

        &.collapsed:not(.mobile) {
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
                position: absolute;
                left: -120%;
            }
        }
    }

    &.mobile {
        position: fixed;
        transform: translateX(-100%);

        &.collapsed {
            transform: translateX(0);
        }
        
    }

`



const Logout = styled.div`
    margin-top: auto;
    padding-bottom: 10px;
    display: flex;
    padding-left: 10px;
    transition: all .2s;
    margin-bottom: 30px;


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

    &.collapsed:not(.mobile) {

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
        transition: all .2s;        
    
        &.true {
            transform: rotate(0);
        }
    }

    &.mobile {
        img.collapse {
        transform: rotate(0);
        
        &.true {
            transform: rotate(180deg);
        }
    }
    }

    &.collapsed {
        flex-direction: column;

        a {
            order: 2;
        }

        img.collapse {

            margin-right: 0;
            margin-top: 17px;
        }

        &.mobile {
            img.collapse {
                margin-right: 0;
                margin-top: 0;
            }
        }
    }

    &.mobile {
        img.collapse {
            position: fixed;
            top: 30px;
            right: -70px;
            background-color: #2c3e4e;
            border-radius: 10px;
            padding: 10px;
            width: 45px;
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

        &.mobile {
            opacity: 1;
            margin-top: 6px;
        }
    }
`


const SideNav = (props) => {

    let history = useHistory()
    
    const logOut = () => {
        props.logout()
        history.push("/login")
    }

    const node = useRef()

    const [ collapsed, setCollapsed ] = React.useState(false)
    const [ screenSize, setScreenSize ] = React.useState(window.innerWidth)
    const [ mobileView, setMobileView ] = React.useState(screenSize < 1000)

    const handleClickOutside = e => {
        console.log("clicking anywhere")
        if (node.current.contains(e.target)) {
          // inside click
          return
        }
        // outside click
        setCollapsed(false)
    }

    useEffect(() => {
        if(screenSize < 1000) {
            setMobileView(true)
        } else {
            setMobileView(false)
        }
    }, [screenSize])

    useEffect(() => {
        if (collapsed && screenSize < 1000) {
          document.addEventListener("mousedown", handleClickOutside)
        } else {
          document.removeEventListener("mousedown", handleClickOutside)
        }
    
        return () => {
          document.removeEventListener("mousedown", handleClickOutside);
        }
      }, [collapsed])


    useEffect(() => {

        window.addEventListener('resize', () =>  setScreenSize(window.innerWidth));

        return () => {
            window.removeEventListener('resize', () =>  setScreenSize(window.innerWidth))
        }
      }, [])


    return (
        <SideNavSection  ref={node} className={`${collapsed ? 'collapsed' : ''} ${mobileView ? 'mobile' : ''}`}>
            <Top className={`${collapsed ? 'collapsed' : ''} ${mobileView ? 'mobile' : ''}`}><Link to="/"><Logo className={`${collapsed ? 'collapsed' : ''} ${mobileView ? 'mobile' : ''}`}><img alt="Логотип" src={logoIcon}/></Logo></Link> <img onClick={() => setCollapsed(!collapsed)} className={`collapse ${collapsed}`} alt="Закрыть меню" src={collapseIcon}/></Top>
            <ul className={`${collapsed ? 'collapsed' : ''} ${mobileView ? 'mobile' : ''}`}>
                {/* <li><NavLink to='/panel/dealer_centers'><img alt=' Дилерские центры' src={dealer_centers}/><span className="text">Дилерские центры</span></NavLink></li> */}
                <li><NavLink to='/panel/dashboard'><img alt='Панель' src={dashboardIcon}/><span className="text">Панель</span></NavLink></li>
                {JSON.parse(window.localStorage.getItem('user')).admin ?  (<li><NavLink to='/panel/dispatchers'><img alt='Диспетчеры' src={dipatchers}/><span className="text">Диспетчеры</span></NavLink></li>) : null}
                
                <li><NavLink to='/panel/cards'><img alt='Карты' src={cards}/><span className="text">Карты</span></NavLink></li>
                <li><NavLink to='/panel/orders'><img alt='Заказы' src={orders}/><span className="text">Заказы</span></NavLink></li>
                <li><NavLink to='/panel/profile'><img alt='Настройки' src={settings}/><span className="text">Аккаунт</span></NavLink></li>

                {/* <li><NavLink to='/panel/contractors'><img alt='Подрятчики' src={contractors}/><span className="text">Подрятчики</span></NavLink></li>
                <li><NavLink to='/panel/reviews'><img alt='Отзывы' src={reviews}/><span className="text">Отзывы</span></NavLink></li>
                <li><NavLink to='/panel/reports'><img alt='Отчеты' src={reports}/><span className="text">Отчеты</span></NavLink></li>
                <li><NavLink to='/panel/history'><img alt='История' src={historyIcon}/><span className="text">История</span></NavLink></li>
                <li><NavLink to='/panel/settings'><img alt='Настройки' src={settings}/><span className="text">Настройки</span></NavLink></li> */}
            </ul>

            <Logout className={`${collapsed ? 'collapsed' : ''} ${mobileView ? 'mobile' : ''}`}>
                <button onClick={logOut}>
                    <img src={logoutIcon} alt="Выйти"/><span className="text">Выйти</span>
                </button>
            </Logout>
        </SideNavSection>
    )
}

export default connect(null, {logout})(SideNav)