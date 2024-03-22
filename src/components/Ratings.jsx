import { useEffect, useState } from "react";
import RatingInput from "./RatingInput";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import RatingCommentItem from "./RatingCommentItem";
import { apiEndpoint } from "../utils/environment";
import RatingBar from "./UI/RatingBar";

const Ratings = ({ id }) => {
  const { token } = useSelector((state) => state.auth);
  const [showCommentBox, setCommentBox] = useState(false);
  const [ratingComments, setRatingComments] = useState([]);
  const [progressBarData, setprogressBarData] = useState({
    avgRating: null,
    noOfRating: null,
    ratingBars: [],
  });
  const [comment, setComment] = useState("");
  const [rating, setRating] = useState("");
  const navigate = useNavigate();
  console.log(progressBarData);

  const toggleRatingHandler = () => {
    if (!token) {
      navigate("/login");
    }
    setCommentBox((prev) => !prev);
  };

  useEffect(() => {
    const fetchRatingComments = async () => {
      try {
        const { data } = await axios.get(`${apiEndpoint}/rating/${id}`);
        setprogressBarData((prev) => ({
          ...prev,
          avgRating: data.avgRating,
          ratingBars: data.allStars,
          noOfRating: data.noOfRating,
        }));
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
        `${apiEndpoint}/rating/${id}`,
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
          <p className="ms-4 text-2xl">
            {progressBarData.avgRating === null ? 0 : progressBarData.avgRating}{" "}
            ★
          </p>
          <p className="text-gray-600 text-sm">
            {progressBarData.noOfRating} Ratings & Reviews
          </p>
        </div>
        <div>
          {progressBarData.ratingBars.map((bar, i) => (
            <RatingBar key={bar + Math.random()} index={i + 1} ratings={JSON.stringify(bar)} />
          ))}
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
          <RatingCommentItem rating={rating} key={rating.id + Math.random()} />
        ))}
      </div>
    </div>
  );
};

export default Ratings;
