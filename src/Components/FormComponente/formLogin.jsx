import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Container,
  CaixaLogin,
  DivLogin,
  ImagemLogin,
  DivCadastro,
  Titulo,
  ColorButton,
  LinkCadastro,
} from "./style";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Input from "@mui/material/Input";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import login from "../../assets/login.svg";
import {useClientes} from "../CadastroComponente/Methods.jsx";
import {makeRequest} from "../../services/apiService.jsx";
import loginAction from "../AuthProvider/authProvider.jsx"



export const FormLogin = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [loginValue, setLoginValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [error, setError] = useState("");
  const [clienteLogado, setClienteLogado] = useState("");
  const {
    clientes,
    setClientes
} = useClientes();



  const navigate = useNavigate();

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  useEffect(() => {
    const fetchClientes = async () => {
        try {
            const clienteData = await makeRequest('/clientes', 'get');
            setClientes(clienteData);
        } catch (error) {
            console.error('Erro ao buscar clientes:', error);
        }
    };
    fetchClientes();
}, []);

  const handleLogin = () => {
    // clientes.map((cliente) => {
    //     if (cliente.login === loginValue && cliente.senha === passwordValue) {
    //         console.log('entrou no botão')
    //       return navigate("/home");
    //     } else {
    //         console.log('não entrou no botão :(')
    //      return setError("Login ou senha inválidos!");
    //     }
    //   });
    // };

    for(let i = 0; i < clientes.length; i++) {
        
        if (clientes[i].email === loginValue && clientes[i].senha === passwordValue) {
                  return navigate("/home"); 

                } 
        // if (i === cliente.length) {
        //     alert("credenciais não encontradas")
        // }
    }
  }

  const verificaEstado = () => {

  }

  return (
    <Container>
      <DivLogin>
        <ImagemLogin src={login} alt="Login" />
      </DivLogin>
      <CaixaLogin>
        <Titulo>Login</Titulo>
        <TextField
          id="standard-basic"
          label="Login"
          variant="standard"
          value={loginValue}
          onChange={(e) => setLoginValue(e.target.value)}
          required
        />
        <Box sx={{ display: "flex", flexWrap: "wrap" }}>
          <FormControl sx={{ m: 1, width: "25ch" }} variant="standard" required>
            <InputLabel htmlFor="standard-adornment-password">
              Password
            </InputLabel>
            <Input
              id="standard-adornment-password"
              type={showPassword ? "text" : "password"}
              value={passwordValue}
              onChange={(e) => setPasswordValue(e.target.value)}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label={
                      showPassword
                        ? "hide the password"
                        : "display the password"
                    }
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                  >
                    {showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>
        </Box>
        {error && <span style={{ color: "red" }}>{error}</span>}
        <ColorButton onClick={handleLogin} variant="contained" size="large">
          Entrar
        </ColorButton>
        <DivCadastro>
          <span>Não tem conta?</span>
          <Link to="/cadastro" style={{ textDecoration: "none" }}>
            <LinkCadastro href="">Clique aqui!</LinkCadastro>
          </Link>
        </DivCadastro>
      </CaixaLogin>
    </Container>
  );
};
