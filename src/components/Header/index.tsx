import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';

import { MarvelLogo, MarvelLogoSmall } from '../../assets/images';
import { comicsOperations, hooks } from '../../state';
import { SearchInput } from '../SearchInput';

import * as S from './styles';

export const Header = () => {
  const { useAppDispatch } = hooks;
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const { searchComics, getComics } = comicsOperations;

  const [search, setSearch] = useState('');
  const [width, setWidth] = useState<number>();

  const widthChange = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', widthChange);

    return () => {
      window.removeEventListener('resize', widthChange);
    };
  });

  const onSearchChanged = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const handleSearch = (e: FormEvent) => {
    e.preventDefault();
    if (search) {
      const searchParams = {
        search: search,
        offset: 0,
      };
      dispatch(searchComics(searchParams));
      navigate(`/search/${search}/1`);
    }
  };

  const handleClearSearch = () => {
    dispatch(getComics(0));
  };

  return (
    <S.Wrapper>
      <S.StyledLink onClick={() => handleClearSearch()} to={'/1'}>
        {width && width >= 760 ? <MarvelLogo /> : <MarvelLogoSmall />}
      </S.StyledLink>
      <S.StyledForm>
        <SearchInput
          placeholder='Search for the comic title here'
          value={search}
          onChange={onSearchChanged}
        />
        <S.StyledButton onClick={handleSearch}>
          {width && width >= 760 ? 'COMIC SEARCH' : <SearchRoundedIcon />}
        </S.StyledButton>
      </S.StyledForm>
      <Link to={'/favorites'}>
        <S.StyledFavoriteIcon fontSize='large' />
      </Link>
    </S.Wrapper>
  );
};
