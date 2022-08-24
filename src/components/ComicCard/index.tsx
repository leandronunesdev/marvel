import * as S from './styles';

export const ComicCard = ({ thumbnailUrl, title }: any) => {
  return (
    <S.Wrapper>
      <img src={thumbnailUrl} alt='' />
      <p>{title}</p>
    </S.Wrapper>
  );
};
