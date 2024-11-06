import { Container, Container2, Container3, Container4, Container5, Container6, P, H4, ColorButton1, ColorButton, Mudanca } from "./style"
import {TextField, Stack} from "@mui/material";

function MyAccount() {

    return (
        <Container>

        <Container5>
            <div> 
                <strong>Gerenciamento da Conta</strong>

                <P>Meu Perfil</P>
                <P>Endereço</P>
                <P>Minhas Opções de Pagamento</P>
            
            </div>
        
            <div>
                <strong>Meus Pedidos</strong>

                <P>Minhas Devoluções</P>
                <P>Meus Itens Cancelados</P>
            
            </div>
        
            <div>

                <strong>Minha Lista de Desejos</strong>
            
            </div>
        
        </Container5>
        
        <Container2>

            <H4>Edite seu Perfil</H4>

            <Container3>

            <Container4>
            <Stack spacing={1} direction="row">
                <TextField id="standard-basic" label="Primeiro Nome" variant="standard" />
                <TextField id="standard-basic" label="Sobrenome" variant="standard" />
            </Stack>
            </Container4>

        
                <Container4>
                    <Stack spacing={2} direction="row">
                        <TextField id="standard-basic" label="Email" variant="standard" />
                        <TextField id="standard-basic" label="Endereço" variant="standard" />
                    </Stack>
                </Container4>
        
            </Container3>
            
            <Container4>
                <Mudanca>Mudança de Senha</Mudanca>
                    <Stack spacing={2} direction="column">
                        <TextField id="standard-basic" label="Senha Antiga" variant="standard" />
                        <TextField id="standard-basic" label="Nova Senha" variant="standard" />
                        <TextField id="standard-basic" label="Confirme a Nova Senha" variant="standard" />
                    </Stack>
            </Container4>
        
            <Container6>
                <Stack spacing={2} direction="row">
                    <ColorButton1 variant="text" >Cancelar</ColorButton1>
                    <ColorButton variant="contained">Salvar Mudanças</ColorButton>
                </Stack>
            </Container6>

        </Container2>
        
        </Container>
    )
  }
  
  export default MyAccount
  
