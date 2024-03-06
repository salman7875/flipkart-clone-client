import { Suspense, lazy, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import Spinner from "../components/Spinner";
import { apiEndpoint } from "../utils/environment";
const BestProductItem = lazy(() => import("../components/BestProductItem"));

const BestProducts = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(false);
  const type = useLocation().search.split("=")[1];

  useEffect(() => {
    const fetchBestProducts = async () => {
      try {
        const { data } = await axios.get(
          `${apiEndpoint}/product/best?type=${type}`
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
    <div className="h-full bg-slate-300 rounded-lg m-2">
      <div className="flex flex-col items-center">
        <div className="h-32 border-b-2 flex flex-col items-center justify-center">
          <h1 className="text-2xl font-medium mb-2">Best Mobile</h1>
          <span className="text-gray-600">12 Items</span>
        </div>
        <div className="grid grid-cols-4 gap-y-16  gap-x-32 p-10">
          <Suspense fallback={<Spinner />}>
            {products.map((product) => (
              <BestProductItem product={product} key={product.id} />
            ))}
          </Suspense>
        </div>
      </div>
    </div>
  );
};

export default BestProducts;
