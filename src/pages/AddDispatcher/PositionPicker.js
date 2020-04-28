import React, { useState, useRef } from 'react'
import styled from 'styled-components'
import { notify } from '../../reducers/notifications'
import { connect } from 'react-redux'


const PositoinsPickerStyled = styled.ul`
    position: absolute;
    background-color: white;
    box-shadow: 0px 0px 4px 0px rgba(0,0,0,.4);
    border-radius: 10px;
    cursor: pointer;
    top: 0px;
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
    background-color: grey;
    border-radius: 30px;
    margin-right: 20px;
    margin-top: 5px;
    padding: 3px;
    text-align: center;
    font-weight: bold;
    color: white;
    min-width: 110px;

`


const PositoinsPicker = ({selected, setSelected, options}) => {

    const [ active, setActive ] = useState(false)

    const node = useRef()

    const handleClickOutside = e => {
        if (node.current.contains(e.target)) {
          // inside click
          return
        }
        setActive(false)
      };

    const openDropDown = (e) => {
        setActive(!active)
    }

    React.useEffect(() => {
        if (active) {
          document.addEventListener("mousedown", handleClickOutside);
        } else {
          document.removeEventListener("mousedown", handleClickOutside);
        }

        return () => {
          document.removeEventListener("mousedown", handleClickOutside);
        };
      }, [active]);


      const select = (selection) => {
        setSelected(selection)
    }


    const valueToShow = options.filter(option => option === selected)

    return (
        <>
            <Selected className={selected} onClick={() => setActive(true)}>{valueToShow[0]}</Selected>
            {active ? (
                <PositoinsPickerStyled ref={node} onMouseLeave={openDropDown} onClick={(e) => openDropDown(e)}>
                    {options.map((option, i) => (<li onClick={() => select(option)} key={i} data-value={option}>{option}</li>))}
                </PositoinsPickerStyled>
            ) : null}
        </>
    )
}

export default connect(null, { notify })(PositoinsPicker)