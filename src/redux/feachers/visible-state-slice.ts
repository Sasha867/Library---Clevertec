/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

export interface VisibleState {
  isButtonClicked: boolean;
  isBurger: boolean;
}
const initialState: VisibleState = {
  isButtonClicked: true,
  isBurger: true,
};

const visibleStateSlice = createSlice({
  name: 'visible',
  initialState,
  reducers: {
    setFormList: (state) => {
      state.isButtonClicked = false;
    },
    setFormTile: (state) => {
      state.isButtonClicked = true;
    },
    openBurgerMenu: (state) => {
      state.isBurger = true;
    },
    closeBurgerMenu: (state) => {
      state.isBurger = false;
    },
  },
});

export const { setFormList, setFormTile, openBurgerMenu, closeBurgerMenu } = visibleStateSlice.actions;
export const visibleStateReducer = visibleStateSlice.reducer;

