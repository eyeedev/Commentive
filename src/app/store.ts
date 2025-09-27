import { configureStore } from '@reduxjs/toolkit'
import postsReducer from '../features/posts/postsSlice'
import usersReducer from '@/features/users/usersSlice'
import authReducer from '@/features/auth/authSlice'

export const store = configureStore({
  // Pass in the root reducer setup as the `reducer` argument
  reducer: {
    posts: postsReducer,
    users: usersReducer,
    auth: authReducer,
  }
})

//store type
export type AppStore = typeof store;
//dispatch type
export type AppDispatch = typeof store.dispatch;
//root state type
export type RootState = ReturnType<typeof store.getState>