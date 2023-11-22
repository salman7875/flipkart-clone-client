import { Link } from "react-router-dom";

const BestProductItem = ({product}) => {
  return (
    <div className="" key={product.id}>
      <img
        src={product.productImg}
        alt=""
        className="hover:scale-105 transition-all w-44 mb-4"
      />
      <Link to={`/product?id=${product.id}`}>
        <div className="flex flex-col items-center gap-1">
          <span className="hover:text-blue-600 cursor-pointer">
            {product.name}
          </span>
          <span>from ${product.price}*</span>
        </div>
      </Link>
    </div>
  );
};

export default BestProductItem;
