const RatingCommentItem = ({ rating }) => {
  console.log(rating);
  return (
    <div className="border-b-[1px] py-2">
      <p className="text-sm font-medium mb-2">
        <span className="text-white bg-green-600 px-2 mr-3">
          {rating.rating}★
        </span>{" "}
        Just Wow!
      </p>
      {/* <p className="mb-2 text-lg">{rating.message.slice(0, 20)}</p> */}
      <p className="text-sm pr-10">{rating.message}</p>
      <span className="text-sm text-gray-700 font-medium">{rating.name}</span>
    </div>
  );
};

export default RatingCommentItem;
