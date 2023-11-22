import React, { useEffect, useState } from "react";

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
  const [carouselPage, setCarouselPage] = useState(carousel);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setTimeout(() => {
      setIndex((prev) => (prev < carouselPage.length - 1 ? prev + 1 : 0));
      console.log(-index * 100);
    }, 2500);

    return () => {
      clearTimeout(interval);
    };
  }, [index]);

  return (
    <section className="">
      <div className="flex">
        {carouselPage.map((data) => (
          <img
            src={data.image}
            alt=""
            key={data.id}
            className={`translate-x-[-${index * 100}%] transition-all duration-700`}
          />
        ))}
      </div>
    </section>
  );
};

export default Carousel;
