import { createContext, useReducer, useEffect } from "react";
import { getCartItems } from "../utils/cartApi";

const CartContext = createContext();

const initialState = {
  items: [],
  total: 0,
  itemCount: 0,
  discount: 0,
  promoCode: "",
  loading: false,
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case "SET_LOADING":
      return {
        ...state,
        loading: action.payload,
      };

    case "LOAD_CART_SUCCESS": {
      const cartItems = action.payload;
      const items = cartItems.map((item) => ({
        id: item.course.id,
        cartItemId: item.id,
        name: item.course.title,
        title: item.course.title,
        description: item.course.description,
        category: "Course",
        price: parseFloat(item.course.price),
        image:
          item.course.img || "https://via.placeholder.com/150x100?text=Course",
      }));

      return {
        ...state,
        items,
        itemCount: items.length,
        total: items.reduce((sum, item) => sum + item.price, 0),
        loading: false,
      };
    }

    case "ADD_ITEM": {
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id
      );
      if (existingItem) {
        return state; // Item already exists, don't add duplicate
      }
      const newItems = [...state.items, action.payload];
      return {
        ...state,
        items: newItems,
        itemCount: newItems.length,
        total: newItems.reduce((sum, item) => sum + item.price, 0),
      };
    }

    case "REMOVE_ITEM": {
      const filteredItems = state.items.filter(
        (item) => item.id !== action.payload
      );
      return {
        ...state,
        items: filteredItems,
        itemCount: filteredItems.length,
        total: filteredItems.reduce((sum, item) => sum + item.price, 0),
      };
    }

    case "CLEAR_CART":
      return {
        ...initialState,
      };

    case "APPLY_DISCOUNT":
      return {
        ...state,
        discount: action.payload.discount,
        promoCode: action.payload.promoCode,
      };

    case "CLEAR_DISCOUNT":
      return {
        ...state,
        discount: 0,
        promoCode: "",
      };

    case "SET_ITEMS": {
      const items = action.payload;
      return {
        ...state,
        items,
        itemCount: items.length,
        total: items.reduce((sum, item) => sum + item.price, 0),
      };
    }

    default:
      return state;
  }
};

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  // Load cart data from API
  const loadCart = async () => {
    try {
      dispatch({ type: "SET_LOADING", payload: true });
      const response = await getCartItems();
      dispatch({
        type: "LOAD_CART_SUCCESS",
        payload: response.cart_items || [],
      });
    } catch (error) {
      console.error("Error loading cart:", error);

      // If it's an auth error, clear the cart and possibly logout
      if (
        error.status === 401 ||
        error.message.includes("unauthorized") ||
        error.message.includes("token")
      ) {
        dispatch({ type: "CLEAR_CART" });
        // Optionally clear auth data if token is invalid
        if (localStorage.getItem("authToken")) {
          localStorage.removeItem("authToken");
          localStorage.removeItem("isLoggedIn");
          localStorage.removeItem("userName");
          window.dispatchEvent(
            new CustomEvent("authStateChange", {
              detail: { type: "logout" },
            })
          );
        }
      }

      dispatch({ type: "SET_LOADING", payload: false });
    }
  };

  // Load cart on mount and when auth state changes
  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
    if (isLoggedIn) {
      loadCart();
    } else {
      // Clear cart when user is not logged in
      dispatch({ type: "CLEAR_CART" });
    }
  }, []);

  // Listen for custom auth events and storage changes
  useEffect(() => {
    const handleAuthChange = (e) => {
      if (e.detail.type === "login") {
        loadCart();
      } else if (e.detail.type === "logout") {
        dispatch({ type: "CLEAR_CART" });
      }
    };

    // Also listen for localStorage changes (for cross-tab compatibility)
    const handleStorageChange = (e) => {
      if (e.key === "isLoggedIn") {
        const isLoggedIn = e.newValue === "true";
        if (isLoggedIn) {
          loadCart();
        } else {
          dispatch({ type: "CLEAR_CART" });
        }
      }
    };

    window.addEventListener("authStateChange", handleAuthChange);
    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("authStateChange", handleAuthChange);
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  const addItem = (item) => {
    dispatch({ type: "ADD_ITEM", payload: item });
  };

  const removeItem = (itemId) => {
    dispatch({ type: "REMOVE_ITEM", payload: itemId });
  };

  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };

  const applyDiscount = (discount, promoCode) => {
    dispatch({ type: "APPLY_DISCOUNT", payload: { discount, promoCode } });
  };

  const clearDiscount = () => {
    dispatch({ type: "CLEAR_DISCOUNT" });
  };

  const setItems = (items) => {
    dispatch({ type: "SET_ITEMS", payload: items });
  };

  const refreshCart = () => {
    const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
    if (isLoggedIn) {
      loadCart();
    } else {
      dispatch({ type: "CLEAR_CART" });
    }
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
    refreshCart,
    getFinalTotal,
    // Debug function to manually trigger cart load (useful for testing)
    debugLoadCart: loadCart,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export default CartContext;
