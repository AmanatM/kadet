import styled from 'styled-components'

const ButtonModern = styled.button`
    border: 2px solid #2c3e4e;
    padding: 6px 20px;
    border-radius: 3px;
    font-size: 1em;
    color: ${props => props.invert ? "white" : "#2c3e4e"};
    background-color: ${props => props.invert ? "#2c3e4e" : "white"};
    transition: all .2s;

    &:hover {
        background-color: #2c3e4e;
        color: white;
    }
`

export default ButtonModern