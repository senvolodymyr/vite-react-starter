import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

describe('App Component', () => {
  test('header should exist', async () => {
    render(<App />);

    const element = screen.getByTestId('clickme');
    userEvent.click(element);

    expect(await screen.findByText(/Clicked!!!/i)).toBeInTheDocument();
  });

  test('click should work', async () => {
    render(<App />);

    const element = screen.getByTestId('header');

    expect(element).toBeInTheDocument();
  });
});
