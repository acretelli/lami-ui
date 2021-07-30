import React from 'react';
import { render } from '../../../utils/test-utils';
import { TextField } from '.';

describe('<Button />', () => {
  it('should render the medium size by default', () => {
    const container = render(<TextField placeholder="Digite um texto aqui" />);

    expect(container).toBeInTheDocument;
  });
});
