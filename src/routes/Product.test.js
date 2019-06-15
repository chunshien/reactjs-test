import React from 'react';
import Product from './Product.js';
import renderer from 'react-test-renderer';

import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import rootReducer from "../reducers";
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
const loggerMiddleware = createLogger()

const store = createStore(rootReducer,applyMiddleware(
  thunkMiddleware, // lets us dispatch() functions
  loggerMiddleware // neat middleware that logs actions
));
describe('Route - Product Test', () => {
    it('renders Product without crashing', () => {
        const component = renderer.create(
            <Provider store={store}>
                <Product />
            </Provider>
        );
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot()
    });
})