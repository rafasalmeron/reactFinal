export const initialState = {
    items: [],
    totalAmount: 0
}

export function cartReducer(state, action) {
    switch (action.type) {
        case 'ADD_ITEM': {
            const updatedItems = state.items.map(item =>
                item.id === action.item.id
                ? { ...item, quantity: item.quantity + 1
                    } : item
            );

            const itemExists = state.items.some(item => item.id === action.item.id);
            if (!itemExists) {
                updatedItems.push({
                ...action.item,
                quantity: 1
            })}

            const updatedTotalAmount = state.totalAmount + action.item.price;
            return {
                ...state,
                items: updatedItems,
                totalAmount: updatedTotalAmount
            }
        }

        case 'UPDATE_QUANTITY': {
            const updatedItems = state.items.filter(item => item.id !== action.id);
            const updatedTotalAmount = state.items.reduce((sum, item) => {
                return sum + item.price * item.quantity;
            }, 0);
            return {
                ...state,
                items: updatedItems,
                totalAmount: updatedTotalAmount
            }
        }
        case 'REMOVE_ITEM': {
            const filteredItems = state.items.filter(item =>
                item.id !== action.id);
            const itemToRemove = state.items.find(item => item.id === action.id);
            const decresedTotalAmount = state.totalAmount - itemToRemove.price;
            return {
                ...state,
                items: filteredItems,
                totalAmount: decresedTotalAmount,
            }
        }
        case 'CLEAR_CART':
            return initialState;
        case 'DEFAULT':
            return state;
    }
}