import styled, { css, DefaultTheme } from 'styled-components';
import StarBorderRoundedIcon from '@mui/icons-material/StarBorderRounded';

type EmptyFavoriteIconType = {
  theme: DefaultTheme;
  isComicCard?: boolean;
};

export const EmptyFavoriteIcon = styled(StarBorderRoundedIcon)`
  ${({ theme, isComicCard }: EmptyFavoriteIconType) => css`
    color: ${theme.colors.yellow};
    cursor: pointer;
    background: ${theme.colors.transparentWhite};
    border-radius: 50%;

    ${isComicCard &&
    css`
      position: absolute;
      top: 75px;
      right: 15px;
      opacity: 0;
    `}
  `}
`;