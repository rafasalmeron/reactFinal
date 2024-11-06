import React from 'react';
import {CardContainer,CardImage,CardTitle,CardDescription,CardValue,LinkStyled} from '../ComponentCard/style.jsx';


function ComponentCard({ title, description,image,valor}) {


  return (
    <CardContainer>
      <CardImage src={image} alt={title} /> 
      <CardTitle>{title}</CardTitle>

      <CardDescription>{description}</CardDescription>
      <CardValue>R${valor}</CardValue>
      <LinkStyled to={"/Carrinho"} >Comprar</LinkStyled>
    </CardContainer>
  );
} 

export default ComponentCard;