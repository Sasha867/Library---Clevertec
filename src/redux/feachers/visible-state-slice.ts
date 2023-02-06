/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

export interface VisibleState {
  isButtonClicked: boolean;
}
const initialState: VisibleState = {
  isButtonClicked: true,
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
  },
});

export const { setFormList, setFormTile } = visibleStateSlice.actions;
export const visibleStateReducer = visibleStateSlice.reducer;
