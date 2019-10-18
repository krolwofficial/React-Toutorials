import React from 'react'
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './reducers/index'
import {Provider} from 'react-redux'
import reduxPromise from 'redux-promise'

export default ({children, initialState = {}}) => {
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

    const store = createStore(
        rootReducer,
        initialState,
        composeEnhancers(
            applyMiddleware(reduxPromise)
        )
    )

    return (
        <Provider store={store}>
            {children}
        </Provider>
    )
}
