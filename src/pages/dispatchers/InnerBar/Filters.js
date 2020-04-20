import React, { useState, useEffect, useRef } from 'react'
import styled from 'styled-components'
import { getPositions } from '../../../services/misc/roles'


import filterIcon from './icons/filter.svg'

const FiltersDtyled = styled.div`
    flex: 30% 0 0;
    display: flex;
    align-items: center;

    .filter-icon {
      display: flex;
      justify-content: center;
      align-content: center;
      min-width: 20px;
      width: 18px;
      margin-right: 15px;
      img {
        width: 100%;
      }
    }

    .filter_item {
        display: flex;
        align-items: center;
        position: relative;
        
        &.status-filter {
          margin-right: 20px;
        }

        span.info {
            font-size: .7em;
            position: absolute;
            top: -50%;
            left: 0;
            
        }
    }
`

const DropDownStyled = styled.div`
  display: flex;
  position: relative;

  .dropdown-toggler {
    background-color: #45a9db;
    padding: 5px;
    font-size: .9em;
    border-radius: 5px;
    color: white;
    position: relative;
    z-index: 9;
    max-height: 27px;
    height: 27px;
  }

  .dropdown-menu {
    position: absolute;
    left: 0;
    top: 0;
    background-color: #607d8b;
    border-radius: 5px;
    z-index: 99;

    .dropdown-menu-item {
      list-style: none;
      font-size: .9em;
      text-align: center;
      padding: 5px 10px;
      cursor: pointer;
      color: white;
    }
  }
`


const Dropdown = ({ value, options, onChange }) => {


  const node = useRef()
  const [open, setOpen] = useState(false)

  const handleClickOutside = e => {
    console.log("clicking anywhere")
    if (node.current.contains(e.target)) {
      // inside click
      return;
    }
    // outside click
    setOpen(false)
  }

  const handleChange = selectedValue => {
    onChange(selectedValue)
    setOpen(false)
  }

  useEffect(() => {
    getPositions()
    .then(res => {
      console.log(res)
    })
  })

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


  return (
    <DropDownStyled ref={node} className="dropdown">
      <button className="dropdown-toggler" onClick={e => setOpen(!open)}>
        {value || 'Все'}
      </button>
      {open ? (
        <ul className="dropdown-menu">
          {options.map(opt => (
            <li key={opt} className="dropdown-menu-item" onClick={e => handleChange(opt)}>
              {opt}
            </li>
          ))}
        </ul>
      ) : null}
    </DropDownStyled>
  )
}

const Filters = () => {

    const [ statusFilter, setStatusFilter ] = useState('Любой')
    const [ positionFilter, setPositionFilter ] = useState('Любая')
    console.log(statusFilter)

    const statusFilters = ["Любой", "Активыный", 'Выходной', 'На больничном', 'В отпуске', 'Уволен']

    const positionFilters = ["Любая", 'Диспетчер', 'Старший диспетчер', 'Служба контроля качества', 'Выделенный под проект']

    return (
        <FiltersDtyled>
            <div className="filter-icon"><img src={filterIcon} alt="Фильтр"/></div>
            <div className="filter_item status-filter">
                <span className="info">Статус: </span>
                <Dropdown value={statusFilter} options={statusFilters} onChange={(v) => setStatusFilter(v)}/>
            </div>

            <div className="filter_item">
                <span className="info">Должность: </span>
                <Dropdown value={positionFilter} options={positionFilters} onChange={(v) => setPositionFilter(v)}/>
            </div>

        </FiltersDtyled>
    )
}


export default Filters