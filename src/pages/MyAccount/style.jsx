import Styled from 'styled-components'
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import { red, grey } from '@mui/material/colors';

export const Container = Styled.div`
    font-family: 'Roboto', sans-serif;
    display: flex;
    justify-content: center;
    width: 100%;
    height: 100vh;
    padding-top: 100px;

`;

export const Container2 = Styled.div`
    display: flex;
    flex-direction: column;
    padding: 90px;
    box-shadow: 0.5px 0.5px 15px 3px rgba(0, 0, 0, 0.2);
    border-radius: 10px;
    max-height: 650px

`;

export const Container3 = Styled.div`
    display: flex;
    margin-bottom: 20px;
    flex-direction: column;

`;

export const P = Styled.p`
    color: grey;
    &: hover{
    color: red}
    padding-left: 40px; 
       
`;

export const Container4 = Styled.div`
    display: flex;
    flex-direction: column;

`;

export const Container5 = Styled.div`
   padding-right: 300px;
   font-size: 20px;

`;

export const Container6 = Styled.div`
   padding-top: 20px;
   display: flex;
   justify-content: flex-end;

`;

export const ColorButton = styled(Button)(({ theme }) => ({
    backgroundColor: red[900],
    '&:hover': {
      backgroundColor: red[800],
    },

  }));

export const ColorButton1 = styled(Button)(({ theme }) => ({
    color: grey[900]

}));

export const H4 = Styled.h4`
    color: red;   

`;

export const Mudanca = Styled.p`
    font-family: 'Roboto', sans-serif;
    padding: 3px 0;
    font-weight: bold;
`;
