import Banner from "../../assets/BANNER.png";
import { ContainerHome,FlexContainer,ResponsiveImage,Container,H3,ContainerCarousel} from './style';
import SectionLinks from'../../components/SectionLinks/index.jsx';
import ComponentCard from '../../components/ComponentCard';
import {cardData} from '../../components/ComponentCard/data.jsx';
import {CardsWrapper} from '../../components/ComponentCard/style.jsx';

import Carousel from 'react-bootstrap/Carousel';
import Banner2 from '../../assets/BANNER 2.png';
import Banner3 from '../../assets/BANNER 3.png';


import { ShoppingCart } from "../Carrinho/index.jsx";
const Home= () => {
   


    return (
    <Container>
        <ContainerHome>
            <FlexContainer> 
                <ContainerCarousel>
                    <Carousel>
                   
                        <Carousel.Item>
                            <ResponsiveImage src={Banner} alt="First slide" />
                        
                        </Carousel.Item>
                        <Carousel.Item>
                            <ResponsiveImage src={Banner2} alt="Second slide" />
                        
                        </Carousel.Item>
                        <Carousel.Item>
                            <ResponsiveImage src={Banner3} alt="Third slide" />
                       
                        </Carousel.Item>
                    
                    </Carousel>
                </ContainerCarousel>
            </FlexContainer>
        </ContainerHome>
    <div>

        <H3>
        🌟 Mega Promoção de Final de Ano! 🌟
        </H3>
        <h5>
            
        </h5>
        <CardsWrapper>  

            <SectionLinks/> 
            {cardData.map((produtos) => (
           

            <ComponentCard
            

                key={produtos.id}
                title={produtos.title}
                description={produtos.description}
                image={produtos.image}
                valor={produtos.valor}

                />
            ))}
        <ComponentCard produtos={cardData} onAddItem={ShoppingCart.addItemHandler}/>

        </CardsWrapper> 
    </div>
</Container>
);
}
export default Home;