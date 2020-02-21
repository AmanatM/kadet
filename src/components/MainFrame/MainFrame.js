import React from 'react'
import styled from 'styled-components'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import SideNav from '../SideNav/SideNav'



const MainFrameStyled = styled.div`
    height: 100vh;
    max-height: 100vh;
    overflow: hidden;
    display: grid;

    grid-template-areas:
    "nav content";
    grid-template-columns: 250px 1fr;
    grid-gap: 0px;

    .content {
        grid-area: 'content';
    }
`

const DemoPage = ({name}) => <h1>{name}</h1>


const routes = [
    {
        path: '/dispatchers',
        component: <DemoPage name={'Диспетчеры'}/>
    },
    {
        path: '/dealer_centers',
        component: <DemoPage name={'Дилерские центры'}/>,
    },
    {
        path: '/maps',
        component: <DemoPage name={'Карты'}/>
    },
    {
        path: '/contractors',
        component: <DemoPage name={'Подрядчики'}/>
    },
    {
        path: '/orders',
        component: <DemoPage name={'Заказы'}/>
    },
    {
        path: '/reviews',
        component: <DemoPage name={'Отзывы'}/>
    },
    {
        path: '/reports',
        component: <DemoPage name={'Отчеты'}/>
    },
    {
        path: '/history',
        component: <DemoPage name={'История последних действий'}/>
    },
    {
        path: '/settings',
        component: <DemoPage name={'Настройки'}/>
    },

]


const MainFrame = () => {

    return (
        <MainFrameStyled>

            <Router>
                <SideNav/>

                <div className="content">
                    <Switch>
                        {routes.map((route, index) => 
                            <Route key={index} exact path={route.path} render={() => route.component}/>
                        )}                       

                        <Route path="*" render={() => <h2>404 - Page not found!</h2>}/>
                    </Switch>
                </div>

            </Router>
        </MainFrameStyled>
    )
}

export default MainFrame