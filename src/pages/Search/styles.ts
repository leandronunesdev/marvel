import styled, { css } from 'styled-components';

export const ComicsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1240px;
  padding: 20px;
  margin: auto;
  margin-bottom: 50px;
`;

export const StyledTextBox = styled.div`
  ${({ theme }) => css`
    margin: 10% auto;
    height: 100vh;
    p {
      font-family: ${theme.font.robotoCondensed};
      font-weight: ${theme.font.bold};
      letter-spacing: 1px;
      font-size: 24px;
    }
  `}
`;
