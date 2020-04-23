import React from 'react'
import styled from 'styled-components'
import { Link, useHistory } from 'react-router-dom'

import Filters from './Filters'
import Search from './Search'
import Paginator from './Paginator'
import ShowAmount from './ShowAmount'

//import addIcon from './icons/add.svg'

import ButtonModern from '../../../elements/ButtonModern'

const InnerBarStyled = styled.div`
    padding: 20px 10px;
    display: flex;
    align-items: center;

    .page-info {
        font-size: .9em;
        margin: 0 15px;
    }
`

const InnerBar = (props) => {

    let history = useHistory()

    const addDispatcher = () => {
        history.push('/panel/dispatchers/add_dispatcher')
    }

    return (
        <InnerBarStyled>
            <ButtonModern style={{marginRight: 'auto'}} invert onClick={addDispatcher}>Добавить</ButtonModern>
            {/* <Filters/> */}
            {/* <Search/> */}
            <ShowAmount limit={props.limit} setLimit={props.setLimit}/>
            <div className="page-info">
                Стр {props.page} из {props.totalPages === 0 ? '?' : props.totalPages}
            </div>
            <Paginator totalPages={props.totalPages} loading={props.dispatchers} page={props.page} setPage={props.setPage}/>
        </InnerBarStyled>
    )
}

export default InnerBar