import {
    A,
    AppStore,
    Aside,
    ConteinerFooter,
    ContentApp,
    ContentFooter, ContentLinks, ContentQrApp,
    ContentSocial, ContentSocial2, Divs,
    IconSocial,
    P,
    QrCode
} from "./styled.jsx";
import {FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput} from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
import linkedin from "../../assets/linkedin.svg";
import facebook from "../../assets/facebook.svg";
import instagram from "../../assets/instagram.svg";
import twitter from "../../assets/twitter.svg";
import app from "../../assets/app-store-png-logo.png";
import qrcode from "../../assets/qr-code.png"

export const Footer = () => {
    return (
        <ConteinerFooter>
            <ContentFooter>
                <Aside>
                    <h3>Exclusivo</h3>
                    <P><strong>Subscribe</strong></P>
                    <P>Ganhe 10% de desconto!</P>
                    <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
                        <InputLabel htmlFor="input-with-icon-adornment">Envie seu e-mail</InputLabel>
                        <OutlinedInput
                            sx={{ m: 1, height: '40px' }}
                            id="input-with-icon-adornment"
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton position="end">
                                        <SendIcon />
                                    </IconButton>
                                </InputAdornment>
                            }
                            label="E-mail"
                        />
                    </FormControl>
                </Aside>
                <Divs>
                    <h4>Suporte</h4>
                    <P>Endereço</P>
                    <P>email</P>
                    <P>telefone</P>
                </Divs>
                <Divs>
                    <h4>Conta</h4>
                    <P>Minha Conta</P>
                    <P>Login / Cadastro</P>
                    <P>Carrinho</P>
                    <P>Lista de Desejos</P>
                    <P>Shop?</P>
                </Divs>
                <Divs>
                    <h4>Links rápidos</h4>
                    <P>Politica de Privacidade</P>
                    <P>Termos de Uso</P>
                    <P>FAQ</P>
                    <P>Contact</P>
                </Divs>
                <ContentLinks>
                    <h4>Download App</h4>
                    <p>Save $3 with App New User Only</p>
                    <ContentQrApp>
                        <div>
                            <QrCode src={qrcode}/>
                        </div>
                        <ContentApp>
                            <AppStore src={app}/>
                        </ContentApp>
                    </ContentQrApp>
                    <ContentSocial>
                        <A><IconSocial src={facebook}/></A>
                        <A><IconSocial src={twitter}/></A>
                        <A><IconSocial src={instagram}/></A>
                        <A><IconSocial src={linkedin}/></A>
                    </ContentSocial>
                </ContentLinks>
                <ContentSocial2>
                    <A><IconSocial src={facebook}/></A>
                    <A><IconSocial src={twitter}/></A>
                    <A><IconSocial src={instagram}/></A>
                    <A><IconSocial src={linkedin}/></A>
                </ContentSocial2>
            </ContentFooter>
            <div>
                © Copyright Healthy Haven 2024. All Rights Reserved
            </div>
        </ConteinerFooter>
    )
}