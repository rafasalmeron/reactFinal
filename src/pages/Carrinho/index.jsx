import { Conteiner, Main } from "./styled.jsx";
import { useReducer } from "react";
import { cartReducer , initialState} from "../../components/reducerManageItem/index.jsx";
export const ShoppingCart = () => {
    
    const [cart, dispatch] = useReducer(cartReducer, initialState);
    console.log("PRODUTO SELECIONADO:" + cart.items);

    const hasCartItems = cart.items.length > 0;

    const addItemHandler = (produto) => {
        dispatch({ type: 'ADD_ITEM', item: produto })
    }

    const handleQuantityChange = (item, newQuantity) => {
        if (item < 1) return dispatch({ type: 'UPDATE_QUANTITY', id: item.id, quantity: newQuantity });
    }

    const removeItemHandler = (id) => {
        dispatch({ type: 'REMOVE_ITEM', id })
    }

    const clearCartHandler = () => {
        dispatch({ type: 'CLEAR_CART' })
    }

    return (
        <Conteiner>
            <h1>Produtos</h1>

                {cart.items.map((item) => (


                    <ComponentCard

                        onClick={() => addItemHandler(item)}
                        key={item.id}
                        title={item.title}
                        description={item.description}
                        image={item.image}
                        valor={item.valor}

                    />
                ))}
            <Main>
                <h2>Carrinho</h2>
                {hasCartItems && (
                    <ul>
                        {cart.items.map(item => (
                            <li key={item.id}>
                                <label>Quantidade:</label>
                                <input
                                    type="number"
                                    value={item.quantity}
                                    onChange={(e) =>
                                        handleQuantityChange(item, parseInt(e.target.value))}
                                />
                                <p>{item.name}</p>
                                <p>{item.price}</p>
                                <p>Subtotal: ${item.price * item.quantity}</p>
                                <button onClick={() => removeItemHandler(item.id)}>Remover</button>
                            </li>
                        ))}
                    </ul>
                )}
                <div>Total: ${cart.totalAmount}</div>
                <button onClick={clearCartHandler}>Limpar Carrinho</button>
            </Main>
        </Conteiner>

    )
}
