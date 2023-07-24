import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import fetchUsers from '../../components/userAPI';

export const fetchUsersAsync = createAsyncThunk(
  'users/fetchUsers',
  async (_, thunkAPI) => {
    try {
      const users = await fetchUsers();
      return users;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

const initialState = {
  users: [],
  isLoading: false,
  error: undefined,
};

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsersAsync.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchUsersAsync.fulfilled, (state, action) => {
        state.isLoading = false;
        state.users = action.payload;
      })
      .addCase(fetchUsersAsync.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export default usersSlice.reducer;
