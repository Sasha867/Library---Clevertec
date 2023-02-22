/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface VisibleState {
  isButtonClicked: boolean;
  isBurger: boolean;
  isNavBarOpen: boolean;
}
const initialState: VisibleState = {
  isButtonClicked: true,
  isBurger: true,
  isNavBarOpen: true,
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
    toggleNavBarOpen: (state, action: PayloadAction<boolean>) => {
      state.isNavBarOpen = action.payload;
    },
  },
});

export const { setFormList, setFormTile, openBurgerMenu, closeBurgerMenu, toggleNavBarOpen } =
  visibleStateSlice.actions;
export const visibleStateReducer = visibleStateSlice.reducer;
