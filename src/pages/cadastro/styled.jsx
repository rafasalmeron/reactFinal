import styled from 'styled-components';

export const ConteinerCadastro = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    height: 100vh;
    border-radius: 10px;
    gap: 100px;
    @media (max-width: 1020px) {
        flex-direction: column;
        gap: 0;
    }
    font-family: 'Roboto', sans-serif;
    
`
export const ImagemCadastro = styled.img`
    width: 100%;
    @media (max-width: 1130px) {
        width: 350px;
    }
`



