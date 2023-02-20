/* eslint-disable consistent-return */
import { RootState } from '../store';

export const getButtonCondition = (state: RootState) => state.visibleState.isButtonClicked;
export const getBurgerMenuCondition = (state: RootState) => state.visibleState.isBurger;
export const getNavBarState = (state: RootState) => state.visibleState.isNavBarOpen;
export const getCardsBooksCollectionState = (state: RootState) => state.cardsBooksState;
export const getChoiceBookState = (state: RootState) => state.bookState;

export const getStatusLoader = (state: RootState): boolean => {
  if (state.cardsBooksState.loading === 'pending' || state.bookState.loading === 'pending') {
    return true;
  }

  return false;
};

export const isShowError = (state: RootState): boolean => {
  if (state.cardsBooksState.loading === 'failed' || state.bookState.loading === 'failed') {
    return true;
  }

  return false;
};
