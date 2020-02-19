import React from 'react'
import styled from 'styled-components'
import routes from '../../routes'
import { Link, BrowserRouter as Router } from 'react-router-dom'

const SideNavSection = styled.div`

`

const SideNav = () => {

    return (
        <SideNavSection>
            <nav>
                <ul>
                    {routes.map(route => 
                        <li><Link to={route.path}>{route.name}</Link></li>
                    )}
                </ul>
            </nav>
        </SideNavSection>
    )
}

export default SideNav