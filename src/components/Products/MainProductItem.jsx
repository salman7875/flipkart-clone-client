import { Link } from "react-router-dom";

const MainProductItem = ({ product }) => {
  return (
    <div className="flex justify-between border-b-[1px] pb-2 mt-5">
      <img src={product.productImg} alt="" className="w-48" />
      <div className="basis-1/2">
        <Link to={`/product?id=${product.id}`} className="text-black hover:text-blue-600">{product.name}</Link>
        <p className="font-medium text-gray-600 text-sm">
          <span className="bg-green-600 px-2 rounded-md text-white text-sm">
            4.4
          </span>{" "}
          2,562 Ratings & 310 Reviews
        </p>
        <p>{product.description}</p>
      </div>
      <div className="basis-1/4">
        <span className="text-2xl block font-medium mb-2">
          ${product.price}
        </span>
        <p className="text-sm text-gray-600 mb-1">
          <span>${product.price + 2500}</span>51% Off
        </p>
        <p className="text-sm mb-1">Free delivery</p>
        <p className="text-xs font-medium text-gray-500 mb-1">
          Big Saving Deal
        </p>
        <p className="text-sm">
          Upto <span className="font-medium">$220</span> Off on Exchange
        </p>
      </div>
    </div>
  );
};

export default MainProductItem;
