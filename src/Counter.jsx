import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {decrement, increment} from "./redux/toolkitReducer";
import {increment_d} from "./redux/bankReducer";

function Counter(props) {


    const [inputValue, setValue] = useState('');

    const dispatch = useDispatch();

    const inputHandler = (e) => {
        const data = '131';
        setValue(e.target.value)
        dispatch(increment_d(data))
    }

    const count = useSelector(state => state.toolkit.count)
    const userName = useSelector(state => state.toolkit.name)
    const balance = useSelector(state => state.bankreducer.balance)

    return (
        <div>
            <h1>{count}</h1>
            <p>{userName} баланс его: {balance}</p>
            <button onClick={() => dispatch(increment())}>+1</button>
            <button onClick={() => dispatch(decrement())}>-1</button>
            <input type="text" onChange={inputHandler} value={inputValue}/>
        </div>
    );
}

export default Counter;