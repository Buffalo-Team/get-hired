import { createSlice } from '@reduxjs/toolkit';
import { IUserState } from '~/@types/redux';

const initialState: IUserState = {
  id: null,
  name: '',
  surname: '',
  email: '',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    updateUser: (state, action: { payload: IUserState }) => {
      const { id, name, surname, email } = action.payload;
      state.id = id;
      state.name = name;
      state.surname = surname;
      state.email = email;
    },
    clearUser: () => initialState,
  },
});

export const { updateUser, clearUser } = userSlice.actions;
export default userSlice.reducer;
