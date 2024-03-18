import { Link } from "react-router-dom";

const categoryData = [
  {
    id: 1,
    img: "https://rukminim1.flixcart.com/fk-p-flap/80/80/image/790b539a57f7b8cd.png?q=100",
    title: "Top Offers",
    path: "products?type=phone%20&page=1&sort=relevance&filter=0",
  },
  {
    id: 2,
    img: "https://rukminim1.flixcart.com/fk-p-flap/80/80/image/444802d58a814f57.png?q=100",
    title: "Top Offers",
    path: "products?type=phone%20&page=1&sort=relevance&filter=0",
  },
  {
    id: 3,
    img: "https://rukminim1.flixcart.com/fk-p-flap/80/80/image/ce3744f59fadb72e.png?q=100",
    title: "Top Offers",
    path: "products?type=laptop%20&page=1&sort=relevance&filter=0",
  },
  {
    id: 4,
    img: "https://rukminim1.flixcart.com/fk-p-flap/80/80/image/5b8ad952a656b015.png?q=100",
    title: "Top Offers",
    path: "products?type=tv%20&page=1&sort=relevance&filter=0",
  },
  {
    id: 5,
    img: "https://rukminim1.flixcart.com/fk-p-flap/80/80/image/e4b01f3d783c49a1.png?q=100",
    title: "Top Offers",
    path: "products?type=monitor%20&page=1&sort=relevance&filter=0",
  },
  {
    id: 6,
    img: "https://rukminim1.flixcart.com/fk-p-flap/80/80/image/9e4acc1d8929bcc6.png?q=100",
    title: "Top Offers",
    path: "products?type=keyboard%20&page=1&sort=relevance&filter=0",
  },
];

const CategoryNav = () => {
  return (
    <div className="h-36 bg-slate-200 m-2 rounded-lg p-3 flex justify-center">
      <ul className="mx-auto flex gap-10">
        {categoryData.map((category) => (
          <li key={category.id}>
            <Link to={category.path}>
              <img src={category.img} alt="" className="w-[4.5rem]" />
              <span className="text-lg font-semibold">{category.title}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryNav;
