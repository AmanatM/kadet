import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { closeNotification } from '../../reducers/notifications'
import closeIcon from '../../assets/imgs/close_icon.svg'

const NotificationStyled = styled.div`

    @keyframes flyIn{
        0% {
            transform: translateX(200%);
        }

        100% {
            transform: translateX(0);
        }
    }
    display: flex;
    flex-direction: row;
    align-items: center;
    box-shadow: 7px 8px 13px 2px rgba(0, 0, 0, 0.35);
    background-color: grey;
    min-height: 85px;
    height: auto;
    color: white;
    padding: 10px 20px;
    border-radius: 10px;
    width: 100%;
    margin: 15px 0;
    justify-content: center;
    position: relative;
    animation: flyIn .5s;

        .content {
            display: flex;
            align-items: center;
            flex-direction: column;
        }

        h3 {
            font-size: 1em;
            text-align: center;
        }

        p {
            font-size: .9em;
            margin-top: 1em;
        }

        &.error {
            background-color: #f44336;
        }

        &.info {
            background-color: #607d8b;
        }

        &.submit {
            background-color: #607d8b;
            padding-right: 120px;

            .content {
                margin: auto;
            }
        }

        &.success {
            background-color: #4caf50;
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
            top: 5px; 
            right: 10px;
            width: 15px;
            height: 15px;
            background: transparent;
            border: 2px solid white;
            border-radius: 50%;
            padding: 10px;
            box-sizing: content-box;


            img {
                max-width: 100%;
            }
        }

        .submit_btns {
            display: flex;
            flex-direction: column;
            position: absolute;
            right: 0;
            top: 0;
            height: 100%;

            button {
                border: none;
                padding: 10px;
                background-color: grey;
                font-size: .75em;
                font-weight: bold;
                width: 100px;
                height: 50%;
                &.continue {
                    background-color: #4caf50;
                    color: white;
                    border-top-right-radius: 10px;
                }

                &.cancel {
                    background-color: #da5148;
                    color: white;
                    border-bottom-right-radius: 10px;
                }
            }

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
            
    
            return () => {
                clearTimeout(timer)        
                clearTimeout(closeTimer)
            }
        }

    }, [])

    if(notification.type === 'submit') {
        return (
            <NotificationStyled className={`notification ${notification.type}`}>
                <div className="content">
                    <h3>{notification.heading}</h3>
                    {notification.text ? <p>{notification.text}</p> : null}
                </div>
                <div className="submit_btns">
                    <button onClick={() => {notification.onOkFunc(); closeNotification(notification.id)}} className="continue">Продолжить</button>
                    <button onClick={() => closeNotification(notification.id)} className="cancel">Отмена</button>
                </div>
                {notification.time ? <div className="progressBar" style={{width: `${width}%`, transition: `all ${notification.time/1000}s linear`}}></div> : null}
            </NotificationStyled>
        )
    } else {

        return (
            <NotificationStyled className={`notification ${notification.type}`}>
                <div className="content">
                    <h3>{notification.heading}</h3>
                    {notification.text ? <p>{notification.text}</p> : null}
                </div>
                <button onClick={() => closeNotification(notification.id)} className="close_btn"><img src={closeIcon} alt="close"/></button>
                {notification.time ? <div className="progressBar" style={{width: `${width}%`, transition: `all ${notification.time/1000}s linear`}}></div> : null}
            </NotificationStyled>
        )
    }
}

export default connect(null, { closeNotification })(Notification)