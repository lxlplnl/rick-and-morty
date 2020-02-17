import React from 'react';
import { render } from '@testing-library/react';
import { NotFound } from './index';
import { MemoryRouter } from "react-router-dom";

test('Render Not Found Page', () => {
  const setHeader = jest.fn();
  const { getByText } = render(<MemoryRouter><NotFound setHeader={setHeader} /></MemoryRouter>);
  const linkElement = getByText(/return to home page/i);
  expect(linkElement).toBeInTheDocument();
  expect(setHeader.mock.calls.length).toBe(1);
});
