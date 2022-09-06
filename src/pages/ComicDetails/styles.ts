import styled, { css } from 'styled-components';

export const ComicDetailsWrapper = styled.div`
  display: flex;
  max-width: 1240px;
  padding: 20px;
  margin: auto;
`;

export const ComicDetails = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: 1fr 4fr;
    grid-gap: 50px;
    padding: 50px 0;

    img {
      max-width: 350px;
    }

    h1,
    h2 {
      font-family: ${theme.font.robotoCondensed};
    }

    h1 {
      font-size: 26px;
    }

    h2 {
      font-size: 20px;
      margin-top: 20px;
    }

    @media (max-width: 800px) {
      grid-template-columns: 1fr;

      div:first-child {
        margin: auto;
      }
    }

    @media (max-width: 400px) {
      img {
        width: 100%;
      }
    }
  `}
`;

export const ComicDetailsHeader = styled.div`
  display: grid;
  grid-template-columns: 3fr 1fr;
`;
