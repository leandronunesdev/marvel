import { useEffect } from 'react';

import { ComicCard, Loading } from '../../components';
import { ComicType } from '../../constants/genericTypes';
import { comicsOperations, comicsSelectors, hooks } from '../../state';

import * as S from './styles';

export const Home = () => {
  const { useAppDispatch, useAppSelector } = hooks;
  const dispatch = useAppDispatch();

  const { getComics } = comicsOperations;
  const { selectComics } = comicsSelectors;
  const { comics, isFetching } = useAppSelector(selectComics);

  useEffect(() => {
    dispatch(getComics());
  }, [dispatch, getComics]);

  return (
    <S.ComicsWrapper>
      {isFetching ? (
        <Loading />
      ) : (
        <>
          {comics.length ? (
            <S.ComicsGrid>
              {comics.map((comic: ComicType) => (
                <S.StyledLink to={`/comic/${comic.id}`} key={comic.id}>
                  <ComicCard
                    thumbnailUrl={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
                    title={comic.title}
                  />
                </S.StyledLink>
              ))}
            </S.ComicsGrid>
          ) : (
            <S.StyledTextBox>
              <p>NO MATCHES FOUND!</p>
            </S.StyledTextBox>
          )}
        </>
      )}
    </S.ComicsWrapper>
  );
};
