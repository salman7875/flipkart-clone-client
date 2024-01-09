import { Suspense, lazy, useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";
import Spinner from "../components/Spinner";
import { apiEndpoint } from "../utils/environment";

const Ratings = lazy(() => import("../components/Ratings"));

const ProductDetail = () => {
  const { token } = useSelector((state) => state.auth);
  const [productDetail, setProductDetail] = useState({});
  const [params] = useSearchParams();
  const navigate = useNavigate();
  const id = params.get("id");

  useEffect(() => {
    const fetchProductDetail = async () => {
      try {
        const { data } = await axios.get(`${apiEndpoint}/product/${id}`);
        if (data.success) {
          setProductDetail(data.product);
        }
      } catch (err) {
        console.log(err);
      }
    };
    fetchProductDetail();
  }, [id]);

  const addToCartHandler = async () => {
    try {
      if (token) {
        const { data } = await axios.post(
          `${apiEndpoint}/user/cart?id=${id}&q=1`,
          {},
          {
            headers: {
              Authorization: "Bearer " + token,
            },
          }
        );
      } else {
        navigate("/login");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="h-full overflow-y-scroll hide-scrollbar bg-slate-300">
      <div className="w-[90vw] h-full py-5 px-10 mx-auto bg-white flex gap-5 text-xl">
        <div className="basis-[30%]">
          <img
            src={productDetail.productImg}
            alt=""
            className="w-[100%] border-[1px] py-2 px-4 mb-2"
          />
          <button
            className="w-[47%] py-3 font-medium text-white bg-orange-500"
            onClick={addToCartHandler}
          >
            Add to Cart
          </button>
          <button className="w-[48%] ms-4 py-3 font-medium text-white bg-orange-500">
            Buy Now
          </button>
        </div>

        <div className="basis-[60%]">
          <p className="mb-2">{productDetail.name}</p>
          <p className="text-sm text-gray-600 font-medium mb-2">
            <span className="bg-green-500 px-2 text-sm">4.4</span> 2,562 Ratings
            & 310 Reviews
          </p>
          <span className="block text-green-700 text-sm font-medium">
            Special Price
          </span>
          <p className="text-3xl font-medium">
            ${productDetail.price}
            <span className="text-lg line-through text-gray-500">$14,999</span>
          </p>

          <div className="border-[1px] mt-5 py-2 px-4">
            <h2 className="pb-4">Specification</h2>
            <hr />
            <h3 className="py-4">General</h3>
            <div className="flex gap-5">
              <div className="text-gray-500 text-sm flex flex-col gap-2">
                <span>Model Name</span>
                <span>Color</span>
                <span>Display</span>
                <span>Screen Resolution Type</span>
              </div>
              <div className="text-black text-sm font-medium  flex flex-col gap-2">
                <span>Accer 193 Ulta Wide, 144 Hz Refresh Rate</span>
                <span>Black, White</span>
                <span>60.45 cm (23.8 inch) LED Display</span>
                <span>Full HD</span>
              </div>
            </div>
          </div>

          <Suspense fallback={<Spinner />}>
            <Ratings id={id} />
          </Suspense>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
