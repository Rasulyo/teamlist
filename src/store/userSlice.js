import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  generateID,
  saveDataToLocalStorage,
  fetchDataFromJsonFile,
} from "../utils";

export const fetchInitialData = createAsyncThunk(
  "user/fetchInitialData",
  async (_, thunkAPI) => {
    try {
      const data = await fetchDataFromJsonFile();
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);
const initialState = {
  data: [],
  editMode: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    createUser: (state, action) => {
      action.payload.id = generateID();
      state.data.push(action.payload);
      saveDataToLocalStorage(action.payload);
    },
    deleteUser: (state, action) => {
      state.data = state.data.filter((item, index) => index !== action.payload);
    },
    editUser: (state, action) => {
      state.data = state.data.map((elem) =>
        elem.id === action.payload.id ? action.payload : elem,
      );
    },
    setEditMode: (state, action) => {
      state.editMode = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchInitialData.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchInitialData.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(fetchInitialData.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export const { createUser, editUser, deleteUser, setEditMode } =
  userSlice.actions;

export const selectData = (state) => state.users.data;
export const selectEditMode = (state) => state.users.editMode;

export default userSlice.reducer;
