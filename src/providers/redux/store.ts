import { configureStore } from '@reduxjs/toolkit';
import themeSlice from './themeSlice';
import userSlice from './userSlice';

const store = configureStore({
  reducer: {
    user: userSlice,
    theme: themeSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
