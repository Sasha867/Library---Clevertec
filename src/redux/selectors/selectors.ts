import { RootState } from '../store';

export const getButtonCondition = (state: RootState) => state.visibleStateReducer.isButtonClicked;
export const getBurgerMenuCondition = (state: RootState) => state.visibleStateReducer.isBurger;
