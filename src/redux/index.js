import {combineReducers,configureStore} from "@reduxjs/toolkit";
import {configure} from "@testing-library/react";
import toolkitReducer from "./toolkitReducer";
import bankReducer from "./bankReducer";

const rootReducer = combineReducers({
    toolkit: toolkitReducer,
    bankreducer: bankReducer
})

export const store = configureStore({
    reducer: rootReducer
})