import styled, { css } from 'styled-components';
import StarBorderRoundedIcon from '@mui/icons-material/StarBorderRounded';

export const EmptyFavoriteIcon = styled(StarBorderRoundedIcon)`
  ${({ theme }) => css`
    color: ${theme.colors.yellow};
    cursor: pointer;
    background: ${theme.colors.transparentWhite};
    border-radius: 50%;
    position: absolute;
    top: 75px;
    right: 15px;
    opacity: 0;
  `}
`;
