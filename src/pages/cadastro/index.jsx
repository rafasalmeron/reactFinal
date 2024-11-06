import {ConteinerCadastro, ImagemCadastro} from "./styled.jsx";
import imagemCadastro  from "../../assets/cadastro-clientes_2.png"
import FormsCadastro from "../../components/CadastroComponente/FormsCadastro.jsx";

function Cadastro() {
    return (
        <ConteinerCadastro>
                <div>
                    <ImagemCadastro src={ imagemCadastro }/>
                </div>
            <FormsCadastro />
        </ConteinerCadastro>
    )
}
export default Cadastro