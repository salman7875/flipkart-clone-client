import { useEffect, useState } from "react";
import RatingInput from "./RatingInput";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import RatingCommentItem from "./RatingCommentItem";

const Ratings = ({ id }) => {
  const { token } = useSelector((state) => state.auth);
  const [showCommentBox, setCommentBox] = useState(false);
  const [ratingComments, setRatingComments] = useState([]);
  const [comment, setComment] = useState("");
  const [rating, setRating] = useState("");
  const navigate = useNavigate();

  const toggleRatingHandler = () => {
    if (!token) {
      navigate("/login");
    }
    setCommentBox((prev) => !prev);
  };

  useEffect(() => {
    const fetchRatingComments = async () => {
      try {
        const { data } = await axios.get(`http://localhost:5000/rating/${id}`);
        setRatingComments(data.ratings);
      } catch (err) {
        console.log(err);
      }
    };
    fetchRatingComments();
  }, [id, comment]);

  const sendCommentHandler = async (id) => {
    try {
      const data = await axios.post(
        `http://localhost:5000/rating/${id}`,
        { message: comment, rating },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + token,
          },
        }
      );
      if (data.status !== 201) {
        throw new Error("Something went wrong!");
      }
      setComment("");
      setRating("");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="border-[1px] mt-5 py-2 px-4">
      <div className="flex justify-between">
        <h3 className="font-medium text-2xl">Ratings & Reviews</h3>
        <button
          className="w-52 py-2 shadow-xl hover:shadow-lg"
          onClick={toggleRatingHandler}
        >
          Rate Product
        </button>
      </div>

      <div className="flex gap-10 items-center">
        <div>
          <p className="ms-4 text-2xl">4.4 ★</p>
          <p className="text-gray-600 text-sm">2,562 Ratings &</p>
          <p className="text-gray-600 text-sm ms-1">310 Reviews</p>
        </div>
        <div>
          <div className="w-56 h-[0.4rem] bg-gray-200 rounded-full mb-2">
            <div className="h-full bg-blue-500 rounded-full w-[90%]"></div>
          </div>
          <div className="w-56 h-[0.4rem] bg-gray-200 rounded-full mb-2">
            <div className="h-full bg-blue-500 rounded-full w-[60%]"></div>
          </div>
          <div className="w-56 h-[0.4rem] bg-gray-200 rounded-full mb-2">
            <div className="h-full bg-blue-500 rounded-full w-[37%]"></div>
          </div>
          <div className="w-56 h-[0.4rem] bg-gray-200 rounded-full mb-2">
            <div className="h-full bg-red-500 rounded-full w-[7%]"></div>
          </div>
        </div>
      </div>

      <div className="h-[0.1rem] w-full my-4 bg-gray-300"></div>

      {showCommentBox ? (
        <RatingInput
          setRating={setRating}
          comment={comment}
          setComment={setComment}
          onAddComment={() => sendCommentHandler(id)}
        />
      ) : (
        ""
      )}

      <div>
        {ratingComments.map((rating) => (
          <RatingCommentItem rating={rating} key={rating.id} />
        ))}
      </div>
    </div>
  );
};

export default Ratings;
