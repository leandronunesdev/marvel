import { ComicsGrid, Loading } from '../../components';
import { comicsSelectors, hooks } from '../../state';

import * as S from './styles';

export const Favorites = () => {
  const { useAppSelector } = hooks;

  const { selectComics } = comicsSelectors;
  const { favorites, isFetching } = useAppSelector(selectComics);

  return (
    <S.ComicsWrapper>
      {isFetching ? (
        <Loading />
      ) : (
        <>
          {favorites.length ? (
            <>
              <ComicsGrid comics={favorites} />
            </>
          ) : (
            <S.StyledTextBox>
              <p>NO FAVORITES FOUND!</p>
            </S.StyledTextBox>
          )}
        </>
      )}
    </S.ComicsWrapper>
  );
};
