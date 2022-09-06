import * as S from './styles';

export type EmptyFavoriteIconProps = {
  onClick: () => void;
  isComicCard?: boolean;
};

export const EmptyFavoriteIcon = ({
  onClick,
  isComicCard,
}: EmptyFavoriteIconProps) => {
  return (
    <div>
      <S.EmptyFavoriteIcon
        onClick={onClick}
        fontSize='large'
        isComicCard={isComicCard}
      />
    </div>
  );
};
