
import styled from  'styled-components';
import React from 'react';

 const SectionLinks = styled.section`
    display: flex;
    flex-direction: column;
    align-items: flex-start; 
    padding: 0 20px; 
    box-shadow: 0.5px 0 0 0;

    a {
        text-decoration: none;
        color: #333;
        margin: 10px 0;
        padding: 5px 10px;
        border-radius: 5px;

        transition: background-color 0.3s, border-color 0.3s;
        &:hover {
            background-color: #f0f0f0;
            border-color: #ccc;
        }
    }
`;
export default SectionLinks;

