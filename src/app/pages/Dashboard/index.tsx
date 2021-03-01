import React, { useEffect, useState } from 'react'
import { connect, useDispatch, useSelector } from 'react-redux'
import { bindActionCreators } from 'redux';

import * as actions from '../../redux/actions'
import { IAuthState } from '../../redux/reducers/auth.reducer';
import './index.css'

interface IState {
    authReducer?: IAuthState
}

const Dashboard = (props: any) => {

    const dispatch = useDispatch();
    const isLoggedIn = useSelector((state: IState) => state.authReducer?.isLoggedIn);
    const profile = useSelector((state: IState) => state.authReducer?.profile);
    const user = useSelector((state: IState) => state.authReducer?.user);
    const { isLoading } = props;

    useEffect(() => {
        if (!!user) {
            dispatch(actions.getProfile(user.userName))
        }
    }, []);

    return (
        <div className="starter-template text-center py-5 px-3 mt-5 border bg-white">
            {!!profile && <div className="container-fluid">
                <img src={`${profile.profileImage}`}></img>
                <div className="mb-3 row">
                    <label className="col-sm-6 col-form-label text-start text-sm-start text-lg-end bd-highlight text-black-50">First Name : </label>
                    <label className="col-sm-6 text-start col-form-label">{profile.firstName}</label>
                </div>
                <div className="mb-3 row">
                    <label className="col-sm-6 col-form-label text-start text-sm-start text-lg-end bd-highlight text-black-50">LastName Name : </label>
                    <label className="col-sm-6 text-start col-form-label">{profile.lastName}</label>
                </div>
                <div className="mb-3 row">
                    <label className="col-sm-6 col-form-label text-start text-sm-start text-lg-end bd-highlight text-black-50">Email : </label>
                    <label className="col-sm-6 text-start col-form-label">{profile.email}</label>
                </div>
                <div className="mb-3 row">
                    <label className="col-sm-6 col-form-label text-start text-sm-start text-lg-end bd-highlight text-black-50">Mobile : </label>
                    <label className="col-sm-6 text-start col-form-label">{profile.mobile}</label>
                </div>
            </div>}
            {!profile && <label>No Profile</label>}
        </div>
    )
}

export default Dashboard
