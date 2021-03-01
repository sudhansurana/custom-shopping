import fetchMock from 'fetch-mock'
import configureMockStore from 'redux-mock-store'
import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import thunk from 'redux-thunk'
import * as authActions from './auth.action'
import * as types from '../types'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)
const mock = new MockAdapter(axios);
const BASE_URL = 'http://localhost:4200/'
const loginUser = {
    username: 'testuser@test.com',
    password: 'Test@123'
}
const resultUser = {
    "userName": "testuser@test.com",
    "password": "Test@123",
    "token": "d6b1d38e-60cc-41b0-afe4-7e4f296043d8",
    "id": 1
}

mock.onGet(`${BASE_URL}users`, { params: { username: loginUser.username, password: loginUser.password } }).reply(200, [
    resultUser
]);

describe('authActions', () => {
    it('should create an action to login Success', () => {
        const user = {
            name: 'test'
        }
        const expectedAction = {
            type: types.LOGIN_SUCCESS,
            user
        }
        expect(authActions.loginSuccess(user)).toEqual(expectedAction)
    })
    it('should create an action to profile Success', () => {
        const profile = {
            firstName: 'test'
        }
        const expectedAction = {
            type: types.PROFILE_SUCCESS,
            profile
        }
        expect(authActions.profileSuccess(profile)).toEqual(expectedAction)
    })
    it('should create an action to show loading', () => {
        const expectedAction = {
            type: types.SHOW_LOADING
        }
        expect(authActions.showLoader()).toEqual(expectedAction)
    })
    it('should create an action to hide loading', () => {
        const expectedAction = {
            type: types.HIDE_LOADING
        }
        expect(authActions.hideLoader()).toEqual(expectedAction)
    })
    it('should create an action to logout', () => {
        const expectedAction = {
            type: types.LOGOUT
        }
        expect(authActions.onLogout()).toEqual(expectedAction)
    })
    /*describe('authActions async', () => {
        afterEach(() => {
            fetchMock.restore()
        })


        it('creates LOGIN_SUCCESS when login has been done', () => {
            /* fetchMock.getOnce('/login', {
                body: { todos: ['do something'] },
                headers: { 'content-type': 'application/json' }
            }) */
    
            /*const expectedActions = [
                { type: types.LOGIN_SUCCESS, user: resultUser }
            ]
            const store = mockStore({ user: null })
    
            return store.dispatch(authActions.login(loginUser)).then(() => {
                // return of async actions
                expect(store.getActions()).toEqual(expectedActions)
            })
        })
    })*/
    describe('async actions', ()=>{
        // jest.useFakeTimers();
        it('should call logout actions', () => {
            const store: any = mockStore({ user: null })
            // const onLogoutSpy: any = jest.spyOn(authActions, 'onLogout');

            // jest.runAllTimers();
            store.dispatch(authActions.logout())
            // expect(onLogoutSpy).toBeCalled();
        })
    })
})