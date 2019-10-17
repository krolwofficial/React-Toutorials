import { combineReducers } from "redux";
import boxReducer from './boxReducer'

const rootReducer = combineReducers({
    box: boxReducer
})

export default rootReducer
