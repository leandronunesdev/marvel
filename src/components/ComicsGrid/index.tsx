import { ComicCard } from '..';
import { ComicType } from '../../constants/genericTypes';

import * as S from './styles';

export type ComicsGridProps = {
  comics: ComicType[];
};

export const ComicsGrid = ({ comics }: ComicsGridProps) => {
  return (
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
  );
};
