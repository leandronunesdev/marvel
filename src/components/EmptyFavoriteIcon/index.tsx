import * as S from './styles';

export type EmptyFavoriteIconProps = {
  onClick: () => void;
};

export const EmptyFavoriteIcon = ({ onClick }: EmptyFavoriteIconProps) => {
  return <S.EmptyFavoriteIcon onClick={onClick} fontSize='large' />;
};
