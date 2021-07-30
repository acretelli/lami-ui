import styled, { css } from 'styled-components';
import { TextFieldProps } from '.';

import theme from '../../../styles/theme';

type IconPositionProps = Pick<TextFieldProps, 'iconPosition'>;

type WrapperProps = Pick<TextFieldProps, 'disabled'> & { error?: boolean };

const wrapperModifiers = {
  error: () => css`
    ${InputWrapper} {
      border-color: ${theme.colors.red};
    }
    ${Icon},
    ${Label} {
      color: ${theme.colors.red};
    }
  `,
  disabled: () => css`
    ${Label},
    ${Input},
      ${Icon} {
      cursor: not-allowed;
      color: ${theme.colors.gray};
      &::placeholder {
        color: currentColor;
      }
    }
  `,
};

export const InputWrapper = styled.div`
  ${() => css`
    display: flex;
    background: ${theme.colors.white};
    border-radius: ${theme.border.radius};
    padding: 0 ${theme.spacings.xsmall};
    border: 0.2rem solid;
    border-color: ${theme.colors.lightGray};
    &:focus-within {
      box-shadow: 0 0 0.5rem ${theme.colors.primary};
    }
  `}
`;

export const Input = styled.input<IconPositionProps>`
  ${({ iconPosition }) => css`
    color: ${theme.colors.black};
    font-family: ${theme.font.family};
    font-size: ${theme.font.sizes.medium};
    padding: ${theme.spacings.xxsmall} 0;
    padding-${iconPosition}: ${theme.spacings.xsmall};
    background: transparent;
    border: 0;
    outline: none;
    width: 100%;
  `}
`;

export const Label = styled.label`
  font-size: ${theme.font.sizes.small};
  color: ${theme.colors.black};
  cursor: pointer;
`;

export const Icon = styled.div<IconPositionProps>`
  ${({ iconPosition }) => css`
    display: flex;
    width: 2.2rem;
    color: ${theme.colors.lightGray};
    order: ${iconPosition === 'right' ? 1 : 0};
    & > svg {
      width: 100%;
    }
  `}
`;

export const Error = styled.p`
  color: ${theme.colors.gray};
  font-size: ${theme.font.sizes.xsmall};
`;

export const Wrapper = styled.div<WrapperProps>`
  ${({ error, disabled }) => css`
    ${error && wrapperModifiers.error()}
    ${disabled && wrapperModifiers.disabled()}
  `}
`;
