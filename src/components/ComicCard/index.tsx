import { EmptyFavoriteIcon } from '..';
import * as S from './styles';

export type ComicCardProps = {
  thumbnailUrl: string;
  title: string;
  handleAddFavorite: () => void;
  isFavorite: boolean;
  detailsUrl: string;
};

export const ComicCard = ({
  thumbnailUrl,
  title,
  handleAddFavorite,
  isFavorite,
  detailsUrl,
}: ComicCardProps) => {
  return (
    <S.Wrapper>
      <S.FavoriteIconWrapper>
        {isFavorite ? (
          <S.FilledFavoriteIcon
            onClick={() => handleAddFavorite()}
            fontSize='large'
          />
        ) : (
          <EmptyFavoriteIcon onClick={() => handleAddFavorite()} />
        )}
      </S.FavoriteIconWrapper>
      <S.StyledLink to={detailsUrl}>
        <img src={thumbnailUrl} alt='' />
        <p>{title}</p>
      </S.StyledLink>
    </S.Wrapper>
  );
};
