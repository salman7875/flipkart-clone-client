import { useState } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const Pagination = ({ type, page, sort, filter }) => {
  const navigate = useNavigate();
  const [paginationNum, setPaginationNum] = useState(numbers);

  const nextPageHandler = () => {
    if (page == 10) return;
    navigate(
      `/products?type=${type}&page=${+page + 1}&sort=${sort}&filter=${filter}`
    );
  };

  const previousPageHandler = () => {
    if (page == 1) return;
    navigate(`/products?type=${type}&page=${+page - 1}&sort=${sort}&filter=${filter}`);
  };

  return (
    <section className="flex justify-center mt-5">
      <p className="relative right-[310px]">Page 1 of 10</p>
      <div className="flex gap-2">
        <button
          className="font-medium text-blue-500"
          onClick={previousPageHandler}
        >
          Previous
        </button>
        <ul className="flex gap-1 cursor-pointer">
          {paginationNum.map((p) => (
            <li
              className={`h-8 w-8 flex items-center justify-center text-black ${
                page == p ? "active-pag" : ""
              }`}
              key={p}
              onClick={() =>
                navigate(`/products?type=${type}&page=${p}&sort=${sort}&filter=${filter}`)
              }
            >
              {p}
            </li>
          ))}
        </ul>
        <button className="font-medium text-blue-500" onClick={nextPageHandler}>
          Next
        </button>
      </div>
    </section>
  );
};

export default Pagination;
