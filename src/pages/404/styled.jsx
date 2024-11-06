import styled from 'styled-components';
import {Link} from "react-router-dom";

export const Body = styled.div`
    margin: 0;
    padding: 0;
    font-weight: 800;
    box-sizing: border-box;
    background: white;
    font-family: cursive;
`
export const Svg = styled.svg`
    font: 10.5em 'Monoton';
    width: 100%;
    height: 90vh;
`
export const H1 = styled.h1`
    text-align: center;
    font: 1.5em 'Roboto', sans-serif;
    font-weight: bold;
    color: #2f8f7f;
    opacity: .6;
`
export const LinkStyled = styled(Link)`
    text-decoration: none;
    color: #2f8f7f;
    font: 1.5em 'Roboto', sans-serif;
    font-weight: bold;
    display: block;
    text-align: center;
    margin-top: 20px;
    transition: .3s;
    &:hover{
        color: #2f8f7f;
        opacity: .6;
    }
    padding-bottom: 30px;
`