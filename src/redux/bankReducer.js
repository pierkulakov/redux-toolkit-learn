import {createAction, createReducer} from "@reduxjs/toolkit";

const initialState = {
    balance: 231,
    balance_holder: '',
}

export const increment_d = createAction('INCREMENT_D');

export default createReducer (initialState, {
    [increment_d]: (state, data) => {
        state.balance = state.balance + 1;
        console.log(state,data)
    },
})