import {Container, Losangos} from "./styled.jsx";
import losango from "../../assets/losangoAzul.png";

export const Loader = () => {
    return (
        <Container>
            <Losangos>
                <img src={losango} alt="losango1" className="losango1" />
                <img src={losango} alt="losango2" className="losango2" />
                <img src={losango} alt="losango3" className="losango3" />
                <img src={losango} alt="losango4" className="losango4" />
            </Losangos>
        </Container>
    );
}