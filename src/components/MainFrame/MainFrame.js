import React from 'react'
import styled from 'styled-components'
import { Route, Switch, Redirect, withRouter } from 'react-router-dom'
import SideNav from '../SideNav/SideNav'
import { connect } from 'react-redux'


import Dashboard from '../../pages/Dashboard/Dashboard'
import Dispatchers from '../../pages/Dispatchers/Dispatchers'

import Cards from '../../pages/Cards/Cards'
import Orders from '../../pages/Orders/Orders'
import Profile from '../../pages/Profile/Profile'
import ActivateCard from '../../pages/Cards/ActivateCard/ActivateCard'

import TopPanel from '../../components/TopPanel/TopPanel'

const MainFrameStyled = styled.div`
    height: 100vh;
    max-height: 100vh;
    overflow: hidden;
    display: grid;
    grid-template-areas:
    "nav toppanel toppanel"
    "nav content content"
    "nav content content";
    grid-template-rows: 60px 1fr;
    grid-template-columns: auto 1fr;
    grid-gap: 0px;

    .contentMain {
        grid-area: content;
        padding: 20px;
        overflow: scroll;
        background-color: #e7e7e7;
    }
`


const DemoPage = ({name}) => <h1>{name}</h1>


const routes = [
    {
        path: '/panel/dealer_centers',
        component: <DemoPage name={'Дилерские центры'}/>,
    },
    {
        path: '/panel/cards',
        component: <DemoPage name={'Карты'}/>
    },
    {
        path: '/panel/contractors',
        component: <DemoPage name={'Подрядчики'}/>
    },
    {
        path: '/panel/orders',
        component: <DemoPage name={'Заказы'}/>
    },
    {
        path: '/panel/reviews',
        component: <DemoPage name={'Отзывы'}/>
    },
    {
        path: '/panel/reports',
        component: <DemoPage name={'Отчеты'}/>
    },
    {
        path: '/panel/history',
        component: <DemoPage name={'История последних действий'}/>
    },
    {
        path: '/panel/settings',
        component: <DemoPage name={'Настройки'}/>
    },

]


const MainFrame = () => {

    return (
        <MainFrameStyled>
            <SideNav/>
            <TopPanel/>

                <div className="contentMain">

                    <Switch>
                        <Route exact path="/panel/dashboard" component={Dashboard}/>
                        {JSON.parse(window.localStorage.getItem('user')).admin ? (<Route path="/panel/dispatchers" component={Dispatchers}/>): null}
                        

                        <Route exact path="/panel/cards/activate/:id" render={({match}) => <ActivateCard id={match.params.id}/>}/>
                        <Route path="/panel/cards" component={Cards}/> 
                        <Route path="/panel/orders" component={Orders}/> 
                        <Route path="/panel/profile" component={Profile}/> 

                        {/* {routes.map((route, index) => <Route key={index} exact path={route.path} render={() => route.component} />)}   */}

                        <Route render={() => <h2>404 - Page not found!</h2>}/>
                    </Switch>
                </div>

        </MainFrameStyled>
    )
}


export default MainFrame