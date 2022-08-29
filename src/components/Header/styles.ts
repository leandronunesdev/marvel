import styled, { css } from 'styled-components';
import StarIcon from '@mui/icons-material/Star';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;
    height: 70px;
    box-shadow: 0 2px 5px 0 rgb(0 0 0 / 40%);
    align-items: center;
    background-color: ${theme.colors.black};

    svg:first-child {
      margin-left: 50px;
      cursor: pointer;
    }
  `}
`;

export const StyledFavoriteIcon = styled(StarIcon)`
  ${({ theme }) => css`
    color: ${theme.colors.yellow};
    margin-right: 50px;
    cursor: pointer;
  `}
`;
