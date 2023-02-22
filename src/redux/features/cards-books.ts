/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';

import { booksApi } from '../../constans/books-api';
import { BookItem } from '../../constans/interfaces';

export interface CardsBooks {
  cardsBooksCollection: BookItem[] | null;
  loading: 'idle' | 'pending' | 'succeeded' | 'failed';
}

const initialState: CardsBooks = {
  cardsBooksCollection: [],
  loading: 'idle',
};

export const getCardsBooks = createAsyncThunk('books/fetchAllBooks', async () => {
  const response = await axios.get(`${booksApi}/books`);

  return response.data;
});

export const CardsBooksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {},
  extraReducers: (builder: any) => {
    builder
      .addCase(getCardsBooks.fulfilled, (state: CardsBooks, action: PayloadAction<BookItem[]>) => {
        state.cardsBooksCollection = action.payload;
        state.loading = 'succeeded';
      })
      .addCase(getCardsBooks.pending, (state: CardsBooks) => {
        state.loading = 'pending';
      })
      .addCase(getCardsBooks.rejected, (state: CardsBooks) => {
        state.loading = 'failed';
      });
  },
});

export const cardsBooksReducer = CardsBooksSlice.reducer;
