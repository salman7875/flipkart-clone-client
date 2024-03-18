
import React, { useEffect, useState } from "react";
import Pagination from "../../components/layout/Pagination";
import { Link, useSearchParams } from "react-router-dom";
import axios from "axios";
import MainProductItem from "../../components/Products/MainProductItem";
import { apiEndpoint } from "../../utils/environment";

const ListOfProfucts = () => {
  const [products, setProducts] = useState([]);
  const [params] = useSearchParams();
  const type = params.get("type").trim();
  const page = params.get("page");
  const sort = params.get("sort");
  const filter = params.get("filter");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const { data } = await axios.get(
          `${apiEndpoint}/product?type=${type}&page=${page}&sort=${sort}&filter=${filter}`
        );
        console.log(data);
        setProducts(data.products);
      } catch (err) {
        console.log(err);
      }
    };
    fetchProducts();
  }, [type, page, sort, filter]);

  return (
    <div className="flex-1 bg-gray-300 p-2">
      <div className="px-5 py-2 h-screen overflow-y-scroll hide-scrollbar bg-white rounded-lg">
        <p className="font-medium">
          Showing 1 – 24 of 737 results for "monitor"
        </p>
        <nav className="mt-2 mb-5 border-b-[1px] border-gray-200">
          <ul className="flex gap-3 font-medium text-md">
            <li>Sort By</li>
            <li>
              <Link
                to={`/products?type=${type}%20&page=${page}&sort=relevance&filter=${filter}`}
                className={sort === "relevance" ? "active-link" : ""}
              >
                Relevance
              </Link>
            </li>
            <li>
              <Link
                to={`/products?type=${type}%20&page=${page}&sort=popularity&filter=${filter}`}
                className={sort === "popularity" ? "active-link" : ""}
              >
                popularity
              </Link>
            </li>
            <li>
              <Link
                to={`/products?type=${type}%20&page=${page}&sort=ASC&filter=${filter}`}
                className={sort === "ASC" ? "active-link" : ""}
              >
                Price -- Low to High
              </Link>
            </li>
            <li>
              <Link
                to={`/products?type=${type}%20&page=${page}&sort=DESC&filter=${filter}`}
                className={sort === "DESC" ? "active-link" : ""}
              >
                Price -- Hight to Low
              </Link>
            </li>
            <li>
              <Link
                to={`/products?type=${type}%20&page=${page}&sort=newest&filter=${filter}`}
                className={sort === "newest" ? "active-link" : ""}
              >
                Newest First
              </Link>
            </li>
          </ul>
        </nav>

        <div className="mb-20">
          {products.map((product) => (
            <MainProductItem product={product} key={product.id} />
          ))}
          <Pagination type={type} page={page} sort={sort} filter={filter} />
        </div>
      </div>
    </div>
  );
};

export default ListOfProfucts;
