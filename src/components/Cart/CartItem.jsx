const CartItem = ({ cart, onItemRemove }) => {
  const removeCartItemHandler = async (id) => {
    onItemRemove();
  };

  return (
    <div className="p-4 border-b-[1px]">
      <div className="flex gap-2" key={cart.id}>
        <img src={cart.productInfo.productImg} alt="" className="w-28" />
        <div className="">
          <p>{cart.productInfo.name}</p>
          <p className="text-gray-700 text-md">
            {cart.productInfo.description}
          </p>
          <p className="text-gray-700 mb-2">Seller: MTAILMODEECOM</p>
          <p className="text-gray-700 text-md">${cart.productInfo.price}</p>
        </div>
      </div>

      <div className="flex gap-5 mt-2">
        <div className="flex gap-2">
          <button className="w-6 h-6 border-[1px] border-gray-400 rounded-full flex items-center justify-center text-2xl">
            -
          </button>
          <div className="w-10 text-center border-[1px] border-gray-400">
            {cart.quantity}
          </div>
          <button className="w-6 h-6 border-[1px] border-gray-400 rounded-full flex items-center justify-center text-2xl">
            +
          </button>
        </div>
        <button className="font-semibold">SAVE FOR LATER</button>
        <button className="font-semibold" onClick={removeCartItemHandler}>
          REMOVE
        </button>
      </div>
    </div>
  );
};

export default CartItem;
