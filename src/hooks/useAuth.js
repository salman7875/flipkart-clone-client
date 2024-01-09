import axios from "axios";
import { useDispatch } from "react-redux";
import { loginUser } from "../redux/AuthSlice";
import { useState } from "react";
import { apiEndpoint } from "../utils/environment";


const useAuth = () => {
  const dispatch = useDispatch();
  const [error, setError] = useState(false);

  const authHandler = async (type, formData) => {
    try {
      const { data } = await axios.post(
        `${apiEndpoint}/auth/${type}`,
        JSON.stringify(formData),
        {
          headers: { "Content-Type": "application/json" },
        }
      );
        dispatch(loginUser(data));
      return data;
    } catch (err) {
      setError(err);
      return err
    }
  };

  return { authHandler, error };
};

export default useAuth;
