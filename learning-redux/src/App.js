import './App.css';
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, incrementByValue  } from "../src/redux/counter/actions/counterAction";

function App() {
  const [inputValue, setInputValue] = useState(null);
  const dispatch = useDispatch();
  const { counterState } = useSelector((state) => ({ counterState : state.counter }));
  return (
    <div className="App">
      <div style={{ fontSize: "20px", fontWeight: "800", marginTop: "30px" }}>
        Count is : { counterState.count}
      </div>
      <button onClick={() => dispatch(increment())}>Increase by +1</button>
      <button onClick={() => dispatch(decrement())}>Decrease by -1</button>
      <br/>
      <input type='number' value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
      <button onClick={()=>dispatch(incrementByValue(Number(inputValue)))}>Add</button>
    </div>
  );
}

export default App;
