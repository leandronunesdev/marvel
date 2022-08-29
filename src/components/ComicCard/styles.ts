import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    width: 224px;
    height: 400px;
    margin-bottom: 30px;
    transition: all 0.17s ease-in-out;

    &:hover {
      img {
        margin-top: 6vh;
        margin-bottom: 3vh;
        transition: all 0.17s ease-in-out;
      }
    }

    img {
      float: left;
      max-width: 224px;
      max-height: 335px;
      box-shadow: 0 26px 24px -16px rgb(0 0 0 / 40%);
      margin-bottom: 2vh;
      cursor: pointer;
      margin-top: 7vh;
    }
    p {
      font-size: 14px;
      font-family: ${theme.font.robotoCondensed};
      font-weight: ${theme.font.bold};
      letter-spacing: 1.2px;
      cursor: pointer;
      &:hover {
        color: ${theme.colors.lightRed};
      }
    }
  `}
`;
