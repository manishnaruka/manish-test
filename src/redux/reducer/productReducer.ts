import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getProductsApi } from "../api";

const fetchApiData: any = createAsyncThunk("data/fetch", async () => {
  const response = await getProductsApi();
  return response.products;
});

const productSlice = createSlice({
  name: "data",
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchApiData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchApiData.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchApiData.rejected, (state: any, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

const productReducer = productSlice.reducer;

export { productReducer, fetchApiData };
