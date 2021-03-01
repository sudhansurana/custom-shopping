import React from 'react';
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import { render } from '@testing-library/react';
import Login from './index';

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('Login Component', () => {
    it('should render component ', () => {
        const store = mockStore({
            authReducer: {
                
            }
        })
        const { getByText } = render(
            <Provider store={store}>
                <Login></Login>
            </Provider>
        );
        expect(getByText(`Login`)).toBeInTheDocument();
    })
})