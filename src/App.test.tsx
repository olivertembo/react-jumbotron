import React from 'react';
import { render, screen } from '@testing-library/react';
import Jumbotron from './Jumbotron';

test('renders Jumbotron component', () => {
  render(<Jumbotron />);
  const jumbotronElement = screen.getByTestId('jumbotron');
  expect(jumbotronElement).toBeInTheDocument();
  
});
