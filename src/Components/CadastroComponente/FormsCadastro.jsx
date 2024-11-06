import {ContentForm, ContentForm2, H1} from "./styled.jsx";
import {Box, Button, FormControl, IconButton, Input, InputAdornment, InputLabel, TextField} from "@mui/material";
import {Visibility, VisibilityOff} from "@mui/icons-material";
import React, {useEffect} from "react";
import {makeRequest} from "../../services/apiService.jsx";
import {formatarCep, formatarCpf, formatarTelefone} from "./formatarInput.jsx";
import {useClientes} from "./Methods.jsx";

function FormsCadastro (){
    const [showPassword, setShowPassword] = React.useState(false);

    const {
        //clientes,
        setClientes,
        novoCliente,
        setNovoCliente,
        handleAdicionarCliente,
        isEditing
    } = useClientes();

    useEffect(() => {
        const fetchClientes = async () => {
            try {
                const clienteData = await makeRequest('/clientes', 'get');
                setClientes(clienteData)
            } catch (error) {
                console.error('Erro ao buscar clientes:', error);
            }
        };
        fetchClientes();
    }, []);

    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleMouseDownPassword = (event) => event.preventDefault();
    const handleMouseUpPassword = (event) => event.preventDefault();

    return (
        <ContentForm2>
            <H1>Crie uma conta</H1>
            <p>Insira seus dados</p>
            <Box
                component="form"
                sx={{'& > :not(style)': {m: 1, width: '25ch'}}}
                noValidate
                autoComplete="off"
            >
                <ContentForm>
                    <TextField
                        sx={{width: '220px'}}
                        id="standard-basic"
                        label="Nome"
                        variant="standard"
                        value={novoCliente.nome}
                        onChange={(e) => setNovoCliente({...novoCliente, nome: e.target.value})}
                    />
                    <TextField
                        sx={{width: '220px'}}
                        id="standard"
                        label="Email or Telefone"
                        variant="standard"
                        value={novoCliente.email}
                        onChange={(e) => setNovoCliente({...novoCliente, email: e.target.value})}
                    />
                    <TextField
                        sx={{width: '220px'}}
                        label="CPF"
                        variant="standard"
                        value={novoCliente.cpf}
                        onChange={(e) => setNovoCliente({
                            ...novoCliente,
                            cpf: formatarCpf(e.target.value)
                        })}
                    />
                    <TextField
                        sx={{width: '220px'}}
                        label="Telefone"
                        variant="standard"
                        value={novoCliente.telefone}
                        onChange={(e) => setNovoCliente({
                            ...novoCliente,
                            telefone: formatarTelefone(e.target.value)
                        })}
                    />
                    <TextField
                        sx={{width: '220px'}}
                        label="CEP"
                        variant="standard"
                        value={novoCliente.cep}
                        onChange={(e) => setNovoCliente({
                            ...novoCliente,
                            cep: formatarCep(e.target.value)
                        })}
                    />
                    <FormControl sx={{m: 1, width: '25ch'}} variant="standard">
                        <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
                        <Input
                            id="standard-adornment-password"
                            type={showPassword ? 'text' : 'password'}
                            value={novoCliente.senha}
                            onChange={(e) => setNovoCliente({...novoCliente, senha: e.target.value})}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label={showPassword ? 'hide the password' : 'display the password'}
                                        onClick={handleClickShowPassword}
                                        onMouseDown={handleMouseDownPassword}
                                        onMouseUp={handleMouseUpPassword}
                                    >
                                        {showPassword ? <VisibilityOff/> : <Visibility/>}
                                    </IconButton>
                                </InputAdornment>
                            }
                        />
                    </FormControl>
                    <Button
                        sx={{width: '220px'}}
                        variant="contained"
                        onClick={handleAdicionarCliente}
                    >
                        {isEditing ? 'Atualizar Cliente' : 'Adicionar Cliente'}
                    </Button>
                </ContentForm>
            </Box>
                {/*{clientes.map((cliente) => (*/}
                {/*    <div*/}
                {/*        key={cliente.id}*/}
                {/*    >*/}
                {/*        <p >{cliente.nome}</p>*/}
                {/*        <p>{cliente.senha}</p>*/}
                {/*    </div>*/}
                {/*))}*/}
        </ContentForm2>
    )
}
export default FormsCadastro