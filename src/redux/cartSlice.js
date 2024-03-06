import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { apiEndpoint } from "../utils/environment";

const initialState = {
  noOfItem: 0,
  error: null,
  isLoading: false,
};

const addToCart = createAsyncThunk("cart/addToCart", async (data) => {
  const { data } = await axios.post(
    `${apiEndpoint}/user/cart?id=${data.id}&q=1`
  );
  return data;
});

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(addToCart.fulfilled, (state, action) => {
      state.noOfItem += 1;
    });
  },
});
