import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import App from '../src/App';
import { Provider } from 'react-redux';
import { store } from '../src/redux/store';

test('renders food items', () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );

  expect(screen.getByText(/Pizza/i)).toBeInTheDocument();
});

test('renders cart', () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );

  expect(
    screen.getByRole('heading', { name: /Cart/i })
  ).toBeInTheDocument();
});