import { useEffect } from 'react';
import { comicsOperations, hooks } from '../../state';

export const Home = () => {
  const { useAppDispatch } = hooks;
  const dispatch = useAppDispatch();

  const { getComics } = comicsOperations;

  useEffect(() => {
    dispatch(getComics());
  }, [dispatch, getComics]);

  return (
    <div>
      <p>Homeee</p>
    </div>
  );
};
