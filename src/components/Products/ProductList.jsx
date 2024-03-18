const ProductList = ({ product }) => {
  return (
    <div className="h-52 border-[1px] py-1 px-3">
      <img
        src={product.productImg}
        alt=""
        className="w-28 mb-2 transition-transform transform hover:scale-110"
      />
      <div className="flex flex-col items-center">
        <span>Nothing Phone 2</span>
        <span className="font-semibold">Incl of offers</span>
      </div>
    </div>
  );
};

export default ProductList;
