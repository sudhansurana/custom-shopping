import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import configureStore from './app/redux/store'
import App from './App';
const store = configureStore()

test('renders learn react link', () => {
  const { getByText } = render(
    <React.StrictMode>
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    </React.StrictMode>,
  );
  expect(getByText(/Amazing Shop/i)).toBeInTheDocument();
});
