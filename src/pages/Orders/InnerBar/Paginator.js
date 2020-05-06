import React, { useEffect } from 'react'
import styled from 'styled-components'
import { Link, withRouter } from 'react-router-dom'

import nextIcon from './icons/next.svg'


const PaginatorStyled = styled.div`
    display: flex;
    justify-content: flex-end;

    button {

        display: flex;
        font-size: .9em;
        align-items: center;
        background: transparent;
        width: 25px;
        height: 25px;
        border: 1px solid #2c3e4e;
        justify-content: center;
        transition: all .2s;

        &:hover {
            transform: scale(1.05);
        }
        
        img {
            max-width: 100%;
            width: 13px;
            transition: all .2s;



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
        margin: 6px 10px;
    }
`

const Paginator = ({page, setPage, history, loading, totalPages}) => {

    useEffect(() => {
        if(+page > totalPages) {
            setPage(1)
        } else if(page <= 0) {
            setPage(1)
        } 
    }, [])

    const goBack = () => {
        if(+page !== 1) {
            setPage(+page-1)
        }
    }

    const goForward = () => {
        if(totalPages > +page) {
            setPage(+page+1)
        }
    }

    return (
        <PaginatorStyled>
            <button disabled={loading === null ? true : false} onClick={goBack}><img className="goBack" src={nextIcon}/></button>
            <button disabled={loading === null ? true : false} onClick={goForward}><img src={nextIcon}/></button>        
        </PaginatorStyled>
    )
}

export default withRouter(Paginator)