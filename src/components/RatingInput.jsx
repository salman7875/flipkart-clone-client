const RatingInput = ({ setRating, comment, setComment, onAddComment }) => {
  const sendCommentHandler = () => {
    onAddComment();
  };

  return (
    <div className="my-4 flex items-center justify-between">
      <input
        type="text"
        placeholder="Enter a message..."
        className="border-b outline-none w-[50%] px-4 py-2 mr-5"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />
      <select
        className="border-b-2 py-2 outline-none cursor-pointer"
        onChange={(e) => setRating(e.target.value)}
      >
        <option>-- Rate the Product --</option>
        <option value={1}>1</option>
        <option value={2}>2</option>
        <option value={3}>3</option>
        <option value={4}>4</option>
        <option value={5}>5</option>
      </select>
      <button
        className="w-[17%] shadow-md py-2 hover:shadow-lg"
        onClick={sendCommentHandler}
      >
        Send
      </button>
    </div>
  );
};

export default RatingInput;
