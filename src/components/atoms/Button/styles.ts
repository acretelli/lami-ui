import styled, { css } from 'styled-components';
import { darken } from 'polished';

import theme from '../../../styles/theme';

type WrapperProps = {
  backgroundColor: 'primary' | 'secondary';
};

export const Wrapper = styled.button<WrapperProps>`
  ${({ backgroundColor }) => css`
    padding: ${theme.spacings.xxsmall};

    color: ${backgroundColor === 'primary'
      ? theme.colors.dark
      : theme.colors.white};
    background-color: ${theme.colors[backgroundColor]};

    border: none;
    border-radius: ${theme.border.radius};

    cursor: pointer;

    &:hover {
      background-color: ${backgroundColor === 'primary'
        ? darken(0.1, theme.colors.primary)
        : darken(0.1, theme.colors.secondary)};
    }
  `}
`;
