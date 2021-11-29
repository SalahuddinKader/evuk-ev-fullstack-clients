import React from 'react';
import { render } from '@testing-library/react';
import Header from '..';

describe('Header Component', () => {
  it('matches the snapshot', () => {
    const { baseElement } = render(<Header />);
    expect(baseElement).toMatchSnapshot();
  });
});
