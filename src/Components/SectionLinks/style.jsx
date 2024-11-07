import styled from  'styled-components';

export const SectionLinks = styled.section`
 @media (max-width: 768px) {
  flex-direction: row;
 }
 display: flex;
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


