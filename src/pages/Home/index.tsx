import { useEffect } from 'react';
import { ComicCard } from '../../components';
import { ComicType } from '../../constants/genericTypes';
import { comicsOperations, comicsSelectors, hooks } from '../../state';

export const Home = () => {
  const { useAppDispatch, useAppSelector } = hooks;
  const dispatch = useAppDispatch();

  const { getComics } = comicsOperations;
  const { selectComics } = comicsSelectors;
  const { comics } = useAppSelector(selectComics);

  useEffect(() => {
    dispatch(getComics());
  }, [dispatch, getComics]);

  return (
    <div>
      {comics &&
        comics.map((comic: ComicType) => (
          <ComicCard
            key={comic.id}
            thumbnailUrl={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
            title={comic.title}
          />
        ))}
    </div>
  );
};
