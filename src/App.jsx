import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import Spinner from "./components/Spinner";

const SignIn = lazy(() => import("./pages/SignIn"));
const Login = lazy(() => import("./pages/Login"));
const BestProducts = lazy(() => import("./pages/BestProducts"));
const Cart = lazy(() => import("./pages/Cart"));
const ProductDetail = lazy(() => import("./pages/ProductDetail"));
const MainRoot = lazy(() => import("./pages/MainRoot"));
const Home = lazy(() => import("./pages/Home"));
const MainProduct = lazy(() => import("./pages/MainProduct"));
const CreateProduct = lazy(() => import("./pages/CreateProduct"));

const App = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Suspense fallback={<Spinner />}>
              <MainRoot />
            </Suspense>
          }
        >
          <Route
            index
            element={
              <Suspense fallback={<Spinner />}>
                <Home />
              </Suspense>
            }
          />
          <Route
            path="best"
            element={
              <Suspense fallback={<Spinner />}>
                <BestProducts />
              </Suspense>
            }
          />
          <Route
            path="products"
            element={
              <Suspense fallback={<Spinner />}>
                <MainProduct />
              </Suspense>
            }
          />
          <Route
            path="create/product"
            element={
              <Suspense fallback={<Spinner />}>
                <CreateProduct />
              </Suspense>
            }
          />
          <Route
            path="edit/product"
            element={
              <Suspense fallback={<Spinner />}>
                <CreateProduct />
              </Suspense>
            }
          />
          <Route
            path="product"
            element={
              <Suspense fallback={<Spinner />}>
                <ProductDetail />
              </Suspense>
            }
          />
          <Route
            path="cart"
            element={
              <Suspense fallback={<Spinner />}>
                <Cart />
              </Suspense>
            }
          />
          <Route
            path="login"
            element={
              <Suspense fallback={<Spinner />}>
                <Login />
              </Suspense>
            }
          />
          <Route
            path="signup"
            element={
              <Suspense fallback={<Spinner />}>
                <SignIn />
              </Suspense>
            }
          />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
