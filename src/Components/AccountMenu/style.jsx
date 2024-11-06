import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;

  @media (max-width: 768px) {
    justify-content: flex-start;
  }
  
  @media (max-width: 480px) {
    padding: 0 10px;
  }
`;
