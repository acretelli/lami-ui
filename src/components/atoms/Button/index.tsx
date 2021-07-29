import React, { HTMLAttributes, ReactNode } from 'react';

export interface Props extends HTMLAttributes<HTMLButtonElement> {
  /** Provide a text for the button */
  children: ReactNode;

  /** Which variant look like for you */
  variant: 'primary' | 'secondary';
}

/** A special button */
export const Button = ({ children, variant = 'primary', ...props }: Props) => {
  return (
    <button
      {...props}
      style={{
        backgroundColor: variant === 'primary' ? 'blue' : 'gray',
      }}
    >
      {children}
    </button>
  );
};
