import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {  fetchLoggedInUserOrders } from './UserAPI';

const initialState = {
  userOrders : [] , 
  status: 'idle',
};

export const fetchLoggedInUserOrdersAsync = createAsyncThunk(
  'user/fetchLoggedInUserOrders',
  async (id) => {
    const response = await fetchLoggedInUserOrders(id);
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchLoggedInUserOrdersAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchLoggedInUserOrdersAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        // This info can be differnent or more from Logged-in User Info 
        state.userOrders = action.payload;
      });
  },
});

export const { increment } = userSlice.actions;

export const SelectUserOrders = (state) => state.user.userOrders

export default userSlice.reducer;
