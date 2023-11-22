import React, { useState } from "react";

const Advertise = () => {
  const [posters, setPosters] = useState([
    {
      id: 1,
      image:
        "https://rukminim1.flixcart.com/fk-p-flap/520/280/image/6ae6496d87b04fbc.jpg?q=20",
    },
    {
      id: 2,
      image:
        "https://rukminim1.flixcart.com/fk-p-flap/520/280/image/4ac3a2dbba18d5a9.jpg?q=20",
    },
    {
      id: 3,
      image:
        "https://rukminim1.flixcart.com/fk-p-flap/520/280/image/4ac3a2dbba18d5a9.jpg?q=20",
    },
  ]);

  return (
    <div className="m-2 bg-slate-300 p-1 rounded-lg">
      <div className="flex gap-2">
        {posters.map((poster) => (
          <img
            src={poster.image}
            key={poster.id}
            alt=""
            className="cursor-pointer"
          />
        ))}
      </div>
    </div>
  );
};

export default Advertise;
