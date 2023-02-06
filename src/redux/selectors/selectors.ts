import { RootState } from '../store';

export const getButtonCondition = (state: RootState) => state.visibleStateReducer.isButtonClicked;
