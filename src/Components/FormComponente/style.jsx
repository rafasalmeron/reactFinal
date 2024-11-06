import styled2 from 'styled-components';
import Button from '@mui/material/Button';
import { purple, blue } from '@mui/material/colors';
import { styled } from '@mui/material/styles';

export const Container = styled2.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 100vh;
    
    @media (max-width: 320px) {
        flex-direction: column;
        padding: 10px;
    }

    @media (min-width: 321px) and (max-width: 768px) { 
        flex-direction: column;
        padding: 20px;
    }

    @media (min-width: 769px) and (max-width: 1024px) {
        flex-direction: column;
        padding: 30px;
    }
`;
export const CaixaLogin = styled2.form`
    display: flex;
    flex-direction: column;
    height: 50vh;
    width: 90%; 
    max-width: 400px; 
    gap: 40px;
    align-items: center; 
    justify-content: center;

    @media (max-width: 320px) {
        height: auto; 
    }

    @media (min-width: 321px) and (max-width: 768px) {
        height: auto; 
    }

    @media (min-width: 769px) and (max-width: 1024px) {
        height: auto; 
    }
`;

export const DivLogin = styled2.div`
    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width: 320px) {
        width: 100%; 
    }
`;

export const ImagemLogin = styled2.img`
    height: auto; 
    width: 100%; 
    max-height: 50vh; 

    @media (max-width: 320px) {
        max-height: 30vh; 
        padding-bottom: 40px;
    }
    @media (max-width: 768px) {
        max-height: 30vh; 
        padding-bottom: 40px;
    }
    @media (max-width: 1024px) {
        max-height: 30vh; 
        padding-bottom: 40px;
    }
`;

export const DivCadastro = styled2.div`
    display: flex;
    gap: 10px;
    font-family: 'Roboto', sans-serif;
`;

export const ColorButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText(purple[500]),
    backgroundColor: blue[900],
    '&:hover': {
      backgroundColor: blue[800],
    },
}));

export const Titulo = styled2.h1`
    font-family: 'Roboto', sans-serif;

    @media (max-width: 320px) {}

    @media (min-width: 321px) and (max-width: 768px) {}
`;

export const LinkCadastro = styled2.a`
    text-decoration: none;
    &:visited {
        color: #0D47A1; 
    }
`;
