import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const razorpayOptions = (
  amount,
  currency,
  name,
  desc,
  imgUrl,
  orderId,
  userName,
  userEmail,
  userContact,
  token,
  address
) => {
  return {
    key: "rzp_test_UmC0vdysZbuqoM", // Enter the Key ID generated from the Dashboard
    amount: amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
    currency: currency,
    name: "Acme Corp",
    description: "Test Transaction",
    image: "https://example.com/your_logo",
    order_id: orderId, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
    // callback_url: "http://localhost:5173/",
    handler: async function (response) {
      razorpayPaymentId = response.razorpay_payment_id;
      razorpayOrderId = response.razorpay_order_id;
      razorpaySignature = response.razorpay_signature;
      await axios.post(
        `${apiEndpoint}/order/verify`,
        {
          order_id: razorpayOrderId,
          payment_id: razorpayPaymentId,
          razorpay_signature: razorpaySignature,
        },
        { headers: { Authorization: "Bearer " + token } }
      );
      navigate("/");
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
};

export const generateRandomNum = (length) => {
  return Array.from({ length }, () => Math.floor(Math.random() * 10)).join("");
};
