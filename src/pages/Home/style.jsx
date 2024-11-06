import styled from 'styled-components';



export const ContainerHome = styled.div`
  display: flex;
  justify-content: space-between;
  width: 60%;
  height: auto;
  margin:0px; 
  background-color: #88cbf8;
  
  @media (max-width: 768px) {
    flex-direction: column;
    width: 90%; 
  }
`;
export const H3=styled.h3`
  font-size: 2rem; 
  font-weight: bold;
  color:#274c77 ;
  text-align: center;
  margin: 20px 0; 
  padding: 10px; 
  background-color:#88CBF8;
  border-radius: 10px; 
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); 
  text-transform: uppercase; 
  letter-spacing: 2px; 
  font-family:Roboto, 'sans serif'; 
`
export const FlexContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap:30px;
  align-items: center;
  background-color: #88cbf8;
  @media (max-width: 768px) {
    flex-direction: column; 
  }
`;


export const ContainerCarousel =styled.div`
  display: flex;
  background-color: #88cbf8;
  position: relative;
  justify-content: center; 
  align-items: center; 
  width: 1500px;
  padding-top:20px;
  display: flex;
  position: relative;
  z-index: 1; 
`;


export const ResponsiveImage= styled.img`
  display: flex;
  padding-bottom: 100px;
  justify-content:center;
  padding-top: 100px;
  padding-right:20px;
  max-width: 80%;  
  height: 80%;

  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%; 
  }
`;

export const Container=styled.div`
display:flex;
flex-direction: column;

`;

  



