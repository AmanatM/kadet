import React from 'react'
import styled from 'styled-components'
import { Route, Switch, Redirect, withRouter } from 'react-router-dom'
import SideNav from '../SideNav/SideNav'
import { connect } from 'react-redux'


import WelcomeToPanel from '../../components/WelcomeToPanel/WelcomeToPanel'
import Dispatchers from '../../pages/dispatchers/Dispatchers'

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
    grid-template-columns: 250px 1fr;
    grid-gap: 0px;

    .content {
        grid-area: content;
        padding: 20px;
        overflow: scroll;
        background-color: #e7e7e7;
    }
`


const DemoPage = ({name}) => <h1>{name}</h1>


const routes = [
    {
        path: '/panel/dispatchers',
        component: <Dispatchers />
    },
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


const MainFrame = (props) => {

    return (
        <MainFrameStyled>
            <SideNav/>
            <TopPanel/>

                <div className="content">

                    <Switch>
                        <Route exact path="/panel" component={WelcomeToPanel}/>
                        {routes.map((route, index) => <Route key={index} exact path={route.path} render={() => route.component} />)}  

                        <Route render={() => <h2>404 - Page not found!</h2>}/>
                    </Switch>
                </div>

        </MainFrameStyled>
    )
}

const mapStateToProps = (state) => {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps, null)(MainFrame)