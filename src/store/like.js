import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
//16 importar axios
import Axios from "axios";
import apiConfig from "../config/api";

export const likeVideo = createAsyncThunk(
  "likes/create",
  async (videoId, thunkAPI) => {

    let token;
    try {
      token = thunkAPI.getState().user.user.jwtToken;
    } catch {
      return Promise.reject("There is not token motherfucker");
    }

    if (!token) return Promise.reject("There is not token motherfucker");
    let response = await Axios.post(
      `${apiConfig.domain}/likes`,
      {
        like: {
          videoId: videoId,
        },
      },
      {
        headers: {
          Authorization: `Bearer ${token} `,
        },
      }
    );
    return response.data;
  }
);

let likeSlice = createSlice({
  name: "like",
  initialState: {
    status: "not_loaded",
    data: {},
  },
  extraReducers: {
    [likeVideo.fulfilled]: (state, action) => {
      state.status = "success";
      state.data.videos = action.payload;
    },
  },
});

export default likeSlice.reducer;
