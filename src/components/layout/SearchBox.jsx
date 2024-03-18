import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchBox = () => {
  const [search, setSearch] = useState("");
  const [key, setKey] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const time = setTimeout(() => {
      console.log(key);
      if (key === "Space") {
        navigate(`/products?type=${search}&page=1&sort=relevance&filter=0`);
      }
    }, 200);

    return () => {
      clearTimeout(time);
    };
  }, [search]);

  return (
    <input
      type="text"
      placeholder="Search for products, brands and more"
      className="h-10 px-5 w-[35vw]"
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      onKeyDown={(e) => setKey(e.code)}
    />
  );
};

export default SearchBox;
