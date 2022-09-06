import * as S from './styles';

export type FilledFavoriteIconProps = {
  onClick: () => void;
  isComicCard?: boolean;
};

export const FilledFavoriteIcon = ({
  onClick,
  isComicCard,
}: FilledFavoriteIconProps) => {
  return (
    <S.FilledFavoriteIcon
      onClick={onClick}
      fontSize='large'
      isComicCard={isComicCard}
    />
  );
};
