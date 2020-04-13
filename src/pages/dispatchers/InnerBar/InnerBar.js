import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

import Card from '../../../elements/Card'

import Filters from './Filters'
import Search from './Search'

import addIcon from './icons/add.svg'

const InnerBarStyled = styled(Card)`
    padding-top: 15px;
    padding-bottom: 15px;
    margin-bottom: 13px;
    display: flex;
    align-items: center;
`

const AddDispatcherButton = styled.button`
    background-color: #3154a3;
    border-radius: 10px;
    color: white;
    font-size: .9em;
    font-weight: bold;
    margin-left: 20px;
    display: flex;
    justify-content: center;
    align-content: center;
    border-radius: 50%;
    width: 33px;
    height: 33px;
    padding: 7px;
    min-width: 33px;

    img {
        width: 100%;
        max-width: 100%;
    }
`

const InnerBar = () => {

    return (
        <InnerBarStyled>
            <Filters/>
            <Search/>

            <Link to="/panel/dispatchers/add_dispatcher"><AddDispatcherButton><img src={addIcon} alt="Добавить диспетчера"/></AddDispatcherButton></Link>
        </InnerBarStyled>
    )
}

export default InnerBar