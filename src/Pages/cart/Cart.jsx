import { useState } from "react";
import { useCart } from "../../hooks/useCart";
import {
  removeFromCart,
  clearCart as clearCartAPI,
  checkout,
} from "../../utils/cartApi";
import CartItem from "./CartItem";
import "../../styles/global.css";
import Header from "../../components/Header";

const Cart = () => {
  const {
    items,
    total,
    itemCount,
    discount,
    loading,
    applyDiscount,
    clearDiscount,
    clearCart,
    refreshCart,
    getFinalTotal,
  } = useCart();

  const [promoCodeInput, setPromoCodeInput] = useState("");
  const [isCheckingOut, setIsCheckingOut] = useState(false);

  const handleRemoveItem = async (courseId) => {
    try {
      await removeFromCart(courseId);
      refreshCart(); // Refresh cart data after removing item
      alert("Course removed from cart successfully!");
    } catch (error) {
      console.error("Error removing item:", error);
      alert("Failed to remove course from cart");
    }
  };

  const handleClearCart = async () => {
    if (window.confirm("Are you sure you want to clear your cart?")) {
      try {
        await clearCartAPI();
        refreshCart(); // Refresh cart data after clearing
        alert("Cart cleared successfully!");
      } catch (error) {
        console.error("Error clearing cart:", error);
        alert("Failed to clear cart");
      }
    }
  };

  const handleApplyPromo = (e) => {
    e.preventDefault();
    if (promoCodeInput.toLowerCase() === "save20") {
      applyDiscount(total * 0.2, promoCodeInput); // 20% discount
    } else if (promoCodeInput.toLowerCase() === "save10") {
      applyDiscount(total * 0.1, promoCodeInput); // 10% discount
    } else {
      clearDiscount();
      alert("Invalid promo code");
    }
  };

  const handleCheckout = async () => {
    if (items.length === 0) {
      alert("Your cart is empty");
      return;
    }

    // Check if user is logged in
    const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
    if (!isLoggedIn) {
      alert("Please login to checkout");
      return;
    }

    const finalTotal = getFinalTotal();
    const confirmMessage = `Confirm checkout with ${itemCount} items. Total: $${finalTotal.toFixed(
      2
    )}`;

    if (!window.confirm(confirmMessage)) {
      return;
    }

    try {
      setIsCheckingOut(true);

      // Call checkout API
      const response = await checkout();

      // Clear the cart immediately in the UI for better UX
      clearCart();

      // Also refresh from server after a delay to ensure consistency
      setTimeout(() => {
        refreshCart();
      }, 500); // Small delay to ensure server has processed the order

      // Show success message with order details
      const successMessage =
        `🎉 Order placed successfully!\n\n` +
        `Order ID: #${response.order.id}\n` +
        `Total: $${response.order.total}\n` +
        `Status: ${
          response.order.status.charAt(0).toUpperCase() +
          response.order.status.slice(1)
        }\n\n` +
        `Thank you for your purchase! You will receive a confirmation email shortly.`;

      alert(successMessage);
    } catch (error) {
      console.error("Error during checkout:", error);

      let errorMessage = "Checkout failed. Please try again.";

      if (
        error.message.includes("login") ||
        error.message.includes("unauthorized")
      ) {
        errorMessage = "Please login to checkout";
      } else if (
        error.message.includes("empty") ||
        error.message.includes("no items")
      ) {
        errorMessage = "Your cart is empty. Please add items before checkout.";
      } else if (
        error.message.includes("network") ||
        error.message.includes("fetch")
      ) {
        errorMessage =
          "Network error. Please check your connection and try again.";
      } else if (error.message) {
        errorMessage = error.message;
      }

      alert(errorMessage);
    } finally {
      setIsCheckingOut(false);
    }
  };

  return (
    <>
      <Header />
      <section className="relative z-10 after:contents-[''] after:absolute after:z-0 after:h-full xl:after:w-1/3 after:top-0 after:right-0 after:bg-gray-50 mt-20">
        <div className="w-full max-w-7xl px-4 md:px-5 lg:px-6 mx-auto relative z-10">
          <div className="grid grid-cols-12">
            <div className="col-span-12 xl:col-span-8 lg:pr-8 pt-14 pb-8 lg:py-16 w-full max-xl:max-w-3xl max-xl:mx-auto">
              <div className="flex items-center justify-between pb-8 border-b border-gray-300">
                <h2 className="font-manrope font-bold text-3xl leading-10 text-black">
                  Courses Cart
                </h2>
                <h2 className="font-manrope font-bold text-xl leading-8 text-gray-600">
                  {itemCount} {itemCount === 1 ? "Item" : "Items"}
                </h2>
              </div>

              <div className="grid grid-cols-12 mt-8 max-md:hidden pb-6 border-b border-gray-200">
                <div className="col-span-12 md:col-span-7">
                  <p className="font-normal text-lg leading-8 text-gray-400">
                    Course Details
                  </p>
                </div>
              </div>

              {loading ? (
                <div className="py-16 text-center">
                  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
                  <p className="text-gray-500 text-lg mt-4">Loading cart...</p>
                </div>
              ) : items.length === 0 ? (
                <div className="py-16 text-center">
                  <p className="text-gray-500 text-lg">Your cart is empty</p>
                  <div className="mt-4">
                    <a
                      href="/courses"
                      className="text-blue-600 hover:underline"
                    >
                      Browse Courses
                    </a>
                  </div>
                </div>
              ) : (
                <>
                  {items.map((item) => (
                    <CartItem
                      key={item.id}
                      product={item}
                      onRemove={handleRemoveItem}
                    />
                  ))}
                  <div className="mt-6 pt-6 border-t border-gray-200">
                    <button
                      onClick={handleClearCart}
                      className="text-red-600 hover:text-red-800 font-medium"
                    >
                      Clear Cart
                    </button>
                  </div>
                </>
              )}
            </div>

            <div className="col-span-12 xl:col-span-4 bg-gray-50 w-full max-xl:px-6 max-w-3xl xl:max-w-lg mx-auto lg:pl-8 py-16">
              <h2 className="font-manrope font-bold text-3xl leading-10 text-black pb-8 border-b border-gray-300">
                Order Summary
              </h2>

              <div className="mt-8">
                <div className="flex items-center justify-between pb-6">
                  <p className="font-normal text-lg leading-8 text-black">
                    {itemCount} {itemCount === 1 ? "Item" : "Items"}
                  </p>
                  <p className="font-medium text-lg leading-8 text-black">
                    ${total.toFixed(2)}
                  </p>
                </div>

                <form onSubmit={handleApplyPromo}>
                  <label className="flex items-center mb-1.5 text-gray-400 text-sm font-medium">
                    Promo Code
                  </label>
                  <div className="flex pb-4 w-full">
                    <div className="relative w-full">
                      <input
                        type="text"
                        value={promoCodeInput}
                        onChange={(e) => setPromoCodeInput(e.target.value)}
                        className="block w-full h-11 pr-11 pl-5 py-2.5 text-base font-normal shadow-xs text-gray-900 bg-white border border-gray-300 rounded-lg placeholder-gray-500 focus:outline-gray-400"
                        placeholder="Enter promo code"
                      />
                    </div>
                  </div>
                  <div className="flex items-center border-b border-gray-200">
                    <button
                      type="submit"
                      className="rounded-lg w-full bg-black py-2.5 px-4 text-white text-sm font-semibold text-center mb-8 transition-all duration-500 hover:bg-black/80"
                    >
                      Apply
                    </button>
                  </div>
                </form>

                {discount > 0 && (
                  <div className="flex items-center justify-between py-2">
                    <p className="font-normal text-lg leading-8 text-green-600">
                      Discount
                    </p>
                    <p className="font-medium text-lg leading-8 text-green-600">
                      -${discount.toFixed(2)}
                    </p>
                  </div>
                )}

                {/* Total */}
                <div className="flex items-center justify-between py-8">
                  <p className="font-medium text-xl leading-8 text-black">
                    Total ({itemCount} {itemCount === 1 ? "Item" : "Items"})
                  </p>
                  <p className="font-semibold text-xl leading-8 text-blue-600">
                    ${getFinalTotal().toFixed(2)}
                  </p>
                </div>

                <button
                  onClick={handleCheckout}
                  disabled={items.length === 0 || isCheckingOut}
                  className={`w-full text-center rounded-xl py-3 px-6 font-semibold text-lg text-white transition-all duration-500 flex items-center justify-center ${
                    items.length === 0 || isCheckingOut
                      ? "bg-gray-400 cursor-not-allowed"
                      : "bg-blue-600 hover:bg-blue-700"
                  }`}
                >
                  {isCheckingOut ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                      Processing...
                    </>
                  ) : (
                    "Checkout"
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Cart;
