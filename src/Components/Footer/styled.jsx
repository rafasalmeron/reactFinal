import styled from "styled-components";

export const ConteinerFooter = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #88CBF8;
    color: #bae2ff;
    height: 280px;
    font-family: 'Roboto', sans-serif;
    width: 100%;
    padding: 20px 20px 5px 20px;
    @media (max-width: 930px){
        height: 100px;
    }
`
export const ContentFooter = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    height: 100%;
    color: #676666;
    font-family: 'Roboto', sans-serif;
    @media (min-width: 930px){
        width: 100%;
    }
    
`
export const Aside = styled.aside`
    display: flex;
    flex-direction: column;
    color: #676666;
    font-family: 'Roboto', sans-serif;
    text-align: center;
    @media (max-width: 930px){
        display: none;
    }
`
export const Divs = styled.div`
    padding-right: 15px;
    @media (max-width: 930px){
        display: none;
    }
`

export const P = styled.p`
    cursor: pointer;
    &:hover{
        color:red;
    }
`
export const ContentLinks = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    @media (max-width: 930px){
        display: none;
    }
`

export const ContentQrApp = styled.div`
    display: flex;
    width: 100%;
`
export const ContentApp = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
`
export const AppStore = styled.img`
    width: 120px;
    height: 100%;
`
export const ContentSocial = styled.div`
    display: flex;
    width: 100%;
    gap: 30px;
`
export const A = styled.a`
    text-decoration: none;
    cursor: pointer;
`
export const IconSocial = styled.img`
    width: 30px;
    height: 30px;
    
`
export const QrCode = styled.img`
    width: 100px;
    background-color: #fbfbfb;
    padding: 2px;
`
export const ContentSocial2 = styled.div`
    display: flex;
    width: 100%;
    gap: 30px;
    @media (min-width: 929px){
        display: none;
    }
`