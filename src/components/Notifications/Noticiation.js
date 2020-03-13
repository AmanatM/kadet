import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { closeNotification } from '../../reducers/notifications'

const NotificationStyled = styled.div`

    @keyframes flyIn{
        0% {
            transform: translateX(200%);
        }

        100% {
            transform: translateX(0);
        }
    }

    box-shadow: 7px 8px 13px 2px rgba(0, 0, 0, 0.35);
    display: flex;
    align-items: center;
    flex-direction: column;
    background-color: grey;
    min-height: 80px;
    height: auto;
    color: white;
    padding: 10px 20px;
    border-radius: 10px;
    width: 100%;
    margin: 15px 0;
    justify-content: center;
    position: relative;
    animation: flyIn .5s;

        h3 {
            font-size: 1.1em;
        }

        &.error {
            background-color: #f44336;
        }

        &.info {
            background-color: #607d8b;
        }

        &.success {
            background-color: #8bc34a;
        }

        .progressBar {
            height: 7px;
            background-color: rgba(0, 0, 0, .5);
            position: absolute;
            bottom: 0px;
            left: 0;
            border-bottom-left-radius: 10px;
            border-bottom-right-radius: 10px;
        }
        
        .close_btn {
            position: absolute;
            top: 0; 
            right: 0;
        }
`


const Notification = ({notification, closeNotification}) => {
    const [ width, setWidth ] = useState(100)


    useEffect(() => {

        if(notification.time) {
            
            const timer = setTimeout(() => {
                setWidth(0)
            }, 1000)
    
            const closeTimer = setTimeout(() => {
                closeNotification(notification.id)
            }, 1000 + notification.time)
            
            console.log(timer)
    
            return () => {
                clearTimeout(timer)        
                clearTimeout(closeTimer)
            }
        }

    }, [])


    return (
        <NotificationStyled className={`notification ${notification.type}`}>
            <button onClick={() => closeNotification(notification.id)} className="close_btn">Close</button>
            <h3>{notification.heading}</h3>
            {notification.text ? <p>{notification.text}</p> : null}
            {notification.time ? <div className="progressBar" style={{width: `${width}%`, transition: `all ${notification.time/1000}s linear`}}></div> : null}
        </NotificationStyled>
    )
}

export default connect(null, { closeNotification })(Notification)