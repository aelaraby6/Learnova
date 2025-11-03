const CartItem = ({ product, onRemove }) => {
  const handleRemove = () => {
    if (onRemove) {
      onRemove(product.id);
    }
  };

  return (
    <div className="flex flex-col min-[500px]:flex-row min-[500px]:items-center gap-5 py-6 border-b border-gray-200 group">
      <div className="w-full md:max-w-[126px]">
        <img
          src={product.image}
          alt={product.name || product.title}
          className="mx-auto rounded-xl object-cover w-full h-24 md:h-20"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 w-full">
        <div className="md:col-span-2">
          <div className="flex flex-col max-[500px]:items-center gap-3">
            <h6 className="font-semibold text-base leading-7 text-black">
              {product.name || product.title}
            </h6>
            <h6 className="font-normal text-base leading-7 text-gray-500">
              {product.category || "Course"}
            </h6>
            {product.description && (
              <p className="text-sm text-gray-600 line-clamp-2">
                {product.description}
              </p>
            )}
            <h6 className="font-medium text-base leading-7 text-gray-600 transition-all duration-300 group-hover:text-purple-600">
              ${product.price.toFixed(2)}
            </h6>
          </div>
        </div>
        <div className="flex items-center max-[500px]:justify-center h-full max-md:mt-3">
          {onRemove && (
            <button
              onClick={handleRemove}
              className="text-red-500 hover:text-red-700 transition-colors duration-300 px-3 py-1 rounded-md hover:bg-red-50 font-medium"
            >
              Remove
            </button>
          )}
        </div>
        <div className="flex items-center max-[500px]:justify-center md:justify-end max-md:mt-3 h-full">
          <p className="font-bold text-lg leading-8 text-gray-600 text-center transition-all duration-300 group-hover:text-purple-600">
            ${product.price.toFixed(2)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
