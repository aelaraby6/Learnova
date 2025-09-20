import { createContext, useReducer } from 'react';

const CartContext = createContext();

const initialState = {
  items: [],
  total: 0,
  itemCount: 0,
  discount: 0,
  promoCode: ''
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_ITEM': {
      const existingItem = state.items.find(item => item.id === action.payload.id);
      if (existingItem) {
        return state; // Item already exists, don't add duplicate
      }
      const newItems = [...state.items, action.payload];
      return {
        ...state,
        items: newItems,
        itemCount: newItems.length,
        total: newItems.reduce((sum, item) => sum + item.price, 0)
      };
    }

    case 'REMOVE_ITEM': {
      const filteredItems = state.items.filter(item => item.id !== action.payload);
      return {
        ...state,
        items: filteredItems,
        itemCount: filteredItems.length,
        total: filteredItems.reduce((sum, item) => sum + item.price, 0)
      };
    }

    case 'CLEAR_CART':
      return {
        ...initialState
      };

    case 'APPLY_DISCOUNT':
      return {
        ...state,
        discount: action.payload.discount,
        promoCode: action.payload.promoCode
      };

    case 'CLEAR_DISCOUNT':
      return {
        ...state,
        discount: 0,
        promoCode: ''
      };

    case 'SET_ITEMS': {
      const items = action.payload;
      return {
        ...state,
        items,
        itemCount: items.length,
        total: items.reduce((sum, item) => sum + item.price, 0)
      };
    }

    default:
      return state;
  }
};

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  const addItem = (item) => {
    dispatch({ type: 'ADD_ITEM', payload: item });
  };

  const removeItem = (itemId) => {
    dispatch({ type: 'REMOVE_ITEM', payload: itemId });
  };

  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' });
  };

  const applyDiscount = (discount, promoCode) => {
    dispatch({ type: 'APPLY_DISCOUNT', payload: { discount, promoCode } });
  };

  const clearDiscount = () => {
    dispatch({ type: 'CLEAR_DISCOUNT' });
  };

  const setItems = (items) => {
    dispatch({ type: 'SET_ITEMS', payload: items });
  };

  const getFinalTotal = () => {
    return Math.max(0, state.total - state.discount);
  };

  const value = {
    ...state,
    addItem,
    removeItem,
    clearCart,
    applyDiscount,
    clearDiscount,
    setItems,
    getFinalTotal
  };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;