// import { combineReducers } from "redux";
// import bankReducer from './bankReducers'

// const reducers=combineReducers({
//     bank:bankReducer
// })

// export default reducers

//New counter
import { combineReducers } from "redux";
import counter from './bankReducers'

const reducers=combineReducers({
    count:counter
})

export default reducers