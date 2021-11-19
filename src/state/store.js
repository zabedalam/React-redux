/* eslint-disable no-unused-vars */
// import { createStore,applyMiddleware } from "redux";
// import reducers from './reducers/index'
// import thunk from 'redux-thunk'

// export const store=createStore(
//     reducers,
//     {},
//     applyMiddleware(thunk)
// )

//New counter
import { createStore, applyMiddleware } from "redux";
import reducers from "./reducers/index";
import thunk from "redux-thunk";

export const store = createStore(reducers, {}, applyMiddleware(thunk));
