import React, { useEffect } from 'react'
import styled from 'styled-components'
import Card from '../../elements/Card'
import { Link, withRouter } from 'react-router-dom'

import nextIcon from './next.svg'


const PaginatorStyled = styled(Card)`
    margin-top: 10px;
    padding: 3px 20px;
    display: flex;
    justify-content: flex-end;

    button {

        display: flex;
        font-size: .9em;
        align-items: center;
        
        img {
            width: 18px;

            &.goBack {
                transform-origin: 50% 50%;
                transform: rotate(180deg);
            }
        }
    }

    .page {
        font-weight: bold;
        font-size: 1em;
        background-color: black;
        color: white;
        border-radius: 50%;
        width: 30px;
        height: 30px;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 3px;
        margin: 10px;
    }
`

const Paginator = ({page, setPage, history, loading, totalPages}) => {

    useEffect(() => {
        if(+page < 0) {
            setPage('1')
            history.push(`/panel/dispatchers?page=${1}`)
        }
        
    }, [])

    const goBack = () => {
        if(+page !== 1) {
            setPage(page-1)
            history.push(`/panel/dispatchers?page=${+page-1}`)
        }
    }

    const goForward = () => {
        if(totalPages > +page) {
            setPage(+page+1)
            history.push(`/panel/dispatchers?page=${+page+1}`)
        }
    }

    return (
        <PaginatorStyled>
            <button disabled={loading === null ? true : false} onClick={goBack}><img className="goBack" src={nextIcon}/>Prev</button>
            <div className="page">{page}</div>
            <button disabled={loading === null ? true : false} onClick={goForward}>Next <img src={nextIcon}/></button>

        
        </PaginatorStyled>
    )
}

export default withRouter(Paginator)