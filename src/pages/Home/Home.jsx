import Carousel from "../../components/layout/Carousel";
import Advertise from "../../components/layout/Advertise";
import CategoryNav from "../../components/Navbar/CategoryNav";
import Product from "../../components/Products/Product";
import { ToastContainer } from "react-toastify";

const Home = () => {
  return (
    <div>
      <CategoryNav />
      <Carousel />
      <Product type="phone" />
      <Advertise />
      <Product type="laptop" />
      <ToastContainer />
      <Advertise />
    </div>
  );
};

export default Home;
