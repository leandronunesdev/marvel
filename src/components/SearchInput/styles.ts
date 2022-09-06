import styled, { css } from 'styled-components';

export const StyledInput = styled.input`
  ${({ theme }) => css`
    height: 50px;
    width: 100%;
    padding-left: 24px;
    font-size: 16px;
    outline: none;
    font-family: ${theme.font.robotoCondensed};

    @media (max-width: 750px) {
      padding-left: 2px;
      font-size: 14px;
    }
  `}
`;
