import { get, post, del } from "./api";

// Add course to cart
export const addToCart = async (courseId) => {
  const token = localStorage.getItem("authToken");
  if (!token) {
    throw new Error("Please login to add courses to cart");
  }

  try {
    const response = await post("cart/add", { course_id: courseId }, token);
    return response;
  } catch (error) {
    console.error("Error adding to cart:", error);
    throw error;
  }
};

// Get cart items
export const getCartItems = async () => {
  const token = localStorage.getItem("authToken");
  if (!token) {
    return { cart_items: [] };
  }

  try {
    const response = await get("cart/view", token);
    return response;
  } catch (error) {
    console.error("Error fetching cart items:", error);
    return { cart_items: [] };
  }
};

// Remove course from cart
export const removeFromCart = async (courseId) => {
  const token = localStorage.getItem("authToken");
  if (!token) {
    throw new Error("Please login to manage cart");
  }

  try {
    const response = await del(`cart/deleteCourse/${courseId}`, token);
    return response;
  } catch (error) {
    console.error("Error removing from cart:", error);
    throw error;
  }
};

// Clear entire cart
export const clearCart = async () => {
  const token = localStorage.getItem("authToken");
  if (!token) {
    throw new Error("Please login to manage cart");
  }

  try {
    const response = await del("cart/clear", token);
    return response;
  } catch (error) {
    console.error("Error clearing cart:", error);
    throw error;
  }
};

// Checkout and create order
export const checkout = async () => {
  const token = localStorage.getItem("authToken");
  if (!token) {
    throw new Error("Please login to checkout");
  }

  try {
    const response = await post("orders/checkout", {}, token);
    return response;
  } catch (error) {
    console.error("Error during checkout:", error);
    throw error;
  }
};
