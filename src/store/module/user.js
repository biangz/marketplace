import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    address: 0,
  },
  reducers: {
    setAddress: (state, action) => {
      state.address = action.value
    },
  },
})

// Action creators are generated for each case reducer function
export const { setAddress } = userSlice.actions

export default userSlice.reducer
