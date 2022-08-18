import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const COMICS_URL = 'http://gateway.marvel.com/v1/public/comics';

const getComics = createAsyncThunk(
  'comics/getComics',
  async (test: void, { rejectWithValue }) => {
    try {
      const ts = '1660759425';
      const apikey = '1da8adb9d8fdb7ffb3cc16b00643ae7c';
      const hash = '74cd6b9fa89759bb0f008095503f3212';

      const { data } = await axios.get(
        `${COMICS_URL}?ts=${ts}&apikey=${apikey}&hash=${hash}`
      );
      return { data };
    } catch (err: any) {
      if (!(err as Record<string, string>).response) {
        throw err;
      }
      return rejectWithValue({ message: err.message, type: 'error' });
    }
  }
);

const comicsActions = {
  getComics,
};

export default comicsActions;
