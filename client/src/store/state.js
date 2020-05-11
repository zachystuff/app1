import React, { createContext, useContext, useReducer } from 'react';

// First we createContext and assign it to StateContext object containing Provider and Consumer. We will need just a Provider here.
export const StateContext = createContext();

// React component called StateProvider. This component wraps it’s children with Provider that accepts value prop.
export const StateProvider = ({ reducer, initialState, children }) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
);

// useReducer accept reducer and initialState which are passed as a props from outside. So you have full control over them inside your app as you will see below.
export const useStateValue = () => useContext(StateContext);