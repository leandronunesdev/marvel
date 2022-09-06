import { comicsSelectors, hooks } from '../../state';
import * as S from './styles';

export const Footer = () => {
  const { useAppSelector } = hooks;

  const { selectComics } = comicsSelectors;
  const { isFetching, attribution } = useAppSelector(selectComics);
  return (
    <>
      {!isFetching && (
        <S.Wrapper>
          <p>{attribution}</p>
        </S.Wrapper>
      )}
    </>
  );
};
