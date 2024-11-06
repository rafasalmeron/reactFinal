import styled  from 'styled-components';
import React from 'react';
import {createTheme } from "@mui/material/styles";
import {Button} from "@mui/material" ;


export const theme = createTheme({
  palette: {
    primary: {
      main: "#fafafa",
    },
    secondary: {
      main: "#440a51",
    },
  },

  transitions: {
    easing: {
      easeInOut: "cubic-bezier(0.4, 0.0, 0.2, 1)",
    },
    duration: {
      shortest: 150,
      shorter: 200,
      short: 250,
      standard: 300,
      complex: 375,
      enteringScreen: 225,
      leavingScreen: 195,
    },
  },
});


export const LinkStyled  = styled(Button)(({ theme }) => ({
  backgroundColor: "#274c77",
  color: "#fafafa",
  width: "80%",
  height: "30px",
  border: "none",
  borderRadius: "15px",
  display: "flex",
  justifyContent: "center",
  alignSelf:"center",
  cursor: "pointer",
  // transition: theme.transitions.createTheme(["background-color", "transform"], {
  //   duration: "0.3s", 
  // }),
  
  "&:hover": {
    backgroundColor: "#274c77", 
    color:"#fafafa",
    transform: "scale(1.05)", 
  },
  "&:active": {
    transform: "scale(0.95)", 
  },
}));

export const CardsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly; 
  gap: 30px;
  padding-bottom: 50px;
`;

export const CardContainer = styled.div`

  border-left: 1px solid #ddd;
  border-right: 1px solid #ddd;
  display: flex;
  flex-direction: column;
  border-radius: 0px;
  padding: 20px;
  background-color: #fff;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  text-align: center;
  max-width: 200px;
  margin: 10px;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 10px;
  margin-top: 100px;
`;

export const CardImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 8px;
`;

export const CardTitle = styled.h3`
  font-size: 1.5rem;
  margin: 12px 0;
  color: #333;
`;

export const CardDescription = styled.p`
  font-size: 1rem;
  color: #666;
  margin:8px 0;
`;

export const CardValue = styled.h3`
font-size: 1.2rem;
color:#007bff;
margin-top:16px;
`

const ComponentsCard = ({ title, description, image }) => {
  return (
    <CardContainer>
      {image && <CardImage src={image} alt={title} />}
      <CardTitle>{title}</CardTitle>
      <CardDescription>{description}</CardDescription>
    </CardContainer>
  );
};

export default ComponentsCard;
