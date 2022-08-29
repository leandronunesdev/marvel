import { Link } from 'react-router-dom';
import { MarvelLogo } from '../../assets/images';
import { SearchInput } from '../SearchInput';
import * as S from './styles';

export const Header = () => {
  return (
    <S.Wrapper>
      <Link to={'/'}>
        <MarvelLogo />
      </Link>
      <SearchInput />
      <S.StyledFavoriteIcon fontSize='large' />
    </S.Wrapper>
  );
};
