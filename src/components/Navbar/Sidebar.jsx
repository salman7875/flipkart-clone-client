import { useEffect, useState } from "react";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";

const Sidebar = () => {
  const [price, setPrice] = useState(0);
  const [params] = useSearchParams();
  const type = params.get("type");
  const page = params.get("page");
  const sort = params.get("sort");
  const navigate = useNavigate();

  useEffect(() => {
    let time = setTimeout(() => {
      navigate(
        `/products?type=${type}&page=${page}&sort=${sort}&filter=${price}`
      );
    }, 500);

    return () => {
      clearTimeout(time);
    };
  }, [price]);

  return (
    <div className="w-[18rem] h-[91vh] overflow-hidden p-2 bg-slate-300 border-r-[1px]">
      <div className="w-[17rem] px-5 py-2 rounded-lg bg-white mb-2">
        <img
          src="https://rukminim2.flixcart.com/fk-p-flap/100/100/image/983697023717a8ab.jpg?q=50"
          alt=""
          className="w-52 mx-auto"
        />
        <hr />
        <p className="font-semibold">New Monitor Launches</p>
        <p className="text-sm">Sale is Live From $4,999</p>
      </div>

      <div className="w-[17rem] px-5 py-2 rounded-lg bg-white mb-2">
        <h1 className="text-2xl mb-2">Filters</h1>
        <hr />
        <h2 className="my-2">Price</h2>
        <input
          type="range"
          name="range"
          id="range"
          min={1000}
          max={10000}
          onChange={(e) => setPrice(e.target.value)}
          className="w-full bg-gray-300 rounded-full appearance-none h-2"
        />
        <div className="flex justify-between">
          <span>$1,000</span>
          <span>$10,000</span>
        </div>
      </div>

      <div className="w-[17rem] px-5 py-2 rounded-lg bg-white mb-2">
        <h2 className="my-2">Customer Rating</h2>
        <div className="flex flex-col gap-1">
          <div>
            <input type="checkbox" name="star" id="star" />
            <label htmlFor="star" className="ms-1">
              4 & above
            </label>
          </div>
          <div>
            <input type="checkbox" name="star" id="star" />
            <label htmlFor="star" className="ms-1">
              3 & above
            </label>
          </div>
          <div>
            <input type="checkbox" name="star" id="star" />
            <label htmlFor="star" className="ms-1">
              2 & above
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
