import { Suspense, lazy, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Spinner from "../components/Spinner";
const CartItem = lazy(() => import("../components/CartItem"));

const Cart = () => {
  const { token } = useSelector((state) => state.auth);
  const [isLogin, setIsLogin] = useState(() => {
    return token ? true : false;
  });
  const [cart, setCart] = useState([]);
  const [quantity, setQuantity] = useState(0);
  const navigate = useNavigate();

  const navigateToLogin = () => {
    navigate("/login");
  };

  useEffect(() => {
    const fetchCart = async () => {
      try {
        const { data } = await axios.get("http://localhost:5000/user/cart", {
          headers: {
            Authorization: "Bearer " + token,
          },
        });
        let totalItem = 0;
        data.cart.forEach((item) => {
          totalItem += item.quantity;
        });
        setQuantity(totalItem);
        setCart(data.cart);
      } catch (err) {
        console.log(err);
      }
    };
    fetchCart();
  }, [token]);

  return (
    <div className="h-[90vh]">
      <div className="w-[50vw] h-[75vh] mb-5 hide-scrollbar border-[1px] mx-auto mt-5">
        <header className="h-16 bg-gray-300 flex">
          <button className="flex-1 text-xl border-b-4 border-blue-500">
            Flipkar
          </button>
          <button className="flex-1 text-xl">Grocery</button>
        </header>

        <section className="mt-2 h-full overflow-y-scroll hide-scrollbar bg-slate-300">
          {isLogin ? (
            <>
              <div>
                <Suspense fallback={<Spinner />}>
                  {cart.map((cart) => (
                    <CartItem cart={cart} key={cart.idProduct} />
                  ))}
                </Suspense>
                <div className="w-80 p-2 absolute right-5 rounded-lg bg-slate-300 top-24 border-[1px]">
                  <h1 className="pb-5">PRICE DETAILS</h1>
                  <hr />
                  <div className="flex justify-between my-4">
                    <span>Price (1 item)</span>
                    <span>$13,999</span>
                  </div>
                  <div className="flex justify-between my-4">
                    <span>Quantity</span>
                    <span>{quantity}</span>
                  </div>
                  <div className="flex justify-between my-4">
                    <span>Delivery Charges</span>
                    <span>$40</span>
                  </div>
                  <div className="flex justify-between my-4 border-2 border-dotted py-4">
                    <span>Total Amount</span>
                    <span>$8,890</span>
                  </div>
                  <p className="my-4">You will save ₹5,100 on this order</p>
                </div>
                <div className="h-20 bg-slate-700 text-end">
                  <button className="w-60 py-3 bg-orange-500 mt-4 mx-5 text-white font-semibold">
                    PLACE ORDER
                  </button>
                </div>
              </div>
            </>
          ) : (
            <div className="flex flex-col items-center justify-center">
              <img
                src="https://rukminim2.flixcart.com/www/800/800/promos/16/05/2019/d438a32e-765a-4d8b-b4a6-520b560971e8.png?q=90"
                alt=""
                className="w-56 mt-10 mb-5"
              />
              <p>Missing Cart items?</p>
              <span className="my-2">
                Login to see the items you added previously
              </span>
              <button
                className="bg-orange-500 w-36 py-2 text-white"
                onClick={navigateToLogin}
              >
                Login
              </button>
            </div>
          )}
        </section>
      </div>
    </div>
  );
};

export default Cart;
