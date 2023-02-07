import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './store';

export enum ThemeMode {
  Light = 'light',
  Dark = 'dark',
}

export interface ThemeState {
  mode: ThemeMode;
}

const initialState: ThemeState = {
  mode: ThemeMode.Light,
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setTheme: (_, action: PayloadAction<ThemeMode>) => ({
      mode: action.payload,
    }),
  },
});

export const themeSelector = (state: RootState) => state.theme;

export const { setTheme } = themeSlice.actions;
export default themeSlice.reducer;
