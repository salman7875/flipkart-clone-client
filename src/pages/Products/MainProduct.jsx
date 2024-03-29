import { Suspense, lazy } from "react";
import Spinner from "../../components/layout/Spinner";

const Sidebar = lazy(() => import("../../components/Navbar/Sidebar"));
const ListOfProfucts = lazy(() => import("./ListOfProfucts"));

const MainProduct = () => {
  return (
    <div className="flex mt-16 h-[91vh] overflow-hidden">
      <Suspense fallback={<Spinner />}>
        <Sidebar />
      </Suspense>
      <Suspense fallback={<Spinner />}>
        <ListOfProfucts />
      </Suspense>
    </div>
  );
};

export default MainProduct;
