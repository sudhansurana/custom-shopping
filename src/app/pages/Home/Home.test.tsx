import React from 'react';
import renderer from 'react-test-renderer';
import { render } from '@testing-library/react';
import Home from './index';
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Link
} from 'react-router-dom'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('Home Component', () => {
    it('should render component with products', () => {
        const store = mockStore({
            productReducer: {
                products: [{
                    id: '1',
                    name: 'test name',
                    description: 'test',
                    image: 'test'
                }]
            }
        })
        const { getByText } = render(
            <Provider store={store}>
                <Router>
                    <Switch>
                        <Route path='/' exact component={Home}></Route>
                    </Switch>
                </Router>,
            </Provider>
        );
        console.log('getByText', getByText)
        expect(getByText(`test name`)).toBeInTheDocument();
    })
    it('should render component with loading indicator', () => {
        const store = mockStore({
            productReducer: {
                isLoading: true
            }
        })
        const { getByText } = render(
            <Provider store={store}>
                <Router>
                    <Switch>
                        <Route path='/' exact component={Home}></Route>
                    </Switch>
                </Router>,
            </Provider>
        );
        expect(getByText(`Loading...`)).toBeInTheDocument();
    })
})