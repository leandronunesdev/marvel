import styled, { css } from 'styled-components';

export const StyledInput = styled.input`
  ${({ theme }) => css`
    height: 50px;
    width: 100%;
    padding-left: 24px;
    font-size: 16px;
    outline: none;
    font-family: ${theme.font.robotoCondensed};
  `}
`;
