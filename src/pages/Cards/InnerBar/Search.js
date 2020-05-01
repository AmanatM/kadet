import React, { useState, useEffect, useRef } from 'react'
import styled from 'styled-components'

import searchIcon from './icons/search.svg'

const SearchStyled = styled.div`
    
    margin: 0 10px;
    flex: 20% 0 0;
    margin-right: auto;

    form {
        position: relative;
        height: 40px;

        input {
            height: 100%;
            padding: 5px 10px;
            width: 100%;
            outline: none;
            border: none;
            border-bottom: 1px solid grey;
        }

        button {
            background-color: #2c3e4e;
            width: 35px;
            height: 80%;
            position: absolute;
            top: 0;
            right: 0;
            border-radius: 5px;

            img {
                max-width: 100%;
                width: 15px;
            }
        }
    }
`

const ExtraMenuStyled = styled.div`
    position: absolute;
    bottom: -80px;
    left: 50%;
    transform: translateX(-50%);
    width: 100%;
    background-color: white;
    padding: 15px 20px;
    z-index: 9;
    border-bottom-right-radius: 7px;
    border-bottom-left-radius: 7px;
    box-shadow: 8px 8px 20px 0px rgba(0, 0, 0, 0.33);
    max-width: 500px;
    

    .info {
        margin-bottom: 10px;
    }
    .options {

        display: flex;
        justify-content: space-around;

        li {
            list-style: none;
            display: flex;
            cursor: pointer;

            input {
                margin-right: 15px;
            }
        }
    }
`

const ExtraMenu = ({open, setOpen}) => {

    const [ activeOption, setActiveOption ] = useState('ФИО')

    const node = useRef();

    const searchOptions = [
        {name: 'ФИО', value: 'name'},
        {name: 'Стране', value: 'country'},
        {name: 'Языку', value: 'language'},
    ]

    const handleClickOutside = e => {
        console.log("clicking anywhere");
        if (node.current.contains(e.target)) {
          // inside click
          return;
        }
        // outside click
        setOpen(false)
    }

    useEffect(() => {
        if (open) {
          document.addEventListener("mousedown", handleClickOutside)
        } else {
          document.removeEventListener("mousedown", handleClickOutside)
        }
    
        return () => {
          document.removeEventListener("mousedown", handleClickOutside);
        }
    }, [open])
    
    if(open) {
        return (
            <ExtraMenuStyled ref={node}>
                <p className="info">Искать по: </p>
                <ul className="options">
                    {searchOptions.map(option => (
                        <li key={option.value}><input name="searchOption" type="radio" value={option.value} id={option.value}/><label htmlFor={option.value}>{option.name}</label></li>
                    ))}
                </ul>
            </ExtraMenuStyled>
        )
    } else {
        return null
    }


}


const Search = () => {

    const [ menuActive, setMenuActive ] = useState(false)

    const onSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <SearchStyled>
            <form onSubmit={onSubmit} onClick={() => setMenuActive(true)} onFocus={() => setMenuActive(true)}>
                <input placeholder="Поиск" className="search_field"/>
                <button><img alt="Поиск" src={searchIcon}/></button>
                <ExtraMenu open={menuActive} setOpen={setMenuActive}/>
            </form>
        </SearchStyled>
    )
}


export default Search