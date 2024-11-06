import { useEffect, useState } from "react";
import { makeRequest } from "../services/apiService";

const Produtos = () => {
    const [categorias, setCategorias] = useState([]);
    const [novoProduto, setNovoProduto] = useState({ id: 0, valor: 0, nome: '', categoriaId: 0, imagem: '' });
    const [novaCategoria, setNovaCategoria] = useState('');
    const [filtroCategoria, setFiltroCategoria] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const categoriasData = await makeRequest('/categorias', 'get');
                setCategorias(categoriasData);
                console.log('Dados das categorias com produtos:', categoriasData);
            } catch (error) {
                console.error('Erro ao buscar categorias com produtos:', error);
            }
        };
        fetchData();
    }, []);

    const handleDeletarProduto = async (id) => {
        try {
            await makeRequest(`/produtos/${id}`, 'delete');
            const categoriasAtualizadas = categorias.map(categoria => ({
                ...categoria,
                produto: categoria.produto.filter(produto => produto.id !== id)
            }));
            setCategorias(categoriasAtualizadas);
        } catch (error) {
            console.error('Erro ao deletar produto:', error);
        }
    };

    const handleAdicionarProduto = async () => {
        try {
            const categoriaSelecionada = categorias.find(categoria => categoria.id === novoProduto.categoriaId);
            if (!categoriaSelecionada) {
                console.error('Categoria não encontrada');
                return;
            }
            if (novoProduto.id !== 0) {
                const produtoEditado = await makeRequest(`/produtos/${novoProduto.id}`, 'put', novoProduto);
                const categoriasAtualizadas = categorias.map(categoria =>
                    categoria.id === novoProduto.categoriaId
                        ? {
                            ...categoria,
                            produto: categoria.produto.map(p =>
                                p.id === novoProduto.id ? produtoEditado : p
                            )
                        }
                        : categoria
                );
                setCategorias(categoriasAtualizadas);
            } else {
                const novoProdutoData = await makeRequest('/produtos/criar', 'post', novoProduto);
                const categoriasAtualizadas = categorias.map(categoria =>
                    categoria.id === novoProduto.categoriaId
                        ? { ...categoria, produto: [...categoria.produto, novoProdutoData] }
                        : categoria
                );
                setCategorias(categoriasAtualizadas);
            }
            setNovoProduto({ id: 0, valor: 0, nome: '', categoriaId: 0, imagem: '' });
        } catch (error) {
            console.error('Erro ao adicionar ou editar produto:', error);
        }
    };

    const handleAdicionarCategoria = async () => {
        if (!novaCategoria.trim()) {
            console.error('Erro: Nome da categoria não pode estar vazio');
            return;
        }
        try {
            const novaCategoriaData = await makeRequest('/categorias/criar', 'post', { nome: novaCategoria });
            setCategorias([...categorias, novaCategoriaData]);
            setNovaCategoria('');
        } catch (error) {
            console.error('Erro ao criar categoria:', error);
        }
    };

    const categoriasFiltradas = filtroCategoria
        ? categorias.filter(categoria => categoria.id === filtroCategoria)
        : categorias;
    console.log(categoriasFiltradas)
    return (
        <div>
            {categoriasFiltradas.map((categoria) =>
                categoria.produto.map((produto) => (
                    <div key={produto.id} >

                        <img src={produto.imagem} alt={produto.nome}
                             />
                        <h2 >{produto.nome}</h2>
                        <p >Valor: R$ {produto.valor}</p>
                        <p >Categoria: {categoria.nome}</p>
                        <button
                            onClick={() => handleDeletarProduto(produto.id)}
                        >
                            Deletar
                        </button>
                    </div>
                ))
            )}
        </div>
    );
};
export default Produtos;