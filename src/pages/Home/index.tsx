import { useEffect } from 'react';

import { ComicCard } from '../../components';
import { ComicType } from '../../constants/genericTypes';
import { comicsOperations, comicsSelectors, hooks } from '../../state';

import * as S from './styles';

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
    <S.ComicsWrapper>
      <S.ComicsGrid>
        {comics &&
          comics.map((comic: ComicType) => (
            <S.StyledLink to={`/comic/${comic.id}`} key={comic.id}>
              <ComicCard
                thumbnailUrl={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
                title={comic.title}
              />
            </S.StyledLink>
          ))}
      </S.ComicsGrid>
    </S.ComicsWrapper>
  );
};
