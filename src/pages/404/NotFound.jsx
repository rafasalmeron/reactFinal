import './index.css'
import {Body, H1, LinkStyled, Svg} from "./styled.jsx";

function NotFound() {
    return (
        <Body>
            <div className="content">
                <Svg viewBox="0 0 950 300">
                    <symbol id="s-text">
                        <text textAnchor="middle" x="50%" y="50%">404</text>
                    </symbol>
                    <g className="g-ants">
                        <use xlinkHref="#s-text" className="text"></use>
                        <use xlinkHref="#s-text" className="text"></use>
                        <use xlinkHref="#s-text" className="text"></use>
                        <use xlinkHref="#s-text" className="text"></use>
                        <use xlinkHref="#s-text" className="text"></use>
                    </g>
                </Svg>
                <H1>Page Not Found</H1>
                <LinkStyled to={'/home'}>Voltar</LinkStyled>
            </div>
        </Body>
    )
}
export default NotFound