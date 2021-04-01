import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
//16 importar axios
import Axios from 'axios';
import apiConfig from '../config/api';

//14 THUNK
export const signUp = createAsyncThunk(
  'user/singUp',
  async ({ credentials }) => {
    //ASync operation

    let response = await Axios.post(`${apiConfig.domain}/users`, {
      user: credentials,
    });
    console.log(response);
    return response.data.user;
    // throw 'error!'
  }
);

//15 SIGN IN
export const signIn = createAsyncThunk(
  'user/singUp',
  async ({ credentials }) => {
    //ASync operation

    let response = await Axios.post(`${apiConfig.domain}/users/signin`, {
      user: credentials,
    });
    return response.data.user;
  }
);
//8 importar slice
let userSlice = createSlice({
  name: 'user',
  initialState: {
    usuario: null,
    status: '',
  },

  //9 altera el estado de state
  reducers: {
    logOut: (state) => {
      state.user = null;
    },
  },
  //15 integrar thunk
  extraReducers: {
    [signUp.pending]: (state, action) => {
      state.status = 'loading';
    },
    [signUp.fulfilled]: (state, action) => {
      state.user = action.payload;
      state.status = 'success';
    },
    [signUp.rejected]: (state, action) => {
      state.status = 'failed';
    },
    [signIn.pending]: (state, action) => {
      state.status = 'loading';
    },
    [signIn.fulfilled]: (state, action) => {
      state.user = action.payload;
      state.status = 'success';
    },
    [signIn.rejected]: (state, action) => {
      state.status = 'failed';
    },
  },
});

export const {  logOut } = userSlice.actions;
export default userSlice.reducer;
