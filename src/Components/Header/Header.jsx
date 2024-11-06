import  logo  from '../../assets/LogoImagemCortada.jpeg';
import {Logo, Container, DivSpanNav, Divisao, LinkStyled} from './style'
import { Divider } from "@mui/material";
import Box from '@mui/material/Box';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import SearchIcon from '@mui/icons-material/Search';
import {ModalMenu} from "../ModalMenu/ModalMenu.jsx";
import AccountMenu from '../../Components/AccountMenu/index.jsx';

export const Header = () => {
  return (
    <Container>
        <LinkStyled to={"/home"} ><Logo src={ logo } alt="Logo do e-commerce" /></LinkStyled>


        <Box sx={{ '& > :not(style)': { m: 1 } }}>
            <FormControl variant="standard">
                <InputLabel htmlFor="input-with-icon-adornment">
                    Buscar
                </InputLabel>
                <Input
                    id="input-with-icon-adornment"
                    endAdornment={
                        <InputAdornment position="end">
                            <SearchIcon />
                        </InputAdornment>
                    }
                />
            </FormControl>
        </Box>

        <DivSpanNav>
            <LinkStyled to={"/home"} ><strong>Home</strong></LinkStyled>
            <LinkStyled to={"/sobre"}><strong>Sobre</strong></LinkStyled>
            <LinkStyled to={"/myaccount"}><strong>Minha Conta</strong></LinkStyled>
            <LinkStyled to={"/cadastro"}><strong>Cadastro</strong></LinkStyled>
            <LinkStyled to={"/login"}><strong>Login</strong></LinkStyled>
        <AccountMenu />
        </DivSpanNav>

        <Divisao>
            <ModalMenu />
            <Divider />
        </Divisao>
    </Container>
  );
};
