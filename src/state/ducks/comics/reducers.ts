import { createReducer, SerializedError } from '@reduxjs/toolkit';
import { ComicType } from '../../../constants/genericTypes';
import actions from './actions';

export type ComicsState = {
  comics: ComicType[];
  isFetching: boolean;
  error?: SerializedError;
};

const initialState: ComicsState = {
  comics: [],
  isFetching: false,
  error: undefined,
};

const comicsReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(actions.getComics.pending, (state) => {
      state.isFetching = true;
    })
    .addCase(actions.getComics.fulfilled, (state, action) => {
      console.log(action.payload);
      state.isFetching = false;
      state.error = undefined;
      state.comics = action.payload.data.data.results;
    })
    .addCase(actions.getComics.rejected, (state, action) => {
      state.isFetching = false;
      state.error = action.error;
    });
});

export default comicsReducer;
