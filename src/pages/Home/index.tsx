import { useEffect, useState } from 'react';

import { ComicCard, Loading } from '../../components';
import { ComicType } from '../../constants/genericTypes';
import { comicsOperations, comicsSelectors, hooks } from '../../state';

import * as S from './styles';
import { CustomPagination } from '../../components/Pagination';
import { useNavigate, useParams } from 'react-router-dom';

export const Home = () => {
  const { useAppDispatch, useAppSelector } = hooks;
  const dispatch = useAppDispatch();
  const params = useParams();
  const navigate = useNavigate();

  const { getComics, searchComics } = comicsOperations;
  const { selectComics } = comicsSelectors;
  const { comics, isFetching, isSearch, pages } = useAppSelector(selectComics);

  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    if (!isSearch && !comics.length) {
      dispatch(getComics(0));
    }
  }, [dispatch, getComics, isSearch, comics]);

  const handlePageChange = (e: any) => {
    const page = parseInt(e.currentTarget.textContent);
    const offset = (page - 1) * 20;
    setCurrentPage(page);
    if (isSearch) {
      const searchParams = {
        search: params.search,
        offset: offset,
      };
      dispatch(searchComics(searchParams));
      navigate(`/search/${params.search}/${page}`);
    } else {
      dispatch(getComics(offset));
      navigate(`/${page}`);
    }
  };

  useEffect(() => {
    if (params.page) {
      setCurrentPage(parseInt(params.page));
    }
  }, [params]);

  return (
    <S.ComicsWrapper>
      {isFetching ? (
        <Loading />
      ) : (
        <>
          {comics.length ? (
            <>
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
              <CustomPagination
                count={pages}
                onChange={handlePageChange}
                page={currentPage}
              />
            </>
          ) : (
            <S.StyledTextBox>
              <p>NO MATCHES FOUND!</p>
            </S.StyledTextBox>
          )}
        </>
      )}
    </S.ComicsWrapper>
  );
};
