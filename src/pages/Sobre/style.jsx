import styled from 'styled-components';

export const Img = styled.img`
    width: 100%; 
    height: 400px; 
    object-fit: cover; 
    object-position: center; 
`;

export const IMG = styled.img`
   display: block;
   max-width: 50%;
   height: 300px;
   margin: 20px auto;
   border-radius: 50px;
   margin-top: 100px;
`;

export const Container = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: flex-start; 
   align-items: center;
   min-height: 100vh; 
   width: 100%;
   max-width: 600px; 
   text-align: center;
   margin: 0 auto;
   padding: 20px;
   box-sizing: border-box;

   @media (max-width: 768px) {
      padding: 15px;
      max-width: 100%;
   }

   @media (max-width: 480px) {
      padding: 10px;
   }
`;

export const H1 = styled.h1`
   font-size: 24px;
   color: #666;
   margin-bottom: 15px;

   @media (max-width: 768px) {
      font-size: 20px; 
   }

   @media (max-width: 480px) {
      font-size: 18px; 
   }
`;

export const H4 = styled.h4`
   font-size: 40px;
   color: #88CBF8;
   margin-bottom: 20px;

   @media (max-width: 768px) {
      font-size: 30px; 
   }

   @media (max-width: 480px) {
      font-size: 24px; 
   }
`;

export const CarouselWrapper = styled.div`
    display: flex;
    justify-content: center; 
    align-items: center; 
    width: 100%;
    padding: 20px;

    .carousel {
        width: 80%; 
        max-width: 600px; 
        border-radius: 10px; 
        overflow: hidden; 
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); 
    }

    .carousel-control-prev-icon,
    .carousel-control-next-icon {
        background-color: #000;
        border-radius: 50%; 
        width: 40px;
        height: 40px;
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3); 
    }

    .carousel-indicators li {
        background-color: #000; 
        border-radius: 50%; 
    }

    .carousel-indicators .active {
        background-color: #88CBF8; 
    }

    @media (max-width: 768px) {
        .carousel {
            width: 90%; 
        }
    }

    @media (max-width: 480px) {
        .carousel {
            width: 100%;
        }
    }
`;
