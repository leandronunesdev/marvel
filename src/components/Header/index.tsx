import { MarvelLogo } from '../../assets/images';
import { SearchInput } from '../SearchInput';
import * as S from './styles';

export const Header = () => {
  return (
    <S.Wrapper>
      <MarvelLogo />
      <SearchInput />
      <S.StyledFavoriteIcon fontSize='large' />
    </S.Wrapper>
  );
};
