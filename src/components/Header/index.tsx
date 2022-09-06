import { ChangeEvent, FormEvent, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { MarvelLogo } from '../../assets/images';
import { comicsOperations, hooks } from '../../state';
import { SearchInput } from '../SearchInput';
import * as S from './styles';

export const Header = () => {
  const { useAppDispatch } = hooks;
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const { searchComics, getComics } = comicsOperations;

  const [search, setSearch] = useState('');

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
      <Link onClick={() => handleClearSearch()} to={'/1'}>
        <MarvelLogo />
      </Link>
      <S.StyledForm>
        <SearchInput
          placeholder='Search for the comic title here'
          value={search}
          onChange={onSearchChanged}
        />
        <S.StyledButton onClick={handleSearch}>COMIC SEARCH</S.StyledButton>
      </S.StyledForm>
      <Link to={'/favorites'}>
        <S.StyledFavoriteIcon fontSize='large' />
      </Link>
    </S.Wrapper>
  );
};
