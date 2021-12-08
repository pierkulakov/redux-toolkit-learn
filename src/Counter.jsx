import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {increment, decrement} from "./redux/toolkitReducer";

function Counter(props) {

    const count = useSelector(state => state.toolkit.count)
    const dispatch = useDispatch()

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={() => dispatch(increment())}>+1</button>
            <button onClick={() => dispatch(decrement())}>-1</button>
        </div>
    );
}

export default Counter;