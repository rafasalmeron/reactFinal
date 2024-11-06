import styled2 from 'styled-components';
import Button from '@mui/material/Button';
import { purple, blue } from '@mui/material/colors';
import { styled } from '@mui/material/styles';


export const DivContainer = styled2.div`
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

