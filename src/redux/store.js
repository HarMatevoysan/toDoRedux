import { createStore, applyMiddleware } from "redux"
import rootReducer from "./root-reducer"

const middleware = []

const store = createStore(rootReducer, applyMiddleware(...middleware))

export default store;