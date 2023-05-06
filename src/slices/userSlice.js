import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
	name: 'user',
	initialState: {
		user: 'Brian',
	},
});

// Action creators are generated for each case reducer function

// BONUS TODO: add a reducer to change the user name

export default userSlice.reducer;
