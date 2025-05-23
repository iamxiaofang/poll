import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router';
import configureMockStore from 'redux-mock-store';
import { thunk } from "redux-thunk";
import App from './App';

const mockStore = configureMockStore([thunk]);

test('renders app', () => {
  const store = mockStore({
    loading: false,
    questions: {},
    login: { user: null },
  });

  render(
    <Provider store={store}>
      <MemoryRouter future={{ v7_relativeSplatPath: true }}>
        <App />
      </MemoryRouter>
    </Provider>
  );

  const userElement = screen.getByText(/Login/i);
  expect(userElement).toBeInTheDocument();
});
