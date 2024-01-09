import { useEffect, useState } from "react";

const carousel = [
  {
    id: 1,
    image:
      "https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/9713e7793cff3ab0.jpg?q=20",
  },
  {
    id: 2,
    image:
      "https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/2d46d868f6692aeb.jpg?q=20",
  },
  {
    id: 3,
    image:
      "https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/94d236d28bdd0c49.jpeg?q=20",
  },
];
const Carousel = () => {
  const [index, setIndex] = useState(0);
  const carouselLength = carousel.length - 1;

  useEffect(() => {
    const time = setTimeout(() => {
      setIndex((prev) => (prev < carouselLength ? prev + 1 : 0));
    }, 2500);
    console.log(index);

    return () => {
      clearTimeout(time);
    };
  }, [index]);

  return (
    <section className="">
      <div className="flex">
        {carousel.map((data) => (
          <img
            src={data.image}
            alt={data.id}
            key={data.id}
            className={`translate-x-[-${index}00%] transition-all duration-700`}
          />
        ))}
      </div>
    </section>
  );
};

export default Carousel;
