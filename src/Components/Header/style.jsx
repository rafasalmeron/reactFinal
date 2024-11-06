import styled from 'styled-components'
import {Link} from "react-router-dom";

export const Container = styled.div`
    position: fixed;
    position: relative;
    z-index: 10;
    top: 0;
    left: 0;
    background-color: #fff;
    display: flex;
    align-items: center;
    justify-content: space-around;
    box-shadow: 0 1px 0 0 rgba(33, 31, 31, 0.5);
    width: 100vw;
`;
export const Logo = styled.img`
    display: flex;
    width: 60px;
    height: 60px;
    left: 70px;
    cursor: pointer;
`;
export const DivSpanNav = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 40px;
    font-family: 'Roboto', sans-serif;
    @media (max-width: 730px){
        display: none;
    }
`;
export const LinkStyled = styled(Link)`
    border: none;
    background-color: #fff;
    cursor: pointer;
    text-decoration: none;
    color: black;

    &:hover {
        color: #015383;
    }
`;
export const Divisao = styled.div`
    @media (min-width: 730px){
        display: none;
    }
`;
