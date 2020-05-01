import styled from 'styled-components'
import ButtonModern from '../../../elements/ButtonModern'

export const ViewCardStyled = styled.div`
    position: fixed;
    overflow: scroll;
    top: 0px;
    width: 500px;
    height: 40px;
    left: 0;
    background: rgba(0, 0, 0, .5);
    z-index: 999;
    padding: 20px;
    height: 100vh;
    width: 100%;
    display: flex;
    z-index: 99;

    .content {
        background-color: rgb(231, 231, 231);
        width: 100%;
        max-width: 650px;
        margin: auto;
        border-radius: 10px;
        padding: 20px;
        border-top: 15px solid #2c3e4e;
    }
`

export const InactiveCard = styled.div`

    .card-number {
        margin: 20px 0;

        .info {
            font-size: .9em;
            font-style: italic;
            margin-bottom: 5px;
        }

        .number {
            background-color: #d6d6d6;
            padding: 10px;
            font-size: 1.2em;
            font-family: 'Verdana',sans-serif;
            font-weight: bold;
            border-radius: 7px;
            letter-spacing: 3px;
            color: #2b2b2b;
        }   
    }

    .service-list {
        display: flex;
        align-content: center;

        .info {
            font-size: .9em;
            font-style: italic;
            margin-bottom: 5px;
            margin-right: 5px;
        }

        .service {
            font-weight: bold;
        }
    }
`

export const ActiveCard = styled.div`

    .info {
        font-size: .9em;
        font-style: italic;
        margin-bottom: 5px;
        color: #656565;
    }

    h4 {
        margin-bottom: 20px;
    }

    .col-2 {
        display: flex;
        justify-content: space-between;
        
        div:first-child {
            flex: 45% 0 0;
        }

        div:last-child {
            flex: 45% 0 0;
        }

        @media screen and (max-width: 600px){
            flex-wrap: wrap;

            div:first-child,
            div:last-child  {
                flex: 100% 1 0;
            }

            div:first-child {
                margin-bottom: 20px;
            }
        }
    }

    .card-number {
        margin-bottom: 20px;

        .number {
            background-color: #d6d6d6;
            padding: 10px;
            font-size: 1.2em;
            font-family: 'Verdana',sans-serif;
            font-weight: bold;
            border-radius: 7px;
            letter-spacing: 3px;
            color: #2b2b2b;
        } 
    }
    .card-holder {
        margin-bottom: 20px;
        .holder {
            background-color: #d6d6d6;
            padding: 10px;
            font-size: 1em;
            font-family: 'Arial',sans-serif;
            border-radius: 7px;
            color: #2b2b2b;
        }
    }

    .car-number-container {
        display: flex;
        flex-wrap: wrap;

        .info {
            width: 100%;
        }

        .car-number {
            border-radius: 7px;
            padding: 10px;
            border: 2px solid grey;
            background-color: white;
            width: auto;
            letter-spacing: 2px;
            font-weight: bold;
        }
    }

    .car-vin-container {
        .info {
            margin-bottom: 15px;
        }

        .car-vin {
            font-weight: bold;
        }
    }

    .car-make-color {
        margin-top: 20px;   
        margin-bottom: 20px;

        .car-color-container {
            .car-color {
                display: flex;
                align-items: center;

                .color-box {
                    flex: 25px 0 0;
                    border: 2px solid black;
                    width: 25px;
                    height: 25px;
                    border-radius: 50ex;
                    margin-left: 10px;
                }
            }
        }
    }

    .email-container {
        margin-top: 15px;
        margin-bottom: 20px;

        .info {
            margin-right: 10px;
        }

        .email {
            background-color: #d6d6d6;
            padding: 10px;
            font-size: 1.1em;
            font-family: 'Verdana',sans-serif;
            border-radius: 7px;
            color: #2b2b2b;
        }
    }

    .paid {
        div {
            display: flex;
            align-items: center;

            img {
                width: 20px;
                margin-left: 5px;
            }
        }
    }

`

export const Button = styled(ButtonModern)`
    background-color: ${props => props.invert ? "#2c3e4e" : "rgb(231, 231, 231)"};
    margin-top: 20px;
`
