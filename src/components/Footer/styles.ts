import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    height: 70px;
    align-items: center;
    background-color: ${theme.colors.black};
    position: relative;
    width: 100%;

    p {
      color: ${theme.colors.white};
      margin: auto;
    }
  `}
`;
