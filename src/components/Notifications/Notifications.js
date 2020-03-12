import React from 'react'
import styled from 'styled-components'

import Notification from './Noticiation'

const NotificationsStyled = styled.div`
    z-index: 999;
    position: absolute;
    right: 5%;
    bottom: 5%;
    max-width: 90vw;
    width: 350px;

`
const Notifications = ({notifications}) => {

    // types: error, info, success
    return (
        <NotificationsStyled>
            {notifications.map((item, index) => (
                <Notification key={item.id} notification={item}/>
            ))}
        </NotificationsStyled>
    )
}

export default Notifications