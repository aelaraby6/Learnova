import { useState, useEffect } from 'react';
import { useCart } from '../hooks/useCart';
import CartItem from './CartItem';
import '../styles/global.css';

const Cart = () => {
  const { 
    items, 
    total, 
    itemCount, 
    discount, 
    removeItem, 
    applyDiscount, 
    clearDiscount,
    setItems,
    getFinalTotal 
  } = useCart();
  
  const [promoCodeInput, setPromoCodeInput] = useState('');

  useEffect(() => {
    if (items.length === 0) {
      const sampleItems = [
        {
          id: 1,
          name: "React Fundamentals",
          category: "Courses",
          price: 120.00,
          image: "https://pagedone.io/asset/uploads/1701162850.png"
        },
        {
          id: 2,
          name: "Advanced JavaScript",
          category: "Courses", 
          price: 240.00,
          image: "https://pagedone.io/asset/uploads/1701162866.png"
        },
        {
          id: 3,
          name: "UI/UX Design",
          category: "Courses",
          price: 120.00,
          image: "https://pagedone.io/asset/uploads/1701162880.png"
        }
      ];
      setItems(sampleItems);
    }
  }, [items.length, setItems]);

  const handleApplyPromo = (e) => {
    e.preventDefault();
    if (promoCodeInput.toLowerCase() === 'save20') {
      applyDiscount(total * 0.2, promoCodeInput); // 20% discount
    } else if (promoCodeInput.toLowerCase() === 'save10') {
      applyDiscount(total * 0.1, promoCodeInput); // 10% discount
    } else {
      clearDiscount();
      alert('Invalid promo code');
    }
  };

  const handleCheckout = () => {
    if (items.length === 0) {
      alert('Your cart is empty');
      return;
    }
    const finalTotal = getFinalTotal();
    alert(`Proceeding to checkout with ${itemCount} items. Total: $${finalTotal.toFixed(2)}`);
  };

  return (
    <section className="relative z-10 after:contents-[''] after:absolute after:z-0 after:h-full xl:after:w-1/3 after:top-0 after:right-0 after:bg-gray-50">
      <div className="w-full max-w-7xl px-4 md:px-5 lg:px-6 mx-auto relative z-10">
        <div className="grid grid-cols-12">
          <div className="col-span-12 xl:col-span-8 lg:pr-8 pt-14 pb-8 lg:py-16 w-full max-xl:max-w-3xl max-xl:mx-auto">
            <div className="flex items-center justify-between pb-8 border-b border-gray-300">
              <h2 className="font-manrope font-bold text-3xl leading-10 text-black">
                Courses Cart
              </h2>
              <h2 className="font-manrope font-bold text-xl leading-8 text-gray-600">
                {itemCount} {itemCount === 1 ? 'Item' : 'Items'}
              </h2>
            </div>
            
            <div className="grid grid-cols-12 mt-8 max-md:hidden pb-6 border-b border-gray-200">
              <div className="col-span-12 md:col-span-7">
                <p className="font-normal text-lg leading-8 text-gray-400">
                  Course Details
                </p>
              </div>
            </div>

            {items.length === 0 ? (
              <div className="py-16 text-center">
                <p className="text-gray-500 text-lg">Your cart is empty</p>
              </div>
            ) : (
              items.map(item => (
                <CartItem 
                  key={item.id} 
                  product={item} 
                  onRemove={removeItem}
                />
              ))
            )}
          </div>

          <div className="col-span-12 xl:col-span-4 bg-gray-50 w-full max-xl:px-6 max-w-3xl xl:max-w-lg mx-auto lg:pl-8 py-16">
            <h2 className="font-manrope font-bold text-3xl leading-10 text-black pb-8 border-b border-gray-300">
              Order Summary
            </h2>
            
            <div className="mt-8">
              <div className="flex items-center justify-between pb-6">
                <p className="font-normal text-lg leading-8 text-black">
                  {itemCount} {itemCount === 1 ? 'Item' : 'Items'}
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
                  Total ({itemCount} {itemCount === 1 ? 'Item' : 'Items'})
                </p>
                <p className="font-semibold text-xl leading-8 text-[var(--Primary-1)]">
                  ${getFinalTotal().toFixed(2)}
                </p>
              </div>

              <button
                onClick={handleCheckout}
                disabled={items.length === 0}
                className={`w-full text-center rounded-xl py-3 px-6 font-semibold text-lg text-white transition-all duration-500 ${
                  items.length === 0 
                    ? 'bg-gray-400 cursor-not-allowed' 
                    : 'bg-[var(--Primary-1)] hover:bg-[var(--Primary-2)]'
                }`}
              >
                Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cart;