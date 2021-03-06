import React, { useState, useEffect, useRef } from 'react'
import styled from 'styled-components'
import Loader from 'react-loader-spinner'


import searchIcon from './icons/search.svg'

const SearchStyled = styled.div`
    
    margin: 0 10px;
    flex: 50% 0 0;
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
    @media screen and (max-width: 875px) {
        flex-wrap: wrap;
        margin: 0;
        flex: 100% 0 0;
        margin-top: 15px;
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
        justify-content: center;

        .option {
            list-style: none;
            display: flex;
            cursor: pointer;
            white-space: nowrap;
            background: blue;
            padding: 3px 5px;
            min-width: 100px;
            border: 2px solid #2c3e4e;
            background: #2c3e4e;
            color: white;
            justify-content: center;

            &.active {
                background: white;
                color: #2c3e4e;
            }

            input {
                margin-right: 15px;
            }
        }
    }
`

const ExtraMenu = ({open, setOpen, searchOption, setSearchOption}) => {

    const node = useRef();

    const searchOptions = [
        {name: 'Фамилии', value: 'surname'},
        {name: 'VIN', value: 'vin'},
        {name: 'Номеру карты', value: 'cardNumber'},
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
                <div className="options">
                    {searchOptions.map(option => (
                        <div key={option.value} className={`option ${searchOption === option.value ? 'active' : ''}`} onClick={(e) => setSearchOption(option.value)}>{option.name}</div>
                    ))}
                </div>
            </ExtraMenuStyled>
        )
    } else {
        return null
    }


}


const Search = (props) => {

    const [ menuActive, setMenuActive ] = useState(false)

    const onSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <SearchStyled>
            <form onSubmit={onSubmit} onClick={() => setMenuActive(true)} onFocus={() => setMenuActive(true)}>
                <input value={props.searchValue} onChange={(e) => props.setSearchValue(e.target.value)} placeholder="Поиск" className="search_field"/>
                <button>{props.searchLoading ? (<Loader type="Puff" color="#fff" height={15} width={15}/>) : (<img alt="Поиск" src={searchIcon}/>)}</button>
                <ExtraMenu searchOption={props.searchOption} setSearchOption={props.setSearchOption} open={menuActive} setOpen={setMenuActive}/>
            </form>
        </SearchStyled>
    )
}


export default Search