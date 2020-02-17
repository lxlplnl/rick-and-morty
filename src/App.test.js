import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('Render App', () => {
  const { getByText } = render(<App />);
  const titleElement = getByText(/characters/i);
  expect(titleElement).toBeInTheDocument();
});
