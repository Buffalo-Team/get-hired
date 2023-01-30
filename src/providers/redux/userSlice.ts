import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './store';

export interface UserState {
  id: number | null;
  name: string;
  surname: string;
  email: string;
}

const initialState: UserState = {
  id: null,
  name: '',
  surname: '',
  email: '',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    updateUser: (state, action: PayloadAction<UserState>) => ({
      ...state,
      ...action.payload,
    }),
    clearUser: () => initialState,
  },
});

export const userSelector = (state: RootState) => state.user;

export const { updateUser, clearUser } = userSlice.actions;
export default userSlice.reducer;
