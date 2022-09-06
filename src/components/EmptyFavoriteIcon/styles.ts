import styled, { css } from 'styled-components';
import StarBorderRoundedIcon from '@mui/icons-material/StarBorderRounded';

type EmptyFavoriteIconType = {
  isComicCard?: boolean;
};

export const EmptyFavoriteIconWrapper = styled.div`
  ${({ isComicCard }: EmptyFavoriteIconType) => css`
    ${isComicCard &&
    css`
      position: absolute;
      top: 75px;
      right: 15px;

      svg {
        opacity: 0;
      }
    `}
  `}
`;

export const EmptyFavoriteIcon = styled(StarBorderRoundedIcon)`
  ${({ theme }) => css`
    color: ${theme.colors.yellow};
    cursor: pointer;
    background: ${theme.colors.transparentWhite};
    border-radius: 50%;
  `}
`;
