const RatingBar = ({ index, ratings }) => {
  let color;

  if (index == 1 || index == 2 || index == 3) {
    color = "bg-blue-500";
  } else if (index == 4) {
    color = "bg-red-500";
  } else {
    color = "bg-red-700";
  }
  console.log(ratings);

  return (
    <div className="w-56 h-[0.4rem] bg-gray-200 rounded-full mb-2">
      <div
        className={`h-full ${color} rounded-full w-[${ratings}0%]`}
      ></div>
    </div>
  );
};

export default RatingBar;
