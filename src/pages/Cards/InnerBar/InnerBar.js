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

    .toggle {
        display: flex;
        margin-left: 20px;
        margin-right: auto;

        button {
            
            &:first-child {
                border-bottom-right-radius: 0px;
                border-top-right-radius: 0px;
            }

            &:last-child {
                border-left: 0;
                border-bottom-left-radius: 0px;
                border-top-left-radius: 0px;
            }
        }
    }

    @media screen and (max-width: 875px) {
        flex-wrap: wrap;
    }

    @media screen and (max-width: 460px) {
        .toggle {
            flex: 100% 0 0;
            margin-top: 15px;
        }
    }
    
`

const InnerBar = (props) => {

    let history = useHistory()

    const addDispatcher = () => {
        history.push('/panel/cards/add_card')
    }

    return (
        <InnerBarStyled>
            <ButtonModern onClick={addDispatcher}>Добавить</ButtonModern>
            <div className="toggle">
                <ButtonModern invert={ props.type === 'active' ? true : false } onClick={() => props.setType('active')} >Активные</ButtonModern>
                <ButtonModern invert={ props.type === 'inactive' ? true : false }  onClick={() => props.setType('inactive')} >Неактивные</ButtonModern>
            </div>

            <Search searchLoading={props.searchLoading} searchOption={props.searchOption} setSearchOption={props.setSearchOption} searchValue={props.searchValue} setSearchValue={props.setSearchValue}/>

            {/* <Filters/> */}
            {/* <ShowAmount limit={props.limit} setLimit={props.setLimit}/>
            <div className="page-info">
                Стр. {props.page} из {props.totalPages === 0 ? '?' : props.totalPages}
            </div>
            <Paginator totalPages={props.totalPages} loading={props.dispatchers} page={props.page} setPage={props.setPage}/> */}

        </InnerBarStyled>
    )
}

export default InnerBar