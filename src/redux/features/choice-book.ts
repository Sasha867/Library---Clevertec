/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';

import { booksApi } from '../../constans/books-api';
import { ChoiceBook } from '../../constans/interfaces';

export interface Book {
  choiceBook: ChoiceBook | null;
  loading: 'idle' | 'pending' | 'succeeded' | 'failed';
}

const initialState: Book = {
  choiceBook: null,
  loading: 'idle',
};

export const getChoiceBook = createAsyncThunk('book/fetchChoiceBook', async (bookId: string) => {
  const response = await axios.get(`${booksApi}/books/${bookId}`);

  console.log(response);

  return response.data;
});

export const bookSlice = createSlice({
  name: 'book',
  initialState,
  reducers: {},
  extraReducers: (builder: any) => {
    builder
      .addCase(getChoiceBook.fulfilled, (state: Book, action: PayloadAction<ChoiceBook>) => {
        state.choiceBook = action.payload;
        state.loading = 'succeeded';
      })
      .addCase(getChoiceBook.pending, (state: Book) => {
        state.loading = 'pending';
      })
      .addCase(getChoiceBook.rejected, (state: Book) => {
        state.loading = 'failed';
      });
  },
});

export const bookReducer = bookSlice.reducer;
