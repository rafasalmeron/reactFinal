import {makeRequest} from "../../services/apiService.jsx";
import {useState} from "react";

export const useClientes = () => {
    const [isEditing, setIsEditing] = useState(false);
    const [clientes, setClientes] = useState([]);
    const [novoCliente, setNovoCliente] = useState({nome: '', email: '', telefone: '', cpf: '', imagem: '', cep: ''});

    const handleAdicionarCliente = async () => {
        try {
            if (isEditing) {
                await makeRequest(`/clientes/${novoCliente.id}`, 'put', novoCliente);
                setClientes((prevClientes) =>
                    prevClientes.map((cliente) => (cliente.id === novoCliente.id ? novoCliente : cliente))
                );
                setIsEditing(false);
            } else {
                const novoClienteData = await makeRequest('/clientes/criar', 'post', novoCliente);
                setClientes([...clientes, novoClienteData]);
                alert('Cadastro criado com sucesso!');
            }
            setNovoCliente({nome: '', senha: '', email: '', telefone: '', cpf: '', imagem: '', cep: ''});
        } catch (error) {
            alert("Verifique os campos:", error.message)
            console.error('Erro ao adicionar ou editar cliente:', error);
        }

    };

    const handleEditarCliente = (cliente) => {
        setNovoCliente(cliente);
        setIsEditing(true);
    };

    const handleDeletarCliente = async (id) => {
        try {
            await makeRequest(`/clientes/${id}`, 'delete');
            setClientes(clientes.filter((cliente) => cliente.id !== id));
        } catch (error) {
            console.error('Erro ao deletar cliente:', error);
        }
    };

    return {clientes, setClientes, novoCliente, setNovoCliente, handleAdicionarCliente, handleEditarCliente, handleDeletarCliente};
}
// const [clientes, setClientes] = useState([]);
// const [novoCliente, setNovoCliente] = useState({ nome: '', email: '', telefone: '', cpf: '', imagem: '', cep: '' });
//
// export const handleAdicionarCliente = async () => {
//     try {
//         if (isEditing) {
//             await makeRequest(`/clientes/${novoCliente.id}`, 'put', novoCliente);
//             setClientes((prevClientes) =>
//                 prevClientes.map((cliente) => (cliente.id === novoCliente.id ? novoCliente : cliente))
//             );
//             setIsEditing(false);
//         } else {
//             const novoClienteData = await makeRequest('/clientes/criar', 'post', novoCliente);
//             setClientes([...clientes, novoClienteData]);
//             alert('Cadastro criado com sucesso!');
//         }
//         setNovoCliente({ nome: '', senha: '', email: '', telefone: '', cpf: '', imagem: '', cep: '' });
//     } catch (error) {
//         alert("Verifique os campos:", error.message)
//         console.error('Erro ao adicionar ou editar cliente:', error);
//     }
//
// };
//
// export const handleEditarCliente = (cliente) => {
//     setNovoCliente(cliente);
//     setIsEditing(true);
// };
//
// export const handleDeletarCliente = async (id) => {
//     try {
//         await makeRequest(`/clientes/${id}`, 'delete');
//         setClientes(clientes.filter((cliente) => cliente.id !== id));
//     } catch (error) {
//
//         console.error('Erro ao deletar cliente:', error);
//     }
// };