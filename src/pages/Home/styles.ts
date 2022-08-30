import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

export const ComicsWrapper = styled.div`
  display: flex;
  max-width: 1240px;
  padding: 20px;
  margin: auto;
  margin-bottom: 50px;
`;

export const ComicsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 20px;
`;

export const StyledLink = styled(Link)`
  color: inherit;
  text-decoration: none;
`;

export const StyledTextBox = styled.div`
  ${({ theme }) => css`
    margin: 10% auto;
    p {
      font-family: ${theme.font.robotoCondensed};
      font-weight: ${theme.font.bold};
      letter-spacing: 1px;
      font-size: 24px;
    }
  `}
`;
