import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { Route, Switch, Redirect } from 'react-router-dom'
import SideNav from '../SideNav/SideNav'

import Dispatchers from '../../pages/dispatchers/Dispatchers'



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
        path: '/panel/dispatchers',
        component: <Dispatchers/>
    },
    {
        path: '/panel/dealer_centers',
        component: <DemoPage name={'Дилерские центры'}/>,
    },
    {
        path: '/panel/maps',
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


    const [ notes, setNotes ] = useState([
        {
            id: 1,
            content: 'Tralala'
        },
        {
            id: 2,
            content: 'Use effect'
        },
        {
            id: 3,
            content: 'Hahaha'
        }
    ])




    return (
        <MainFrameStyled>
            <SideNav/>
            <Redirect to="/panel/dispatchers"/>

                <div className="content">

                    {notes ? notes.map(note =>  <li key={note.id}>{note.content}</li>) : null}

                    <Switch>
                        {routes.map((route, index) => <Route key={index} exact path={route.path} render={() => route.component} />)}  

                        <Route render={() => <h2>404 - Page not found!</h2>}/>
                    </Switch>
                </div>

        </MainFrameStyled>
    )
}

export default MainFrame