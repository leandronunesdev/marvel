import { createReducer, SerializedError } from '@reduxjs/toolkit';
import { ComicType } from '../../../constants/genericTypes';
import actions from './actions';

export type ComicsState = {
  comics: ComicType[];
  isSearch: boolean;
  isFetching: boolean;
  error?: SerializedError;
};

const initialState: ComicsState = {
  comics: [],
  isSearch: false,
  isFetching: false,
  error: undefined,
};

const comicsReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(actions.getComics.pending, (state) => {
      state.isFetching = true;
    })
    .addCase(actions.getComics.fulfilled, (state, action) => {
      state.isFetching = false;
      state.error = undefined;
      state.comics = action.payload.data.data.results;
      state.isSearch = false;
    })
    .addCase(actions.getComics.rejected, (state, action) => {
      state.isFetching = false;
      state.error = action.error;
    })
    .addCase(actions.getComicDetails.pending, (state) => {
      state.isFetching = true;
    })
    .addCase(actions.getComicDetails.fulfilled, (state, action) => {
      state.isFetching = false;
      state.error = undefined;
    })
    .addCase(actions.getComicDetails.rejected, (state, action) => {
      state.isFetching = false;
      state.error = action.error;
    })
    .addCase(actions.searchComics.pending, (state) => {
      state.isFetching = true;
    })
    .addCase(actions.searchComics.fulfilled, (state, action) => {
      state.isFetching = false;
      state.error = undefined;
      state.comics = action.payload.data.data.results;
      state.isSearch = true;
    })
    .addCase(actions.searchComics.rejected, (state, action) => {
      state.isFetching = false;
      state.error = action.error;
    });
});

export default comicsReducer;
