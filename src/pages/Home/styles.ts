import { Link } from 'react-router-dom';
import styled from 'styled-components';

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
