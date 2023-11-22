import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import ProductList from "./ProductList";

const Product = ({ type }) => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBestProducts = async () => {
      try {
        const { data } = await axios.get(
          `http://localhost:5000/product/best?type=${type}`
        );
        setProducts(data.products);
        console.log(data);
      } catch (err) {
        console.log(err);
        setError(true);
      }
    };
    fetchBestProducts();
  }, []);

  return (
    <div className="m-2 bg-slate-300 h-full rounded-lg p-4">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-xl font-semibold">Best {type}s</h1>
        <button
          className="w-44 py-2 bg-blue-600 text-white"
          onClick={() => navigate(`/best?type=${type}`)}
        >
          Show All
        </button>
      </div>
      <div className="flex gap-5">
        {products.map((product) => (
          <ProductList product={product} key={product.id} />
        ))}
      </div>
    </div>
  );
};

export default Product;
