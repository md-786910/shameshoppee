import changeTheNumber from "./upDown"
import changeBack from "./changeColor"
import { combineReducers } from "redux"

const rootReducer = combineReducers({
    changeTheNumber,
    changeBack
})

export default rootReducer