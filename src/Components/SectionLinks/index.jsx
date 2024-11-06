import React from 'react';
import SectionLinks from '../SectionLinks/style.jsx';
import styled from 'styled-components';

const StyledLink = styled.a`
  text-decoration: none;    
`;

const SectionLinksContent = () => {
    return (
        <SectionLinks>
            <a href="#">
            <p>Moda Feminina</p>
            </a>
            <a href="#">
            <p>Moda Masculina</p>
            </a>
            <a href="#">
            <p>Artigos Esportivos</p>
            </a>
            <a href="#">
            <p>Tênis</p>
            </a>
            <a href="#">
            <p>Suplementos</p>
            </a>
        </SectionLinks>
    );
};

export default SectionLinksContent;
