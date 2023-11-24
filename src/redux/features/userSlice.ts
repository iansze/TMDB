import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentUser: null,
  isLoading: true,
  subscription: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setCurrentUser: (state, action) => {
      state.currentUser = action.payload;
    },
    setIsLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setSubscription: (state, action) => {
      state.subscription = action.payload;
    },
  },
});

export const { setCurrentUser, setIsLoading, setSubscription } =
  userSlice.actions;

export default userSlice.reducer;
