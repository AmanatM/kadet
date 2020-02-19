import React from 'react'

const DemoPage = ({name}) => (<h2>{name}</h2>)

const routes = [
    {   
        name: 'Main page',
        path: '/',
        page: <DemoPage name="Main page"/>
    },
    {
        name: 'Dispethcers',
        path: '/dispetchers',
        page: <DemoPage name="Dispethcers"/>
    }
]

export default routes