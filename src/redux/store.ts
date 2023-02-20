import { useDispatch } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';

import { cardsBooksReducer } from './features/cards-books';
import { bookReducer } from './features/choice-book';
import { visibleStateReducer } from './features/visible-state-slice';

export const useAppDispatch = () => useDispatch<typeof store.dispatch>();
export const store = configureStore({
  reducer: {
    visibleState: visibleStateReducer,
    cardsBooksState: cardsBooksReducer,
    bookState: bookReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
