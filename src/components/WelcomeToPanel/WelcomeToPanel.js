import React from 'react'
import styled from 'styled-components'

import PanelContainer from '../../elements/PanelContainer'
import Card from '../../elements/Card'

const WelcomeToPanelStyled = styled(PanelContainer)`

    display: flex;

    .welcome {
        width: 500px;
        margin: auto;
    }
`

const WelcomeToPanel = () => {

    return (
        <WelcomeToPanelStyled>
            <div className="welcome">
                <Card>
                    Добро пожаловать в панель <b>Kadet!</b>
                </Card>
            </div>
        </WelcomeToPanelStyled>
    )
}

export default WelcomeToPanel