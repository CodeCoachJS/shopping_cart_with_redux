import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// an async thunk action creator
export const fetchData = createAsyncThunk('data/fetch', async () => {
	const response = await fetch('https://fakestoreapi.com/products?limit=10');
	return response.json();
});

const productsSlice = createSlice({
	name: 'products',
	initialState: { items: [], loading: false },
	extraReducers: (builder) => {
		builder.addCase(fetchData.pending, (state, action) => {
			state.loading = true;
		});
		builder.addCase(fetchData.fulfilled, (state, action) => {
			state.loading = false;
			state.items = action.payload;
		});
		builder.addCase(fetchData.rejected, (state, action) => {
			state.loading = false;
		});
	},
});

export default productsSlice.reducer;
