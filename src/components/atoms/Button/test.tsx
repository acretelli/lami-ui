import React from 'react';
import { render, screen } from '../../../utils/test-utils';
import { Button } from '.';

describe('<Button />', () => {
  it('should render the medium size by default', () => {
    render(<Button variant="primary">Buy now</Button>);

    expect(screen.getByRole('button', { name: /Buy now/i })).toHaveStyle({
      height: '4rem',
      padding: '0.8rem 3.2rem',
      'font-size': '1.4rem',
    });

    // expect(container.firstChild).toMatchSnapshot();
  });
});
