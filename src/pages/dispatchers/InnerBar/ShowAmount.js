import React from 'react'
import styled from 'styled-components'

const ShowAmountStyled = styled.div`
    span {
        margin-right: 5px;
    }
    font-size: .85em;   
`

const ShowAmount = (props) => {

    const limitOptins = [5, 10, 15, 20, 30]

    const changeAmount = (e) => {
        props.setLimit(e.target.value)
    }

    return (
        <ShowAmountStyled>
            <span>Показывать: </span>
            <select value={props.limit} onChange={changeAmount}>
                {limitOptins.map(option => (
                <option value={option} key={option}>
                    {option}
                </option>))}
            </select>
        </ShowAmountStyled>
    )
}

export default ShowAmount