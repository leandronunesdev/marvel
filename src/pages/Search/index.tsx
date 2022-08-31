import { useEffect, useState } from 'react';

import { ComicCard, ComicsGrid, Loading } from '../../components';
import { ComicType } from '../../constants/genericTypes';
import { comicsOperations, comicsSelectors, hooks } from '../../state';

import * as S from './styles';
import { CustomPagination } from '../../components/Pagination';
import { useNavigate, useParams } from 'react-router-dom';
import { checkPage } from '../../utils/pageHelper';

export const Search = () => {
  const { useAppDispatch, useAppSelector } = hooks;
  const dispatch = useAppDispatch();
  const params = useParams();
  const navigate = useNavigate();

  const { searchComics } = comicsOperations;
  const { selectComics } = comicsSelectors;
  const { comics, isFetching, pages } = useAppSelector(selectComics);

  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    if (!comics.length && params.page) {
      setCurrentPage(parseInt(params.page));
      const offset = (parseInt(params.page) - 1) * 20;

      const searchParams = {
        search: params.search,
        offset: offset,
      };

      dispatch(searchComics(searchParams));
    }
  }, [comics, params, dispatch, searchComics]);

  const handlePageChange = (e: any) => {
    const page = checkPage(e, currentPage);
    const offset = (page - 1) * 20;
    setCurrentPage(page);

    const searchParams = {
      search: params.search,
      offset: offset,
    };

    dispatch(searchComics(searchParams));
    navigate(`/search/${params.search}/${page}`);
  };

  return (
    <S.ComicsWrapper>
      {isFetching ? (
        <Loading />
      ) : (
        <>
          {comics.length ? (
            <>
              <ComicsGrid comics={comics} />
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
