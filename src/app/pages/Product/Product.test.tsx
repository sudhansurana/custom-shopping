import React from 'react';
import { render } from '@testing-library/react';
import Product from './index';
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import routeData from 'react-router';
import { Route, MemoryRouter } from 'react-router-dom';

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('Product Component', () => {
    it('should render component with products', () => {
        const store = mockStore({
            productReducer: {
                product: {
                    id: '123',
                    name: 'test name',
                    description: 'test',
                    quantity: 10,
                    price: 10,
                    image: 'test'
                },
                
            },
            authReducer:{
                isLoggedIn: false
            }
        })
        jest.mock('react-router', () => ({
            useParams: jest.fn().mockReturnValue({ productId: '123' }),
        }));
        const { getByText }  = render(
            <Provider store={store}>
                <MemoryRouter initialEntries={['product/1']}>
                    <Route path='product/:productId'>
                        <Product></Product>
                    </Route>
                </MemoryRouter>
            </Provider>
        )
        expect(getByText(`test name`)).toBeInTheDocument();
    })
    it('should render component with products and logged in state', () => {
        const store = mockStore({
            productReducer: {
                product: {
                    id: '123',
                    name: 'test name',
                    description: 'test',
                    quantity: 10,
                    price: 10,
                    image: 'test'
                }
            },
            authReducer:{
                isLoggedIn: true
            }
        })
        jest.mock('react-router', () => ({
            useParams: jest.fn().mockReturnValue({ productId: '123' }),
        }));
        const { getByText }  = render(
            <Provider store={store}>
                <MemoryRouter initialEntries={['product/1']}>
                    <Route path='product/:productId'>
                        <Product></Product>
                    </Route>
                </MemoryRouter>
            </Provider>
        )
        expect(getByText(`Buy`)).toBeInTheDocument();
    })
})