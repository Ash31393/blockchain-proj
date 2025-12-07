import { render, screen } from '@testing-library/react';
import Header from './Header';

test('renders header with title', () => {
  render(<Header />);
  // @ts-expect-error: Custom matcher from jest-dom
  expect(screen.getByText(/Web3 DApp Playground/i)).toBeInTheDocument();
});
