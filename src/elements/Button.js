import styled from 'styled-components'

const Button = styled.button`
    border: none;
    padding: 10px 20px;
    border-radius: 20px;
    font-size: 1em;
    color: ${props => props.color || "black"};;
    background-color: ${props => props.bgColor || "white"};
    transition: all .2s;
    box-shadow: 3px 3px 10px 0px rgba(0,0,0,.2);

    &:hover {
        box-shadow: 6px 9px 7px 0px rgba(0,0,0,.4);
    }
`

export default Button