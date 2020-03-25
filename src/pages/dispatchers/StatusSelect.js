import React, { useState } from 'react'
import styled from 'styled-components'
import { patchDispatcher } from '../../services/dispatcherService'
import { notify } from '../../reducers/notifications'
import { connect } from 'react-redux'

const SelectStyled = styled.ul`
    position: absolute;
    background-color: white;
    box-shadow: 0px 0px 4px 0px rgba(0,0,0,.4);
    border-radius: 10px;
    cursor: pointer;
    top: -70px;
    left: 0;
    z-index: 99;
    width: 100%;

    li {
        list-style: none;
        padding: 5px 0;
        text-align: center;

        &:first-child {
            border-top-left-radius: 10px;
            border-top-right-radius: 10px;
        }

        &:last-child {
            border-bottom-left-radius: 10px;
            border-bottom-right-radius: 10px;
        }

        &:hover {
            background-color: lightgrey;
        }

    }
`

const Selected = styled.div`
    cursor: pointer;
    font-size: .8em;
    background-color: lightgrey;
    border-radius: 30px;
    max-width: 110px;
    padding: 3px;
    text-align: center;
    font-weight: bold;
    color: white;
    margin: 0 auto;

    &.fired {
        background-color: #f44336;
    }

    &.active {
        background-color: #4caf50;
    }

    &.vocation {
        background-color: #2196f3;
    }

    &.day_off {
        background-color: #ff9800;
    }
`


const StatusSelect = (props) => {

    const [ active, setActive ] = useState(false)
    const [ selected, setSelected ] = useState(props.selected)

    const openDropDown = () => {
        setActive(!active)
    }

    const select = (id, selection) => {
        const data = [{
            propName: 'status', value: selection
        }]
        setSelected(selection)

        patchDispatcher(id, data)
        .then((res) => {
            setSelected(selection)
            props.notify({
                heading: 'Статус обновлен',
                time: 1500,
                type: 'success'
            })
        })
        .catch(err => {
            setSelected(props.selected)
            props.notify({
                heading: 'Ошибка',
                text: err,
                time: 3000,
                type: 'error'
            })
        })
    }

    const valueToShow = props.options.filter(option => option.value === selected)

    return (
        <>
            <Selected className={selected} onClick={openDropDown}>{valueToShow.map(value => value.label)}</Selected>
            {active ? (
                <SelectStyled onMouseLeave={() => setActive(false)} onClick={openDropDown}>
                    {props.options.map((option, i) => (<li onClick={() => select(props.id, option.value)} key={i} data-value={option.value}>{option.label}</li>))}
                </SelectStyled>
            ) : null}
        </>
    )
}

export default connect(null, { notify })(StatusSelect)