import { render, screen } from '@testing-library/react';
import App from './App';

test('renders page header', () => {
  render(<App />);
  const linkElement = screen.getByText(/my dream team/i);
  expect(linkElement).toBeInTheDocument();
});
