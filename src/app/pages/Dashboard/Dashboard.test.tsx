import React from 'react';
import renderer from 'react-test-renderer';
import { render } from '@testing-library/react';
import Dashbaord from './index';
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Link
} from 'react-router-dom'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

const mock = new MockAdapter(axios);
const BASE_URL = 'http://localhost:4200/'
const testUser = {
    "userName": "testuser@test.com",
    "password": "Test@123",
    "token": "d6b1d38e-60cc-41b0-afe4-7e4f296043d8",
    "id": 1
}

const testProfile = {
    "firstName": "Test",
    "lastName": "User",
    "email": "testuser@test.com",
    "mobile": "6634598712",
    "address1": "Davenahali",
    "address2": "Bangalore",
    "city": "Bangalore",
    "state": "Karnataka",
    "country": "India",
    "pin": "982312",
    "profileImage": "data:image/png;base64,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",
    "token": "d6b1d38e-60cc-41b0-afe4-7e4f296043d8",
    "id": 1
  }

mock.onGet(`${BASE_URL}profile`, { params: { userName: testUser.userName} }).reply(200, [
    testProfile
]);

describe('Home Component', () => {
    it('should render component without profile', () => {
        const store = mockStore({
            authReducer: {
                
            }
        })
        const { getByText } = render(
            <Provider store={store}>
                <Dashbaord></Dashbaord>
            </Provider>
        );
        expect(getByText(`No Profile`)).toBeInTheDocument();
    })
    it('should render component with profile details', () => {
        const store = mockStore({
            authReducer: {
                profile: testProfile
            }
        })
        const { getByText } = render(
            <Provider store={store}>
                <Dashbaord></Dashbaord>
            </Provider>
        );
        expect(getByText(testProfile.firstName)).toBeInTheDocument();
    })
    it('should render component with profile and user details', () => {
        const store = mockStore({
            authReducer: {
                user: testUser,
                profile: testProfile
            }
        })
        // const getProfileSpy: any = jest.spyOn(store, 'dispatch');
        const { getByText } = render(
            <Provider store={store}>
                <Dashbaord></Dashbaord>
            </Provider>
        );
        // expect(getProfileSpy).toBeCalled();
        expect(getByText(testProfile.email)).toBeInTheDocument();
    })
})