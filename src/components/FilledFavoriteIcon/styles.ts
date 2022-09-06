import styled, { css, DefaultTheme } from 'styled-components';
import StarRoundedIcon from '@mui/icons-material/StarRounded';

type FilledFavoriteIconType = {
  theme: DefaultTheme;
  isComicCard?: boolean;
};

export const FilledFavoriteIcon = styled(StarRoundedIcon)`
  ${({ theme, isComicCard }: FilledFavoriteIconType) => css`
    color: ${theme.colors.yellow};
    cursor: pointer;
    background: ${theme.colors.transparentWhite};
    border-radius: 50%;

    ${isComicCard &&
    css`
      position: absolute;
      top: 75px;
      right: 15px;
      opacity: 1;
    `}
  `}
`;
