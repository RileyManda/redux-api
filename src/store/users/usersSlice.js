import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [],
  isLoading: false,
  error: undefined,
};

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    isLoaded: (state) => {
      state.isLoading = true;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const { isLoaded, setError } = usersSlice.actions;
export default usersSlice.reducer;
