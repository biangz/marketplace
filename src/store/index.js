import { configureStore } from '@reduxjs/toolkit'
import userSlice from './module/user.js';

export default configureStore({
  reducer: {
    user: userSlice,
  },
})
