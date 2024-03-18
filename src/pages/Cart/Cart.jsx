import axios from "axios";
import { Suspense, lazy, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { generateRandomNum } from "../../utils/custom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { apiEndpoint } from "../../utils/environment";
import Spinner from "../../components/layout/Spinner";
const CartItem = lazy(() => import("../../components/Cart/CartItem"));

const Cart = () => {
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.auth);
  const [isLogin, setIsLogin] = useState(() => {
    return token ? true : false;
  });
  const [cart, setCart] = useState([]);
  const [cartDetail, setCartDetail] = useState({
    totalQuantity: 0,
    totalAmount: 0,
  });
  const navigate = useNavigate();

  const navigateToLogin = () => {
    navigate("/login");
  };

  let razorpayPaymentId, razorpayOrderId, razorpaySignature;

  useEffect(() => {
    const fetchCart = async () => {
      try {
        const { data } = await axios.get(`${apiEndpoint}/user/cart`, {
          headers: {
            Authorization: "Bearer " + token,
          },
        });
        let totalQuantity = 0,
          totalAmount = 0;
        data.cart.forEach((item) => {
          totalQuantity += item.quantity;
          totalAmount += item.productInfo.price;
        });
        setCartDetail((prev) => ({ ...prev, totalQuantity, totalAmount }));
        setCart(data.cart);
      } catch (err) {
        console.log(err);
      }
    };
    fetchCart();
  }, [token]);

  const removeCartItem = async (id) => {
    try {
      const data = await axios.delete(`${apiEndpoint}/user/cart/${id}`, {
        headers: {
          Authorization: "Bearer " + token,
        },
      });
      setCart((prev) => prev.filter((item) => item.idProduct !== id));
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };

  const orderHandler = async () => {
    try {
      const formData = {
        amount: 5000,
        currency: "INR",
        receipt: "receipt_" + generateRandomNum(4),
      };
      const { data } = await axios.post(
        `${apiEndpoint}/order/create`,
        formData,
        { headers: { Authorization: "Bearer " + token } }
      );
      const orderId = data.response.id;
      const options = {
        key: "rzp_test_UmC0vdysZbuqoM",
        amount: formData.amount,
        currency: formData.currency,
        name: "Acme Corp",
        description: "Test Transaction",
        image: "https://example.com/your_logo",
        order_id: orderId,
        handler: async (response) => {
          razorpayPaymentId = response.razorpay_payment_id;
          razorpayOrderId = response.razorpay_order_id;
          razorpaySignature = response.razorpay_signature;
          const { data } = await axios.post(
            `${apiEndpoint}/order/verify`,
            {
              order_id: razorpayOrderId,
              payment_id: razorpayPaymentId,
              razorpay_signature: razorpaySignature,
            },
            { headers: { Authorization: "Bearer " + token } }
          );
          navigate("/");
          toast(data.message, {
            position: "bottom-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        },
        prefill: {
          name: "Vicky Kaushal",
          email: "vickat2@example.com",
          contact: "9000090000",
        },
        notes: {
          address: "Razorpay Corporate Office",
        },
        theme: {
          color: "#3399cc",
        },
      };
      const rzp1 = new Razorpay(options);
      rzp1.open();
      rzp1.on("payment.failed", function (response) {
        navigate("/");
        throw new Error(response.error.description);
      });
    } catch (err) {
      console.log(err);
      toast(err.message, {
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };

  return (
    <div className="h-[90vh]">
      <div className="w-[50vw] h-[75vh] mb-5 hide-scrollbar border-[1px] mx-auto mt-5">
        <header className="h-16 bg-gray-300 flex">
          <button className="flex-1 text-xl border-b-4 border-blue-500">
            Flipkart
          </button>
        </header>

        <section className="h-full overflow-y-scroll hide-scrollbar bg-slate-300">
          {isLogin ? (
            <>
              <div>
                <Suspense fallback={<Spinner />}>
                  {cart.map((cartItem) => (
                    <CartItem
                      cart={cartItem}
                      key={cartItem.idProduct}
                      onItemRemove={() => removeCartItem(cartItem.idProduct)}
                    />
                  ))}
                </Suspense>
                <div className="w-80 p-2 absolute right-5 rounded-lg bg-slate-300 top-24 border-[1px]">
                  <h1 className="pb-5">PRICE DETAILS</h1>
                  <hr />
                  <div className="flex justify-between my-4">
                    <span>Price ({cartDetail.totalQuantity} item)</span>
                    <span>$13,999</span>
                  </div>
                  <div className="flex justify-between my-4">
                    <span>Quantity</span>
                    <span>{cartDetail.totalQuantity}</span>
                  </div>
                  {/* <div className="flex justify-between my-4">
                    <span>Delivery Charges</span>
                    <span>$40</span>
                  </div> */}
                  <div className="flex justify-between my-4 border-2 border-dotted py-4">
                    <span>Total Amount</span>
                    <span>
                      <b>$</b> {cartDetail.totalAmount}
                    </span>
                  </div>
                </div>
                <div className="h-20 bg-slate-700 text-end">
                  <button
                    className="w-60 py-3 bg-orange-500 mt-4 mx-5 text-white font-semibold"
                    onClick={orderHandler}
                  >
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
