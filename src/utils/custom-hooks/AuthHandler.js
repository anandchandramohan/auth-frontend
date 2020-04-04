import React from 'react';
import { DEFAULT_USER_AUTH } from '../Consts';

const useAuthHandler = (initialState) => {
    const [auth, setAuth] = React.useState(initialState);
    const setAuthStatus = (userAuth) => {
        window.localStorage.setItem("UserAuth", JSON.stringify(userAuth))
        setAuth(userAuth);
    }
    const setUnAuthStatus = () => {
        window.localStorage.clear;
        setAuth(DEFAULT_USER_AUTH);
    }
    return (
        auth,
        setAuthStatus,
        setUnAuthStatus
    );
}

export default useAuthHandler;